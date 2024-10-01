import styles from "./DemoPage.module.css";

export const DemoPage = () => {
  return (
    <div className="grid grid-cols-2 gap-5 bg-cover w-1/3 p-10 mx-auto">
      <div className="size-56">
        {/* upper left screw */}
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
        >
          <g id="Upper-Left-Screw">
            <circle
              id="Head---No-Gradient"
              cx="15"
              cy="15"
              r="15"
              fill="#747c88"
            />
            <path
              id="Flathead-Slit"
              d="M0.146,12.902C0.317,11.678 0.637,10.501 1.086,9.389L29.854,17.098C29.683,18.322 29.363,19.499 28.914,20.611L0.146,12.902Z"
              fill="url(#_UL_screw_1)"
            />
          </g>
          <defs>
            <linearGradient
              id="_UL_screw_1"
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
      </div>
      <div className="size-56">
        <div className={styles.ULScrew + " size-56 absolute"}></div>
        {/* upper left screw */}
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
        >
          <g id="Upper-Left-Screw">
            {/* <circle
              id="Head---No-Gradient"
              cx="15"
              cy="15"
              r="15"
              fill="#747c88"
            /> */}
            <path
              id="Flathead-Slit"
              d="M0.146,12.902C0.317,11.678 0.637,10.501 1.086,9.389L29.854,17.098C29.683,18.322 29.363,19.499 28.914,20.611L0.146,12.902Z"
              fill="url(#_UL_screw_1)"
            />
          </g>
          <defs>
            <linearGradient
              id="_UL_screw_1"
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
      </div>
      <div className="size-56">
        {/* upper right screw */}
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
        >
          <g id="Upper-Right-Screw">
            <circle
              id="Head---No-Gradient"
              cx="15.003"
              cy="15"
              r="15"
              fill="#747c88"
            />
            <path
              id="Flathead-Slit"
              d="M0.355,18.239C0.087,17.033 -0.026,15.818 0.005,14.62L29.65,11.761C29.919,12.967 30.032,14.182 30,15.38L0.355,18.239Z"
              fill="url(#_UR_screw_1)"
            />
          </g>
          <defs>
            <linearGradient
              id="_UR_screw_1"
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
      </div>
      <div className="size-56">
        {/* upper right screw */}
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
        >
          <g id="Upper-Right-Screw">
            <circle
              className={styles.URScrew}
              id="Head---No-Gradient"
              cx="15.003"
              cy="15"
              r="15"
              fill="#747c88"
            />
            <path
              id="Flathead-Slit"
              d="M0.355,18.239C0.087,17.033 -0.026,15.818 0.005,14.62L29.65,11.761C29.919,12.967 30.032,14.182 30,15.38L0.355,18.239Z"
              fill="url(#_UR_screw_1)"
            />
          </g>
          <defs>
            <linearGradient
              id="_UR_screw_1"
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
      </div>
      <div className="size-56">
        {/* lower left screw */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 39 39"
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
            <g id="Lower-Left-Screw">
              <circle
                id="Head---No-Gradient"
                cx="19.46"
                cy="17.984"
                r="15"
                fill="#747c88"
              />
              <path
                id="Flathead-Slit"
                d="M10.402,29.942C9.416,29.197 8.543,28.345 7.79,27.412L28.518,6.026C29.505,6.771 30.378,7.623 31.13,8.556L10.402,29.942Z"
                fill="url(#_LL_screw_1)"
              />
            </g>
            <g>
              <circle
                id="Head---No-Gradient1"
                cx="19.46"
                cy="17.984"
                r="15"
                fill="#747c88"
              />
              <path
                id="Flathead-Slit1"
                d="M10.402,29.942C9.416,29.197 8.543,28.345 7.79,27.412L28.518,6.026C29.505,6.771 30.378,7.623 31.13,8.556L10.402,29.942Z"
                fill="url(#_LL_screw_2)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="_LL_screw_1"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.30559,-2.2654,0.392662,-0.572958,20.7659,19.2495)"
            >
              <stop offset="0" stopColor="#757c88" stopOpacity="1" />
              <stop offset="0.57" stopColor="#2b3246" stopOpacity="1" />
              <stop offset="1" stopColor="#0b1229" stopOpacity="1" />
            </linearGradient>
            <linearGradient
              id="_LL_screw_2"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.30559,-2.2654,0.392662,-0.572958,20.7659,19.2495)"
            >
              <stop offset="0" stopColor="#757c88" stopOpacity="1" />
              <stop offset="0.57" stopColor="#2b3246" stopOpacity="1" />
              <stop offset="1" stopColor="#0b1229" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="size-56">
        {/* lower left screw */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 39 39"
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
            <g id="Lower-Left-Screw">
              <circle
                className={styles.LLScrew}
                id="Head---No-Gradient"
                cx="19.46"
                cy="17.984"
                r="15"
                fill="#747c88"
              />
              <path
                id="Flathead-Slit"
                d="M10.402,29.942C9.416,29.197 8.543,28.345 7.79,27.412L28.518,6.026C29.505,6.771 30.378,7.623 31.13,8.556L10.402,29.942Z"
                fill="url(#_LL_screw_1)"
              />
            </g>
            <g>
              <circle
                id="Head---No-Gradient1"
                cx="19.46"
                cy="17.984"
                r="15"
                fill="#747c88"
              />
              <path
                id="Flathead-Slit1"
                d="M10.402,29.942C9.416,29.197 8.543,28.345 7.79,27.412L28.518,6.026C29.505,6.771 30.378,7.623 31.13,8.556L10.402,29.942Z"
                fill="url(#_LL_screw_2)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="_LL_screw_1"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.30559,-2.2654,0.392662,-0.572958,20.7659,19.2495)"
            >
              <stop offset="0" stopColor="#757c88" stopOpacity="1" />
              <stop offset="0.57" stopColor="#2b3246" stopOpacity="1" />
              <stop offset="1" stopColor="#0b1229" stopOpacity="1" />
            </linearGradient>
            <linearGradient
              id="_LL_screw_2"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.30559,-2.2654,0.392662,-0.572958,20.7659,19.2495)"
            >
              <stop offset="0" stopColor="#757c88" stopOpacity="1" />
              <stop offset="0.57" stopColor="#2b3246" stopOpacity="1" />
              <stop offset="1" stopColor="#0b1229" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="size-56">
        {/* lower right screw */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 39 39"
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
            <g id="Lower-Right-Screw">
              <circle
                id="Head---No-Gradient"
                cx="19.46"
                cy="17.987"
                r="15"
                fill="#747c88"
              />
              <path
                id="Flathead-Slit"
                d="M22.445,32.689C21.234,32.936 20.018,33.028 18.82,32.976L16.475,3.285C17.687,3.038 18.903,2.946 20.1,2.998L22.445,32.689Z"
                fill="url(#_LR_screw_1)"
              />
            </g>
            <g>
              <circle
                id="Head---No-Gradient1"
                cx="19.46"
                cy="17.987"
                r="15"
                fill="#747c88"
              />
              <path
                id="Flathead-Slit1"
                d="M22.445,32.689C21.234,32.936 20.018,33.028 18.82,32.976L16.475,3.285C17.687,3.038 18.903,2.946 20.1,2.998L22.445,32.689Z"
                fill="url(#_LR_screw_2)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="_LR_screw_1"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.62507,0.286327,-0.0496292,-0.628335,21.2729,17.8438)"
            >
              <stop offset="0" stopColor="#0b1229" stopOpacity="1" />
              <stop offset="0.59" stopColor="#1e253a" stopOpacity="1" />
              <stop offset="0.81" stopColor="#495061" stopOpacity="1" />
              <stop offset="1" stopColor="#757c88" stopOpacity="1" />
            </linearGradient>
            <linearGradient
              id="_LR_screw_2"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.62507,0.286327,-0.0496292,-0.628335,21.2729,17.8438)"
            >
              <stop offset="0" stopColor="#0b1229" stopOpacity="1" />
              <stop offset="0.59" stopColor="#1e253a" stopOpacity="1" />
              <stop offset="0.81" stopColor="#495061" stopOpacity="1" />
              <stop offset="1" stopColor="#757c88" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="size-56">
        {/* lower right screw */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 39 39"
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
            <g id="Lower-Right-Screw">
              <circle
                className={styles.LRScrew}
                id="Head---No-Gradient"
                cx="19.46"
                cy="17.987"
                r="15"
                fill="#747c88"
              />
              <path
                id="Flathead-Slit"
                d="M22.445,32.689C21.234,32.936 20.018,33.028 18.82,32.976L16.475,3.285C17.687,3.038 18.903,2.946 20.1,2.998L22.445,32.689Z"
                fill="url(#_LR_screw_1)"
              />
            </g>
            <g>
              <circle
                id="Head---No-Gradient1"
                cx="19.46"
                cy="17.987"
                r="15"
                fill="#747c88"
              />
              <path
                id="Flathead-Slit1"
                d="M22.445,32.689C21.234,32.936 20.018,33.028 18.82,32.976L16.475,3.285C17.687,3.038 18.903,2.946 20.1,2.998L22.445,32.689Z"
                fill="url(#_LR_screw_2)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="_LR_screw_1"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.62507,0.286327,-0.0496292,-0.628335,21.2729,17.8438)"
            >
              <stop offset="0" stopColor="#0b1229" stopOpacity="1" />
              <stop offset="0.59" stopColor="#1e253a" stopOpacity="1" />
              <stop offset="0.81" stopColor="#495061" stopOpacity="1" />
              <stop offset="1" stopColor="#757c88" stopOpacity="1" />
            </linearGradient>
            <linearGradient
              id="_LR_screw_2"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-3.62507,0.286327,-0.0496292,-0.628335,21.2729,17.8438)"
            >
              <stop offset="0" stopColor="#0b1229" stopOpacity="1" />
              <stop offset="0.59" stopColor="#1e253a" stopOpacity="1" />
              <stop offset="0.81" stopColor="#495061" stopOpacity="1" />
              <stop offset="1" stopColor="#757c88" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
