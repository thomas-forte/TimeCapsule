import { useState } from "react";
import styles from "./DatePicker.module.css";

export const DatePicker = () => {
  const [date, setDate] = useState(new Date(1955, 10, 5));

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 548"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <g>
        <path
          d="M99.976,0C155.154,0 199.951,44.798 199.951,99.976L199.951,448.024C199.951,503.202 155.154,548 99.976,548C44.798,548 0,503.202 0,448.024L0,99.976C0,44.798 44.798,0 99.976,0Z"
          fill="url(#__datepicker_Linear1)"
        />
        <path
          d="M100,13C148.017,13 187,51.983 187,100L187,448C187,496.017 148.017,535 100,535C51.983,535 13,496.017 13,448L13,100C13,51.983 51.983,13 100,13Z"
          fill="#000c23"
        />
        <path
          d="M100,17C145.809,17 183,54.191 183,100L183,448C183,493.809 145.809,531 100,531C54.191,531 17,493.809 17,448L17,100C17,54.191 54.191,17 100,17Z"
          fill="url(#__datepicker_Linear2)"
        />
        <path
          d="M100,25C141.394,25 175,58.606 175,100L175,448C175,489.394 141.394,523 100,523C58.606,523 25,489.394 25,448L25,100C25,58.606 58.606,25 100,25Z"
          fill="url(#__datepicker_Linear3)"
        />
        <path
          d="M100,30C138.634,30 170,61.366 170,100L170,448C170,486.634 138.634,518 100,518C61.366,518 30,486.634 30,448L30,100C30,61.366 61.366,30 100,30Z"
          fill="url(#__datepicker_Linear4)"
        />
        <path
          d="M100,38C134.219,38 162,65.781 162,100L162,448C162,482.219 134.219,510 100,510C65.781,510 38,482.219 38,448L38,100C38,65.781 65.781,38 100,38Z"
          fill="url(#__datepicker_Linear5)"
        />
      </g>
      <rect x="57.976" y="383.106" width="84" height="42.894" fill="none" />
      <text
        x={57.976}
        y={383.106 + 34}
        fontWeight="600"
        fontSize="34"
        fill="#8bf8ff"
      >
        {date.getFullYear()}
      </text>
      <rect x="57.976" y="247.553" width="84" height="42.894" fill="none" />
      <text
        x={57.976 + 20}
        y={247.553 + 34}
        fontWeight="600"
        fontSize="34"
        fill="#8bf8ff"
      >
        {date.getDate().toString().padStart(2, "0")}
      </text>
      <rect x="57.976" y="122" width="84" height="42.894" fill="none" />
      <text
        x={57.976 + 6}
        y={122 + 34}
        fontWeight="600"
        fontSize="34"
        fill="#8bf8ff"
      >
        {date.toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
      </text>
      <g>
        <g>
          <path
            d="M99.976,451L67.976,436L131.976,436L99.976,451Z"
            className={
              date.getFullYear() <= 1950 ? styles.disabled : styles.hover
            }
            onClick={() =>
              date.getFullYear() > 1950 &&
              setDate(
                new Date(
                  date.getFullYear() - 1,
                  date.getMonth(),
                  date.getDate()
                )
              )
            }
          />
          <path
            d="M99.976,358L131.976,373L67.976,373L99.976,358Z"
            className={
              date.getFullYear() >= 2024 ? styles.disabled : styles.hover
            }
            onClick={() =>
              date.getFullYear() < 2024 &&
              setDate(
                new Date(
                  date.getFullYear() + 1,
                  date.getMonth(),
                  date.getDate()
                )
              )
            }
          />
          <path
            d="M99.976,316L67.976,301L131.976,301L99.976,316Z"
            className={styles.hover}
            onClick={() =>
              setDate(
                new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate() - 1
                )
              )
            }
          />
          <path
            d="M99.976,222L131.976,237L67.976,237L99.976,222Z"
            className={styles.hover}
            onClick={() =>
              setDate(
                new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate() + 1
                )
              )
            }
          />
          <path
            d="M99.976,190L67.976,175L131.976,175L99.976,190Z"
            className={date.getMonth() === 0 ? styles.disabled : styles.hover}
            onClick={() =>
              date.getMonth() !== 0 &&
              setDate(
                new Date(
                  date.getFullYear(),
                  date.getMonth() - 1,
                  date.getDate()
                )
              )
            }
          />
          <path
            d="M99.976,97L131.976,112L67.976,112L99.976,97Z"
            className={date.getMonth() === 11 ? styles.disabled : styles.hover}
            onClick={() =>
              date.getMonth() !== 11 &&
              setDate(
                new Date(
                  date.getFullYear(),
                  date.getMonth() + 1,
                  date.getDate()
                )
              )
            }
          />
        </g>
      </g>
      <g opacity="0.75">
        <rect x="78" y="53" width="4" height="24" fill="#c0fbff" />
        <rect x="88" y="53" width="4" height="24" fill="#c0fbff" />
        <rect x="98" y="53" width="4" height="24" fill="#c0fbff" />
        <rect x="108" y="53" width="4" height="24" fill="#c0fbff" />
        <rect x="118" y="53" width="4" height="24" fill="#c0fbff" />
        <rect x="128" y="63" width="4" height="24" fill="#c0fbff" />
        <rect x="138" y="73" width="4" height="24" fill="#c0fbff" />
        <rect x="68" y="63" width="4" height="24" fill="#c0fbff" />
        <rect x="58" y="73" width="4" height="24" fill="#c0fbff" />
        <rect x="48" y="83" width="4" height="382" fill="#c0fbff" />
        <rect x="58" y="451" width="4" height="24" fill="#c0fbff" />
        <rect x="68" y="461" width="4" height="24" fill="#c0fbff" />
        <rect x="78" y="471" width="4" height="24" fill="#c0fbff" />
        <rect x="88" y="471" width="4" height="24" fill="#c0fbff" />
        <rect x="98" y="471" width="4" height="24" fill="#c0fbff" />
        <rect x="108" y="471" width="4" height="24" fill="#c0fbff" />
        <rect x="118" y="471" width="4" height="24" fill="#c0fbff" />
        <rect x="128" y="461" width="4" height="24" fill="#c0fbff" />
        <rect x="138" y="451" width="4" height="24" fill="#c0fbff" />
        <rect x="148" y="83" width="4" height="382" fill="#c0fbff" />
      </g>
      <defs>
        <linearGradient
          id="__datepicker_Linear1"
          x1="0"
          y1="0"
          x2="1"
          y2="-4.41601e-05"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.024361,548,-414.901,0.0323162,99.9756,0)"
        >
          <stop offset="0" stopColor="#f4f8f9" stopOpacity="1" />
          <stop offset="0.07" stopColor="#757d89" stopOpacity="1" />
          <stop offset="0.17" stopColor="#3f4653" stopOpacity="1" />
          <stop offset="0.28" stopColor="#2e3442" stopOpacity="1" />
          <stop offset="0.35" stopColor="#252a38" stopOpacity="1" />
          <stop offset="0.42" stopColor="#222734" stopOpacity="1" />
          <stop offset="0.6" stopColor="#515a68" stopOpacity="1" />
          <stop offset="0.77" stopColor="#546074" stopOpacity="1" />
          <stop offset="1" stopColor="#0c0e15" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="__datepicker_Linear2"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.50632e-14,514,-381.682,3.98542e-14,99.9756,17)"
        >
          <stop offset="0" stopColor="#d9dde0" stopOpacity="1" />
          <stop offset="0.09" stopColor="#747983" stopOpacity="1" />
          <stop offset="0.18" stopColor="#525864" stopOpacity="1" />
          <stop offset="0.26" stopColor="#2b303d" stopOpacity="1" />
          <stop offset="0.36" stopColor="#1f2431" stopOpacity="1" />
          <stop offset="0.52" stopColor="#60676e" stopOpacity="1" />
          <stop offset="1" stopColor="#53606a" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="__datepicker_Linear3"
          x1="0"
          y1="0"
          x2="1"
          y2="0.116607"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-46,487.121,-350.214,-63.3935,119,29.1044)"
        >
          <stop offset="0" stopColor="#3c74a4" stopOpacity="1" />
          <stop offset="0.16" stopColor="#5c656f" stopOpacity="1" />
          <stop offset="0.3" stopColor="#515965" stopOpacity="1" />
          <stop offset="0.44" stopColor="#313446" stopOpacity="1" />
          <stop offset="0.56" stopColor="#4d5061" stopOpacity="1" />
          <stop offset="0.71" stopColor="#9194a5" stopOpacity="1" />
          <stop offset="0.87" stopColor="#c5c6d1" stopOpacity="1" />
          <stop offset="1" stopColor="#dbdbe4" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="__datepicker_Linear4"
          x1="0"
          y1="0"
          x2="1"
          y2="6.14651e-05"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.024361,488,-356.639,-0.0338236,100,30)"
        >
          <stop offset="0" stopColor="#333d5a" stopOpacity="1" />
          <stop offset="0.14" stopColor="#1f3a76" stopOpacity="1" />
          <stop offset="0.2" stopColor="#263967" stopOpacity="1" />
          <stop offset="0.26" stopColor="#2e3757" stopOpacity="1" />
          <stop offset="0.43" stopColor="#31364f" stopOpacity="1" />
          <stop offset="0.77" stopColor="#afc7d3" stopOpacity="1" />
          <stop offset="0.96" stopColor="#b6c0c5" stopOpacity="1" />
          <stop offset="1" stopColor="#bbb" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="__datepicker_Linear5"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.24914e-14,472,-366.982,4.02885e-14,100,38)"
        >
          <stop offset="0" stopColor="#182843" stopOpacity="1" />
          <stop offset="0.5" stopColor="#101522" stopOpacity="1" />
          <stop offset="1" stopColor="#0c2446" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
