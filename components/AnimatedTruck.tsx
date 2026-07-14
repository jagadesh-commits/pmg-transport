export function AnimatedTruck({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 80"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <style>{`
          @keyframes truckWheelSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes truckSpeedLine { 0% { transform: translateX(0); opacity: 1; } 100% { transform: translateX(-22px); opacity: 0; } }
          .tw-wheel { animation: truckWheelSpin 0.7s linear infinite; transform-box: fill-box; transform-origin: center; }
          .tw-l1 { animation: truckSpeedLine 0.8s linear infinite; }
          .tw-l2 { animation: truckSpeedLine 0.8s linear infinite 0.3s; }
        `}</style>
        <rect className="tw-l1" x="2" y="26" width="14" height="4" rx="2" fill="#ffffff" opacity="0.9" />
        <rect className="tw-l2" x="6" y="40" width="11" height="4" rx="2" fill="#ffffff" opacity="0.9" />
        <rect x="24" y="18" width="52" height="32" rx="4" fill="#ffffff" />
        <path
          d="M76 26 h14 q3 0 5 2.5 l8 10 q1.5 2 1.5 4.5 v5 q0 4 -4 4 h-24.5 z"
          fill="#ffffff"
        />
        <path d="M80 30 h8 q2 0 3 1.5 l5 6.5 h-16 z" fill="#CC1A1A" />
        <g className="tw-wheel">
          <circle cx="38" cy="54" r="9" fill="#ffffff" />
          <circle cx="38" cy="54" r="4.5" fill="#CC1A1A" />
          <rect x="36.8" y="45" width="2.4" height="5" fill="#CC1A1A" />
        </g>
        <g className="tw-wheel">
          <circle cx="88" cy="54" r="9" fill="#ffffff" />
          <circle cx="88" cy="54" r="4.5" fill="#CC1A1A" />
          <rect x="86.8" y="45" width="2.4" height="5" fill="#CC1A1A" />
        </g>
      </svg>
    </span>
  );
}
