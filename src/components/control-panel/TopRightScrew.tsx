import styles from "./screws.module.css";

export const TopRightScrew = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 31 30"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    className={styles.trScrew}
  >
    <circle cx="15.003" cy="15" r="15" fill="#747c88" />
    <path
      id="Flathead-Slit"
      d="M0.355,18.239C0.087,17.033 -0.026,15.818 0.005,14.62L29.65,11.761C29.919,12.967 30.032,14.182 30,15.38L0.355,18.239Z"
      fill="url(#_trscrew_Linear1)"
    />
    <defs>
      <linearGradient
        id="_trscrew_Linear1"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.349115,-3.61957,0.62738,-0.0605122,15.1772,16.8098)"
      >
        <stop offset="0" stopColor="#aab7cb" stopOpacity="1" />
        <stop offset="0.54" stopColor="#384157" stopOpacity="1" />
        <stop offset="1" stopColor="#0b1229" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);
