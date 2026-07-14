export function AnimatedTruck({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 88 66"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -1.5; 0 0"
            dur="0.7s"
            repeatCount="indefinite"
          />
          <rect x="2" y="6" width="50" height="32" rx="4" fill="#ffffff" />
          <text
            x="27"
            y="28"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="bold"
            fontSize="13"
            fill="#CC1A1A"
          >
            PMG
          </text>
          <path
            d="M52 14 h14 q3 0 5 2.5 l9 11 q1.5 2 1.5 4.5 v4 q0 4 -4 4 h-25.5 z"
            fill="#ffffff"
          />
          <path d="M56 18 h8 q2 0 3 1.5 l6 7.5 h-17 z" fill="#CC1A1A" />
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 50"
            to="360 18 50"
            dur="0.8s"
            repeatCount="indefinite"
          />
          <circle cx="18" cy="50" r="11" fill="#ffffff" />
          <circle cx="18" cy="50" r="5.5" fill="#CC1A1A" />
          <rect x="16.6" y="39" width="2.8" height="6" fill="#CC1A1A" />
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 66 50"
            to="360 66 50"
            dur="0.8s"
            repeatCount="indefinite"
          />
          <circle cx="66" cy="50" r="11" fill="#ffffff" />
          <circle cx="66" cy="50" r="5.5" fill="#CC1A1A" />
          <rect x="64.6" y="39" width="2.8" height="6" fill="#CC1A1A" />
        </g>
      </svg>
    </span>
  );
}
