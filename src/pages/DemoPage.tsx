import { DatePicker } from "../components/DatePicker";
import { GoButton } from "../components/GoButton";
import { NamePlate } from "../components/NamePlate";
import { RandomButton } from "../components/RandomButton";
import styles from "./DemoPage.module.css";

export const DemoPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.controlPanel}>
          <div className={styles.controlPanelFlex}>
            <div className={styles.namePlate}>
              <NamePlate />
            </div>
            <div className={styles.goButton}>
              <GoButton onClick={() => console.log("Go button clicked")} />
            </div>
            <div className={styles.datePicker}>
              <DatePicker />
            </div>
            <div className={styles.randomButton}>
              <RandomButton
                onClick={() => console.log("Random button clicked")}
              />
            </div>
          </div>
        </div>

        {/* door */}
        {/* <svg
        width="100%"
        height="100%"
        viewBox="0 0 1776 1080"
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
        <rect
          x="0"
          y="0"
          width="1776"
          height="1080"
          fill="url(#_Door_Linear1)"
        />
        <rect
          x="0"
          y="0"
          width="1776"
          height="1080"
          fill="url(#_Door_Linear2)"
        />
        <rect
          x="0"
          y="0"
          width="1776"
          height="1080"
          fill="url(#_Door_Linear3)"
        />
        <rect
          x="0"
          y="0"
          width="696"
          height="1080"
          fill="url(#_Door_Linear4)"
        />
        <defs>
          <linearGradient
            id="_Door_Linear1"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(5.26371e-14,1080,-859.629,6.61309e-14,851.118,0)"
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
            id="_Door_Linear2"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-1776,540,-429.815,-1413.61,1776,540)"
          >
            <stop offset="0" stopColor="#e5f0f3" stopOpacity="0.25" />
            <stop offset="0.18" stopColor="#7c8799" stopOpacity="0.25" />
            <stop offset="0.25" stopColor="#ccd7dd" stopOpacity="0.25" />
            <stop offset="0.33" stopColor="#e5f0f3" stopOpacity="0.25" />
            <stop offset="0.41" stopColor="#96a1af" stopOpacity="0.25" />
            <stop offset="0.49" stopColor="#7c8799" stopOpacity="0.25" />
            <stop offset="0.66" stopColor="#e5f0f3" stopOpacity="0.25" />
            <stop offset="0.72" stopColor="#c7d2d9" stopOpacity="0.25" />
            <stop offset="0.79" stopColor="#7c8799" stopOpacity="0.25" />
            <stop offset="0.89" stopColor="#97a2b0" stopOpacity="0.25" />
            <stop offset="1" stopColor="#e5f0f3" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient
            id="_Door_Linear3"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(696,-20.4468,20.4468,696,9.09495e-13,560.447)"
          >
            <stop offset="0" stopColor="#0c0e15" stopOpacity="0.5" />
            <stop offset="0.54" stopColor="#434b5a" stopOpacity="0.14" />
            <stop offset="1" stopColor="#586375" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="_Door_Linear4"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(185.543,9.79419e-15,2.27225e-14,-79.9756,4.54747e-13,560.447)"
          >
            <stop offset="0" stopColor="#0c0e15" stopOpacity="1" />
            <stop offset="0.15" stopColor="#313743" stopOpacity="0.52" />
            <stop offset="0.33" stopColor="#4e5868" stopOpacity="0.13" />
            <stop offset="1" stopColor="#586375" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg> */}
      </div>
      <svg
        className={styles.controlPanelBackground}
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
          <rect x="300" y="0" width="84" height="1080" fill="url(#_Linear1)" />
          <rect x="84" y="0" width="300" height="1080" fill="url(#_Linear2)" />
        </g>
        <g id="Background1">
          <rect x="0" y="0" width="300" height="1080" fill="url(#_Linear3)" />
          <rect x="0" y="0" width="300" height="1080" fill="url(#_Linear4)" />
        </g>
        <defs>
          <linearGradient
            id="_Linear1"
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
            id="_Linear2"
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
            id="_Linear3"
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
            id="_Linear4"
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
    </>
  );
};
