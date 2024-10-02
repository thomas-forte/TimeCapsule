interface ControlPanelBackgroundProps {
  className?: string;
}

export const ControlPanelBackground = ({
  className,
}: ControlPanelBackgroundProps) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="0 0 384 1080"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    preserveAspectRatio="none"
  >
    <g id="Background">
      <rect
        x="300"
        y="0"
        width="84"
        height="1080"
        fill="url(#_controlbackground_Linear1)"
      />
      <rect
        x="84"
        y="0"
        width="300"
        height="1080"
        fill="url(#_controlbackground_Linear2)"
      />
    </g>
    <g id="Background1">
      <rect
        x="0"
        y="0"
        width="300"
        height="1080"
        fill="url(#_controlbackground_Linear3)"
      />
      <rect
        x="0"
        y="0"
        width="300"
        height="1080"
        fill="url(#_controlbackground_Linear4)"
      />
    </g>
    <defs>
      <linearGradient
        id="_controlbackground_Linear1"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(2.48959e-15,1080,-40.6581,6.61309e-14,340.256,1.13687e-13)"
      >
        <stop offset="0" stopColor="#e5f0f3" stopOpacity="1" />
        <stop offset="0.19" stopColor="#757d89" stopOpacity="1" />
        <stop offset="0.34" stopColor="#535a68" stopOpacity="1" />
        <stop offset="0.55" stopColor="#3d4559" stopOpacity="1" />
        <stop offset="0.66" stopColor="#475063" stopOpacity="1" />
        <stop offset="0.79" stopColor="#5f6b7d" stopOpacity="1" />
        <stop offset="0.86" stopColor="#6e7c92" stopOpacity="1" />
        <stop offset="0.95" stopColor="#606c80" stopOpacity="1" />
        <stop offset="1" stopColor="#0c0e15" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id="_controlbackground_Linear2"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-79.9756,9.79419e-15,-9.79419e-15,-79.9756,384,560.447)"
      >
        <stop offset="0" stopColor="#0c0e15" stopOpacity="1" />
        <stop offset="0.15" stopColor="#313743" stopOpacity="0.52" />
        <stop offset="0.33" stopColor="#4e5868" stopOpacity="0.13" />
        <stop offset="1" stopColor="#586375" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="_controlbackground_Linear3"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(8.89141e-15,1080,-145.208,6.61309e-14,143.77,0)"
      >
        <stop offset="0" stopColor="#e5f0f3" stopOpacity="1" />
        <stop offset="0.19" stopColor="#757d89" stopOpacity="1" />
        <stop offset="0.34" stopColor="#535a68" stopOpacity="1" />
        <stop offset="0.55" stopColor="#3d4559" stopOpacity="1" />
        <stop offset="0.66" stopColor="#475063" stopOpacity="1" />
        <stop offset="0.79" stopColor="#5f6b7d" stopOpacity="1" />
        <stop offset="0.86" stopColor="#6e7c92" stopOpacity="1" />
        <stop offset="0.95" stopColor="#606c80" stopOpacity="1" />
        <stop offset="1" stopColor="#0c0e15" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id="_controlbackground_Linear4"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-79.9756,9.79419e-15,-9.79419e-15,-79.9756,300,560.447)"
      >
        <stop offset="0" stopColor="#0c0e15" stopOpacity="1" />
        <stop offset="0.15" stopColor="#313743" stopOpacity="0.52" />
        <stop offset="0.33" stopColor="#4e5868" stopOpacity="0.13" />
        <stop offset="1" stopColor="#586375" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
