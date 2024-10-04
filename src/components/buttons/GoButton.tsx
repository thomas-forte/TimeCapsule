import styles from "./GoButton.module.css";

interface GoButtonProps {
  onClick?: () => void;
}

export const GoButton = ({ onClick }: GoButtonProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 118 118"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    onClick={onClick}
    className={styles.hover}
  >
    <circle
      id="Outer-Gradient-Layer"
      cx="59"
      cy="59"
      r="59"
      fill="url(#_gobutton_Linear1)"
    />
    <circle id="Shadow-Layer" cx="59" cy="59" r="55" fill="#181c25" />
    <circle
      id="Inner-Gradient-Layer"
      cx="59"
      cy="59"
      r="53"
      fill="url(#_gobutton_Linear2)"
    />
    <circle id="Conical-Gradient-Layer" cx="59" cy="59" r="45" fill="#e5f0f3" />
    <path
      id="Arrow"
      d="M34,69L34,49L65,49L65,39L84,59L65,79L65,69L34,69Z"
      // fill="#1e1e1e"
    />
    <defs>
      <linearGradient
        id="_gobutton_Linear1"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1.43086e-15,118,-57.115,7.22542e-15,56.5495,0)"
      >
        <stop offset="0" stopColor="#333744" stopOpacity="1" />
        <stop offset="0.25" stopColor="#565d6f" stopOpacity="1" />
        <stop offset="0.45" stopColor="#646c80" stopOpacity="1" />
        <stop offset="1" stopColor="#a1a7a8" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id="_gobutton_Linear2"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(3.14163e-15,106,-51.3067,7.19747e-15,56.7987,6)"
      >
        <stop offset="0" stopColor="#e5f0f3" stopOpacity="1" />
        <stop offset="0.55" stopColor="#646c80" stopOpacity="1" />
        <stop offset="0.75" stopColor="#4b5161" stopOpacity="1" />
        <stop offset="1" stopColor="#0c0e15" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);
