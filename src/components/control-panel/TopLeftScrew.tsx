import styles from "./screws.module.css";

export const TopLeftScrew = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 30 30"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    className={styles.tlScrew}
  >
    <circle cx="15" cy="15" r="15" fill="#747c88" />
    <path
      id="Flathead-Slit"
      d="M0.146,12.902C0.317,11.678 0.637,10.501 1.086,9.389L29.854,17.098C29.683,18.322 29.363,19.499 28.914,20.611L0.146,12.902Z"
      fill="url(#_tlscrew_Linear1)"
    />
    <defs>
      <linearGradient
        id="_tlscrew_Linear1"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.94116,-3.51246,0.608815,0.163131,14.5294,16.7562)"
      >
        <stop offset="0" stopColor="#aab7cb" stopOpacity="1" />
        <stop offset="0.54" stopColor="#384157" stopOpacity="1" />
        <stop offset="1" stopColor="#0b1229" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);
