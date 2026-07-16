type PmgTruckAnimationProps = {
  className?: string;
  variant?: "full" | "icon";
};

function PmgTruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="40 70 320 160"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
      className={className}
    >
      {/* Ground shadow */}
      <ellipse cx="210" cy="220" rx="120" ry="8" fill="#ffffff" opacity="0.25" />

      {/* Body + cab (suspension bob) */}
      <g>
        <animateTransform
          id="pmgBobUp"
          attributeName="transform"
          type="translate"
          from="0 0"
          to="0 -5"
          dur="0.7s"
          begin="0s;pmgBobDown.end"
          fill="freeze"
        />
        <animateTransform
          id="pmgBobDown"
          attributeName="transform"
          type="translate"
          from="0 -5"
          to="0 0"
          dur="0.7s"
          begin="pmgBobUp.end"
          fill="freeze"
        />

        {/* Trailer */}
        <rect x="150" y="82" width="180" height="88" rx="5" fill="#ffffff" />
        {/* Panel lines */}
        <line x1="158" y1="100" x2="322" y2="100" stroke="#CC1A1A" strokeWidth="1.2" opacity="0.25" />
        <line x1="158" y1="118" x2="322" y2="118" stroke="#CC1A1A" strokeWidth="1.2" opacity="0.25" />
        <line x1="158" y1="136" x2="322" y2="136" stroke="#CC1A1A" strokeWidth="1.2" opacity="0.25" />
        <line x1="158" y1="154" x2="322" y2="154" stroke="#CC1A1A" strokeWidth="1.2" opacity="0.25" />
        {/* PMG mark */}
        <text
          x="240"
          y="138"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          fontSize="36"
          fill="#CC1A1A"
        >
          PMG
        </text>

        {/* Cab */}
        <path
          d="M70 170 V128 q0 -8 7 -12 l28 -16 q5 -3 10 -3 h34 q7 0 7 7 v66 z"
          fill="#ffffff"
        />
        {/* Window (light blue) */}
        <path
          d="M108 112 h28 q5 0 5 5 v22 q0 5 -5 5 h-40 q-6 0 -3 -6 l8 -20 q2 -6 7 -6 z"
          fill="#A8D4E8"
        />
        {/* Headlight */}
        <rect x="68" y="158" width="12" height="8" rx="2" fill="#f5c542" />

        {/* Chassis */}
        <rect x="78" y="168" width="240" height="12" rx="3" fill="#3d3d3d" />
        <rect x="62" y="174" width="20" height="8" rx="2" fill="#3d3d3d" />
        <rect x="312" y="170" width="16" height="8" rx="2" fill="#3d3d3d" />
      </g>

      {/* Front wheel */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 192"
          to="360 100 192"
          dur="0.7s"
          repeatCount="indefinite"
        />
        <circle cx="100" cy="192" r="18" fill="#2a2a2a" />
        <circle cx="100" cy="192" r="10" fill="#9a9a9a" />
        <circle cx="100" cy="192" r="3.5" fill="#2a2a2a" />
      </g>

      {/* Rear wheel 1 */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 248 192"
          to="360 248 192"
          dur="0.7s"
          repeatCount="indefinite"
        />
        <circle cx="248" cy="192" r="18" fill="#2a2a2a" />
        <circle cx="248" cy="192" r="10" fill="#9a9a9a" />
        <circle cx="248" cy="192" r="3.5" fill="#2a2a2a" />
      </g>

      {/* Rear wheel 2 */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 288 192"
          to="360 288 192"
          dur="0.7s"
          repeatCount="indefinite"
        />
        <circle cx="288" cy="192" r="18" fill="#2a2a2a" />
        <circle cx="288" cy="192" r="10" fill="#9a9a9a" />
        <circle cx="288" cy="192" r="3.5" fill="#2a2a2a" />
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
