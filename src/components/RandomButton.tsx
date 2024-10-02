import styles from "./RandomButton.module.css";

interface RandomButtonProps {
  onClick?: () => void;
}

export const RandomButton = ({ onClick }: RandomButtonProps) => (
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
    <path
      id="Outer-Gradient"
      d="M118,29.5L118,88.5C118,104.781 104.781,118 88.5,118L29.5,118C13.219,118 0,104.781 0,88.5L0,29.5C0,13.219 13.219,0 29.5,0L88.5,0C104.781,0 118,13.219 118,29.5Z"
      fill="url(#_dicebutton_Linear1)"
    />
    <path
      id="Shadow"
      d="M113,32L113,86C113,100.902 100.902,113 86,113L32,113C17.098,113 5,100.902 5,86L5,32C5,17.098 17.098,5 32,5L86,5C100.902,5 113,17.098 113,32Z"
      fill="#181c25"
    />
    <path
      id="Inner-Gradient"
      d="M110,33.5L110,84.5C110,98.574 98.574,110 84.5,110L33.5,110C19.426,110 8,98.574 8,84.5L8,33.5C8,19.426 19.426,8 33.5,8L84.5,8C98.574,8 110,19.426 110,33.5Z"
      fill="url(#_dicebutton_Linear2)"
    />
    <path
      id="Conical-Gradient"
      d="M99.644,38.678L99.644,79.322C99.644,90.538 90.538,99.644 79.322,99.644L38.678,99.644C27.462,99.644 18.356,90.538 18.356,79.322L18.356,38.678C18.356,27.462 27.462,18.356 38.678,18.356L79.322,18.356C90.538,18.356 99.644,27.462 99.644,38.678Z"
      fill="#a5b3b6"
    />
    <path
      id="Die"
      d="M26.358,43.154C26.358,43.154 26.352,42.379 27.349,41.93C28.074,41.604 29.078,41.93 29.078,41.93L56.688,54.307C56.688,54.307 57.249,54.572 57.408,54.867C57.64,55.298 57.64,56.075 57.64,56.075L57.64,91.981C57.64,91.981 57.64,93.033 56.938,93.514C55.963,94.181 55.056,93.749 55.056,93.749L28.126,81.781C28.126,81.781 27.309,81.457 26.763,80.482C26.217,79.507 26.222,78.38 26.222,78.38L26.358,43.154ZM41.455,61.379C39.729,61.379 38.327,63.695 38.327,66.548C38.327,69.4 39.729,71.716 41.455,71.716C43.182,71.716 44.583,69.4 44.583,66.548C44.583,63.695 43.182,61.379 41.455,61.379ZM91.642,43.154L91.778,78.38C91.778,78.38 91.783,79.507 91.237,80.482C90.691,81.457 89.874,81.781 89.874,81.781L62.944,93.749C62.944,93.749 62.037,94.181 61.062,93.514C60.36,93.033 60.36,91.981 60.36,91.981L60.36,56.075C60.36,56.075 60.36,55.298 60.592,54.867C60.751,54.572 61.312,54.307 61.312,54.307L88.922,41.93C88.922,41.93 89.926,41.604 90.651,41.93C91.648,42.379 91.642,43.154 91.642,43.154ZM82.121,52.131C80.395,52.131 78.993,54.447 78.993,57.299C78.993,60.152 80.395,62.468 82.121,62.468C83.848,62.468 85.249,60.152 85.249,57.299C85.249,54.447 83.848,52.131 82.121,52.131ZM70.425,72.124C68.698,72.124 67.296,74.44 67.296,77.292C67.296,80.145 68.698,82.461 70.425,82.461C72.151,82.461 73.553,80.145 73.553,77.292C73.553,74.44 72.151,72.124 70.425,72.124ZM59,52.131C58.139,52.131 57.64,51.859 57.64,51.859L30.03,39.482C30.03,39.482 29.214,39.097 29.214,37.714C29.214,36.467 30.03,36.082 30.03,36.082L57.64,24.385C57.64,24.385 58.139,24.113 59,24.113C59.861,24.113 60.36,24.385 60.36,24.385L87.97,36.082C87.97,36.082 88.786,36.467 88.786,37.714C88.786,39.097 87.97,39.482 87.97,39.482L60.36,51.859C60.36,51.859 59.861,52.131 59,52.131ZM59,34.45C56.148,34.45 53.832,35.852 53.832,37.578C53.832,39.305 56.148,40.706 59,40.706C61.852,40.706 64.168,39.305 64.168,37.578C64.168,35.852 61.852,34.45 59,34.45ZM44.039,34.45C41.187,34.45 38.871,35.852 38.871,37.578C38.871,39.305 41.187,40.706 44.039,40.706C46.892,40.706 49.207,39.305 49.207,37.578C49.207,35.852 46.892,34.45 44.039,34.45ZM73.961,34.45C71.108,34.45 68.793,35.852 68.793,37.578C68.793,39.305 71.108,40.706 73.961,40.706C76.813,40.706 79.129,39.305 79.129,37.578C79.129,35.852 76.813,34.45 73.961,34.45Z"
      // fill="#1e1e1e"
    />
    <defs>
      <linearGradient
        id="_dicebutton_Linear1"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(3.49729e-15,118,-57.115,7.22542e-15,56.5495,5.68434e-14)"
      >
        <stop offset="0" stopColor="#333744" stopOpacity="1" />
        <stop offset="0.25" stopColor="#565d6f" stopOpacity="1" />
        <stop offset="0.45" stopColor="#646c80" stopOpacity="1" />
        <stop offset="1" stopColor="#808a8c" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id="_dicebutton_Linear2"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(3.02308e-15,102,-49.3706,6.2457e-15,56.8818,8)"
      >
        <stop offset="0" stopColor="#d7e6e9" stopOpacity="1" />
        <stop offset="0.55" stopColor="#646c80" stopOpacity="1" />
        <stop offset="0.75" stopColor="#4b5161" stopOpacity="1" />
        <stop offset="1" stopColor="#0c0e15" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);
