import { PropsWithChildren } from "react";
import styles from "./BaseButtonBar.module.css";
import classNames from "classnames";

interface BaseButtonBarProps extends PropsWithChildren {
  name: string;
  active: boolean;
  onClick?: () => void;
}

export interface BaseButtonBarChildProps {
  onClick?: () => void;
  active: boolean;
}

export const BaseButtonBar = ({
  name,
  active,
  onClick,
  children,
}: BaseButtonBarProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 62 62"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    onClick={onClick}
    className={classNames(styles.baseButton, { [styles.active]: active })}
  >
    <path
      d="M62,15.5L62,46.5C62,55.055 55.055,62 46.5,62L15.5,62C6.945,62 -0,55.055 -0,46.5L-0,15.5C-0,6.945 6.945,0 15.5,0L46.5,0C55.055,0 62,6.945 62,15.5Z"
      fill={`url(#_${name}_Linear1)`}
    />
    <path
      d="M59,17L59,45C59,52.727 52.727,59 45,59L17,59C9.273,59 3,52.727 3,45L3,17C3,9.273 9.273,3 17,3L45,3C52.727,3 59,9.273 59,17Z"
      fill="#181c25"
    />
    <path
      d="M57,18L57,44C57,51.175 51.175,57 44,57L18,57C10.825,57 5,51.175 5,44L5,18C5,10.825 10.825,5 18,5L44,5C51.175,5 57,10.825 57,18Z"
      fill={`url(#_${name}_Linear2)`}
    />
    <path
      d="M52,20.5L52,41.5C52,47.295 47.295,52 41.5,52L20.5,52C14.705,52 10,47.295 10,41.5L10,20.5C10,14.705 14.705,10 20.5,10L41.5,10C47.295,10 52,14.705 52,20.5Z"
      fill="#a5b3b6"
    />
    {children}
    <defs>
      <linearGradient
        id={`_${name}_Linear1`}
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1.83756e-15,62,-30.0096,3.79641e-15,29.7125,0)"
      >
        <stop offset="0" stopColor="#333744" stopOpacity="1" />
        <stop offset="0.25" stopColor="#565d6f" stopOpacity="1" />
        <stop offset="0.45" stopColor="#646c80" stopOpacity="1" />
        <stop offset="1" stopColor="#808a8c" stopOpacity="1" />
      </linearGradient>
      <linearGradient
        id={`_${name}_Linear2`}
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1.54118e-15,52,-25.1693,3.18408e-15,29.9201,5)"
      >
        <stop offset="0" stopColor="#d7e6e9" stopOpacity="1" />
        <stop offset="0.55" stopColor="#646c80" stopOpacity="1" />
        <stop offset="0.75" stopColor="#4b5161" stopOpacity="1" />
        <stop offset="1" stopColor="#0c0e15" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);
