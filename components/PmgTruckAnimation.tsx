type PmgTruckAnimationProps = {
  className?: string;
  variant?: "full" | "icon";
};

function PmgTruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="30 60 340 180"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
      className={className}
    >
      <g>
        <animateTransform
          id="pmgBobUp"
          attributeName="transform"
          type="translate"
          from="0 0"
          to="0 -6"
          dur="0.7s"
          begin="0s;pmgBobDown.end"
          fill="freeze"
        />
        <animateTransform
          id="pmgBobDown"
          attributeName="transform"
          type="translate"
          from="0 -6"
          to="0 0"
          dur="0.7s"
          begin="pmgBobUp.end"
          fill="freeze"
        />
        <rect x="148" y="80" width="188" height="92" rx="6" fill="#ffffff" />
        <rect x="88" y="172" width="222" height="14" rx="3" fill="#7a0f0f" />
        <rect x="64" y="178" width="18" height="10" rx="2" fill="#7a0f0f" />
        <rect x="310" y="174" width="14" height="9" rx="2" fill="#7a0f0f" />
        <path
          d="M65 172 v-38 q0 -7 6 -10 l24 -13 q4 -2 9 -2 h30 q6 0 6 6 v57 z"
          fill="#ffffff"
        />
        <path
          d="M97 114 h26 q4 0 4 4 v18 q0 4 -4 4 h-36 q-5 0 -2 -5 l7 -16 q2 -5 5 -5 z"
          fill="#CC1A1A"
          opacity="0.85"
        />
        <rect x="63" y="164" width="12" height="8" rx="2" fill="#f5c542" />
      </g>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 103 195"
          to="360 103 195"
          dur="0.7s"
          repeatCount="indefinite"
        />
        <circle cx="103" cy="195" r="19" fill="#7a0f0f" />
        <circle cx="103" cy="195" r="10.5" fill="#ffffff" />
        <circle cx="103" cy="195" r="4" fill="#7a0f0f" />
        <rect x="101.5" y="184" width="3" height="7" fill="#e08585" />
      </g>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 237 195"
          to="360 237 195"
          dur="0.7s"
          repeatCount="indefinite"
        />
        <circle cx="237" cy="195" r="19" fill="#7a0f0f" />
        <circle cx="237" cy="195" r="10.5" fill="#ffffff" />
        <circle cx="237" cy="195" r="4" fill="#7a0f0f" />
        <rect x="235.5" y="184" width="3" height="7" fill="#e08585" />
      </g>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 277 195"
          to="360 277 195"
          dur="0.7s"
          repeatCount="indefinite"
        />
        <circle cx="277" cy="195" r="19" fill="#7a0f0f" />
        <circle cx="277" cy="195" r="10.5" fill="#ffffff" />
        <circle cx="277" cy="195" r="4" fill="#7a0f0f" />
        <rect x="275.5" y="184" width="3" height="7" fill="#e08585" />
      </g>
    </svg>
  );
}

function PmgTruckFull({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 400"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      role="img"
      aria-label="PMG Transport truck on the move"
      className={className}
    >
      <rect x="560" y="110" width="60" height="13" rx="6.5" fill="#2b2b2b">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="30 0"
          to="-90 0"
          dur="0.9s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="585" y="165" width="48" height="13" rx="6.5" fill="#9a9a9a">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="30 0"
          to="-90 0"
          dur="0.9s"
          begin="0.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.9s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="572" y="220" width="65" height="13" rx="6.5" fill="#bdbdbd">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="30 0"
          to="-90 0"
          dur="0.9s"
          begin="0.55s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.9s"
          begin="0.55s"
          repeatCount="indefinite"
        />
      </rect>

      <g>
        <animateTransform
          id="bodyUp"
          attributeName="transform"
          type="translate"
          from="0 0"
          to="0 -4"
          dur="0.35s"
          begin="0s;bodyDown.end"
          fill="freeze"
        />
        <animateTransform
          id="bodyDown"
          attributeName="transform"
          type="translate"
          from="0 -4"
          to="0 0"
          dur="0.35s"
          begin="bodyUp.end"
          fill="freeze"
        />
        <rect x="120" y="85" width="270" height="175" rx="16" fill="#0d0d0d" />
        <rect x="132" y="97" width="246" height="151" rx="8" fill="#CC1A1A" />
        <text
          x="255"
          y="186"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          fontSize="42"
          fill="#ffffff"
        >
          PMG
        </text>
        <rect
          x="120"
          y="242"
          width="315"
          height="44"
          rx="10"
          fill="#ffffff"
          stroke="#0d0d0d"
          strokeWidth="9"
        />
        <path
          d="M392 138 h56 q14 0 22 10 l38 48 q8 10 8 22 v50 q0 15 -15 15 h-109 z"
          fill="#ffffff"
          stroke="#0d0d0d"
          strokeWidth="9"
          strokeLinejoin="round"
        />
        <path
          d="M408 156 h33 q8 0 13 6 l27 34 q4 6 -3 6 h-70 z"
          fill="#f4f4f4"
          stroke="#0d0d0d"
          strokeWidth="7"
          strokeLinejoin="round"
        />
      </g>

      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 205 292"
          to="360 205 292"
          dur="0.8s"
          repeatCount="indefinite"
        />
        <circle cx="205" cy="292" r="34" fill="#0d0d0d" />
        <circle cx="205" cy="292" r="19" fill="#CC1A1A" />
        <circle cx="205" cy="292" r="7" fill="#0d0d0d" />
        <rect x="202" y="260" width="6" height="14" fill="#0d0d0d" />
      </g>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 300 292"
          to="360 300 292"
          dur="0.8s"
          repeatCount="indefinite"
        />
        <circle cx="300" cy="292" r="34" fill="#0d0d0d" />
        <circle cx="300" cy="292" r="19" fill="#CC1A1A" />
        <circle cx="300" cy="292" r="7" fill="#0d0d0d" />
        <rect x="297" y="260" width="6" height="14" fill="#0d0d0d" />
      </g>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 468 292"
          to="360 468 292"
          dur="0.8s"
          repeatCount="indefinite"
        />
        <circle cx="468" cy="292" r="34" fill="#0d0d0d" />
        <circle cx="468" cy="292" r="19" fill="#CC1A1A" />
        <circle cx="468" cy="292" r="7" fill="#0d0d0d" />
        <rect x="465" y="260" width="6" height="14" fill="#0d0d0d" />
      </g>

      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-80 0"
          dur="0.8s"
          repeatCount="indefinite"
        />
        <line
          x1="20"
          y1="342"
          x2="740"
          y2="342"
          stroke="#0d0d0d"
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray="55 25"
        />
      </g>
    </svg>
  );
}

export function PmgTruckAnimation({
  className = "",
  variant = "full",
}: PmgTruckAnimationProps) {
  if (variant === "icon") {
    return <PmgTruckIcon className={className} />;
  }
  return <PmgTruckFull className={className} />;
}
