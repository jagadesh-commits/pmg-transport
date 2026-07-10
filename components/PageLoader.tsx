"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const MIN_VISIBLE_MS = 400;
const FADE_DURATION = 0.22;
const MAX_VISIBLE_MS = 2000;

const loaderVariants = {
  hidden: {
    opacity: 0,
    pointerEvents: "none" as const,
  },
  visible: {
    opacity: 1,
    pointerEvents: "auto" as const,
  },
};

function isInternalNavLink(anchor: HTMLAnchorElement): boolean {
  if (!anchor.href) return false;
  if (anchor.target === "_blank") return false;
  if (anchor.hasAttribute("download")) return false;

  const url = new URL(anchor.href);
  if (url.origin !== window.location.origin) return false;
  if (url.pathname === window.location.pathname) return false;

  return true;
}

export function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const shownAt = useRef(0);
  const pendingHide = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyHide = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (pendingHide.current) {
      clearTimeout(pendingHide.current);
      pendingHide.current = null;
    }
    if (safetyHide.current) {
      clearTimeout(safetyHide.current);
      safetyHide.current = null;
    }
  }, []);

  const hide = useCallback(() => {
    clearTimers();

    const elapsed = Date.now() - shownAt.current;
    const delay = Math.max(0, MIN_VISIBLE_MS - elapsed);

    pendingHide.current = setTimeout(() => {
      setVisible(false);
      pendingHide.current = null;
    }, delay);
  }, [clearTimers]);

  const show = useCallback(() => {
    clearTimers();
    shownAt.current = Date.now();
    setVisible(true);

    safetyHide.current = setTimeout(() => {
      setVisible(false);
      safetyHide.current = null;
    }, MAX_VISIBLE_MS);
  }, [clearTimers]);

  useEffect(() => {
    hide();
  }, [pathname, hide]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest("a");
      if (anchor instanceof HTMLAnchorElement && isInternalNavLink(anchor)) {
        show();
      }
    };

    const onPopState = () => show();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      clearTimers();
    };
  }, [show, clearTimers]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          variants={loaderVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#111111]"
          role="status"
          aria-live="polite"
          aria-label="Loading page"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: 1,
              scale: [1, 1.04, 1],
            }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              opacity: { duration: FADE_DURATION, ease: "easeOut" },
              scale: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src="/pmg-transports-logo.png"
              alt="PMG Transport"
              width={220}
              height={118}
              className="h-24 w-auto object-contain sm:h-28"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
