import styles from "./DemoPage.module.css";

export const DemoPage = () => {
  return (
    <div className={styles.container}>
      <svg
        width="20%"
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

        {/* Test name plate */}
        <g transform="translate(45, 50)">
          <path
            id="Edge"
            d="M203.999,29.938L203.999,68.938C203.999,79.701 195.261,88.438 184.499,88.438L19.5,88.438C8.738,88.438 0,79.701 0,68.938L0,29.938C0,19.176 8.738,10.438 19.5,10.438L184.499,10.438C195.261,10.438 203.999,19.176 203.999,29.938Z"
            fill="url(#_nameplate_Linear1)"
          />
          <path
            id="Background-Color"
            d="M200.999,31.438L200.999,67.438C200.999,77.373 192.933,85.438 182.999,85.438L20.999,85.438C11.064,85.438 2.999,77.373 2.999,67.438L2.999,31.438C2.999,21.504 11.064,13.438 20.999,13.438L182.999,13.438C192.933,13.438 200.999,21.504 200.999,31.438Z"
            fill="#84919a"
          />
          <path
            id="Shadow"
            d="M200.999,31.438L200.999,67.438C200.999,77.373 192.933,85.438 182.999,85.438L20.999,85.438C11.064,85.438 2.999,77.373 2.999,67.438L2.999,31.438C2.999,21.504 11.064,13.438 20.999,13.438L182.999,13.438C192.933,13.438 200.999,21.504 200.999,31.438Z"
            fill="url(#_nameplate_Linear2)"
          />
          <path
            id="Highlight"
            d="M2.999,67.438L2.999,31.438C2.999,21.504 11.064,13.438 20.999,13.438L182.999,13.438C192.933,13.438 200.999,21.504 200.999,31.438L200.999,67.438C200.999,77.373 192.933,85.438 182.999,85.438L20.999,85.438C11.064,85.438 2.999,77.373 2.999,67.438Z"
            fill="url(#_nameplate_Linear3)"
          />
          <g>
            <path
              d="M19.963,56.353L19.963,41.12L13.999,41.12L13.999,38.957L28.388,38.957L28.388,41.12L22.423,41.12L22.423,56.353L19.963,56.353Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <path
              d="M30.748,56.353L30.748,43.182L33.134,43.182L33.134,56.353L30.748,56.353ZM31.941,40.647C31.477,40.647 31.092,40.498 30.786,40.2C30.479,39.902 30.326,39.537 30.326,39.106C30.326,38.659 30.479,38.286 30.786,37.988C31.092,37.69 31.477,37.541 31.941,37.541C32.405,37.541 32.79,37.686 33.097,37.976C33.403,38.266 33.557,38.626 33.557,39.057C33.557,39.504 33.408,39.881 33.109,40.188C32.811,40.494 32.422,40.647 31.941,40.647Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <path
              d="M54.158,43.058C55.218,43.058 56.155,43.265 56.966,43.679C57.778,44.093 58.412,44.723 58.868,45.568C59.323,46.413 59.551,47.481 59.551,48.774L59.551,56.353L57.165,56.353L57.165,49.047C57.165,47.771 56.867,46.81 56.27,46.164C55.674,45.518 54.838,45.195 53.761,45.195C52.965,45.195 52.27,45.361 51.673,45.692C51.077,46.023 50.617,46.512 50.294,47.158C49.971,47.804 49.809,48.608 49.809,49.569L49.809,56.353L47.424,56.353L47.424,49.047C47.424,47.771 47.13,46.81 46.541,46.164C45.953,45.518 45.112,45.195 44.019,45.195C43.24,45.195 42.553,45.361 41.956,45.692C41.36,46.023 40.896,46.512 40.565,47.158C40.233,47.804 40.068,48.608 40.068,49.569L40.068,56.353L37.682,56.353L37.682,43.182L39.968,43.182L39.968,46.686L39.595,45.791C40.01,44.93 40.647,44.259 41.509,43.779C42.37,43.298 43.373,43.058 44.516,43.058C45.775,43.058 46.86,43.368 47.771,43.99C48.683,44.611 49.279,45.551 49.561,46.81L48.592,46.413C48.989,45.402 49.685,44.59 50.679,43.977C51.673,43.364 52.833,43.058 54.158,43.058Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <path
              d="M69.815,56.502C68.406,56.502 67.168,56.212 66.099,55.633C65.031,55.053 64.202,54.257 63.614,53.247C63.026,52.236 62.732,51.077 62.732,49.768C62.732,48.459 63.018,47.299 63.589,46.288C64.161,45.278 64.948,44.487 65.95,43.915C66.953,43.344 68.083,43.058 69.342,43.058C70.618,43.058 71.745,43.34 72.722,43.903C73.7,44.466 74.466,45.257 75.021,46.276C75.576,47.295 75.853,48.484 75.853,49.842C75.853,49.942 75.849,50.058 75.841,50.19C75.833,50.323 75.82,50.447 75.804,50.563L64.596,50.563L64.596,48.848L74.561,48.848L73.592,49.445C73.608,48.6 73.434,47.846 73.07,47.183C72.706,46.52 72.204,46.003 71.566,45.63C70.929,45.257 70.187,45.071 69.342,45.071C68.514,45.071 67.777,45.257 67.13,45.63C66.484,46.003 65.979,46.525 65.615,47.195C65.25,47.866 65.068,48.633 65.068,49.494L65.068,49.892C65.068,50.77 65.271,51.553 65.677,52.24C66.083,52.928 66.65,53.462 67.379,53.843C68.108,54.224 68.945,54.415 69.889,54.415C70.668,54.415 71.376,54.282 72.014,54.017C72.652,53.752 73.211,53.354 73.691,52.824L75.008,54.365C74.412,55.061 73.671,55.591 72.784,55.956C71.898,56.32 70.908,56.502 69.815,56.502Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <path
              d="M118.175,56.353L118.175,53.57L118.051,53.048L118.051,48.302C118.051,47.291 117.757,46.508 117.168,45.953C116.58,45.398 115.698,45.12 114.522,45.12C113.743,45.12 112.981,45.249 112.236,45.506C111.49,45.763 110.86,46.106 110.347,46.537L109.353,44.748C110.032,44.201 110.848,43.783 111.801,43.493C112.753,43.203 113.752,43.058 114.795,43.058C116.601,43.058 117.993,43.497 118.97,44.375C119.948,45.253 120.436,46.595 120.436,48.401L120.436,56.353L118.175,56.353ZM113.851,56.502C112.873,56.502 112.016,56.337 111.279,56.005C110.542,55.674 109.974,55.214 109.576,54.626C109.179,54.038 108.98,53.371 108.98,52.626C108.98,51.913 109.15,51.267 109.49,50.687C109.829,50.107 110.384,49.643 111.154,49.295C111.925,48.948 112.964,48.774 114.273,48.774L118.448,48.774L118.448,50.488L114.373,50.488C113.18,50.488 112.376,50.687 111.962,51.085C111.548,51.482 111.341,51.963 111.341,52.526C111.341,53.172 111.598,53.69 112.111,54.079C112.625,54.469 113.337,54.663 114.248,54.663C115.143,54.663 115.926,54.464 116.597,54.067C117.268,53.669 117.752,53.09 118.051,52.327L118.523,53.968C118.208,54.746 117.653,55.363 116.858,55.819C116.063,56.275 115.06,56.502 113.851,56.502Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <path
              d="M131.843,56.502C130.75,56.502 129.751,56.25 128.849,55.744C127.946,55.239 127.225,54.489 126.687,53.495C126.148,52.501 125.879,51.259 125.879,49.768C125.879,48.277 126.14,47.034 126.662,46.04C127.183,45.046 127.896,44.3 128.799,43.803C129.702,43.306 130.717,43.058 131.843,43.058C133.135,43.058 134.279,43.34 135.273,43.903C136.267,44.466 137.054,45.249 137.634,46.251C138.213,47.254 138.503,48.426 138.503,49.768C138.503,51.11 138.213,52.286 137.634,53.297C137.054,54.307 136.267,55.094 135.273,55.657C134.279,56.221 133.135,56.502 131.843,56.502ZM124.86,61.174L124.86,43.182L127.146,43.182L127.146,46.736L126.997,49.793L127.246,52.849L127.246,61.174L124.86,61.174ZM131.644,54.415C132.489,54.415 133.247,54.224 133.918,53.843C134.589,53.462 135.119,52.92 135.509,52.215C135.898,51.511 136.093,50.696 136.093,49.768C136.093,48.823 135.898,48.007 135.509,47.32C135.119,46.632 134.589,46.098 133.918,45.717C133.247,45.336 132.489,45.145 131.644,45.145C130.816,45.145 130.066,45.336 129.395,45.717C128.724,46.098 128.194,46.632 127.805,47.32C127.415,48.007 127.221,48.823 127.221,49.768C127.221,50.696 127.415,51.511 127.805,52.215C128.194,52.92 128.724,53.462 129.395,53.843C130.066,54.224 130.816,54.415 131.644,54.415Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <path
              d="M145.586,56.502C144.492,56.502 143.453,56.353 142.467,56.055C141.481,55.757 140.707,55.392 140.143,54.962L141.138,53.073C141.701,53.454 142.397,53.777 143.225,54.042C144.053,54.307 144.898,54.44 145.76,54.44C146.87,54.44 147.669,54.282 148.158,53.968C148.647,53.653 148.891,53.214 148.891,52.65C148.891,52.236 148.742,51.913 148.444,51.681C148.145,51.449 147.752,51.275 147.263,51.159C146.775,51.043 146.232,50.94 145.636,50.849C145.039,50.758 144.443,50.642 143.846,50.501C143.25,50.36 142.703,50.161 142.206,49.904C141.709,49.648 141.312,49.291 141.013,48.836C140.715,48.38 140.566,47.771 140.566,47.009C140.566,46.214 140.79,45.518 141.237,44.922C141.684,44.325 142.318,43.866 143.138,43.542C143.958,43.219 144.931,43.058 146.058,43.058C146.92,43.058 147.793,43.161 148.68,43.368C149.566,43.576 150.291,43.87 150.854,44.251L149.835,46.139C149.239,45.742 148.618,45.468 147.972,45.319C147.325,45.17 146.679,45.096 146.033,45.096C144.99,45.096 144.211,45.265 143.697,45.605C143.184,45.945 142.927,46.38 142.927,46.91C142.927,47.357 143.08,47.701 143.387,47.941C143.693,48.181 144.091,48.368 144.579,48.5C145.068,48.633 145.611,48.745 146.207,48.836C146.804,48.927 147.4,49.043 147.996,49.184C148.593,49.324 149.135,49.519 149.624,49.768C150.113,50.016 150.511,50.364 150.817,50.811C151.124,51.259 151.277,51.855 151.277,52.601C151.277,53.396 151.045,54.083 150.581,54.663C150.117,55.243 149.463,55.695 148.618,56.018C147.773,56.341 146.762,56.502 145.586,56.502Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <path
              d="M159.801,56.502C158.674,56.502 157.684,56.295 156.831,55.881C155.978,55.467 155.315,54.833 154.843,53.98C154.371,53.127 154.135,52.054 154.135,50.762L154.135,43.182L156.52,43.182L156.52,50.488C156.52,51.781 156.831,52.75 157.452,53.396C158.074,54.042 158.948,54.365 160.074,54.365C160.902,54.365 161.623,54.195 162.236,53.856C162.849,53.516 163.321,53.019 163.653,52.365C163.984,51.71 164.15,50.919 164.15,49.991L164.15,43.182L166.535,43.182L166.535,56.353L164.274,56.353L164.274,52.8L164.647,53.744C164.216,54.622 163.57,55.301 162.708,55.782C161.847,56.262 160.878,56.502 159.801,56.502Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <rect
              x="171.083"
              y="37.914"
              width="2.386"
              height="18.44"
              fill="#444e58"
            />
            <path
              d="M183.882,56.502C182.473,56.502 181.235,56.212 180.166,55.633C179.098,55.053 178.269,54.257 177.681,53.247C177.093,52.236 176.799,51.077 176.799,49.768C176.799,48.459 177.085,47.299 177.656,46.288C178.228,45.278 179.015,44.487 180.017,43.915C181.019,43.344 182.15,43.058 183.409,43.058C184.685,43.058 185.812,43.34 186.789,43.903C187.767,44.466 188.533,45.257 189.088,46.276C189.643,47.295 189.92,48.484 189.92,49.842C189.92,49.942 189.916,50.058 189.908,50.19C189.9,50.323 189.887,50.447 189.871,50.563L178.663,50.563L178.663,48.848L188.628,48.848L187.659,49.445C187.675,48.6 187.502,47.846 187.137,47.183C186.773,46.52 186.271,46.003 185.634,45.63C184.996,45.257 184.254,45.071 183.409,45.071C182.581,45.071 181.844,45.257 181.198,45.63C180.552,46.003 180.046,46.525 179.682,47.195C179.317,47.866 179.135,48.633 179.135,49.494L179.135,49.892C179.135,50.77 179.338,51.553 179.744,52.24C180.15,52.928 180.717,53.462 181.446,53.843C182.175,54.224 183.012,54.415 183.956,54.415C184.735,54.415 185.443,54.282 186.081,54.017C186.719,53.752 187.278,53.354 187.758,52.824L189.076,54.365C188.479,55.061 187.738,55.591 186.851,55.956C185.965,56.32 184.975,56.502 183.882,56.502Z"
              fill="#444e58"
              fillRule="nonzero"
            />
            <g>
              <g>
                <path
                  d="M94.187,39.468L95.287,41.668L93.087,41.668L94.187,39.468Z"
                  fill="#444e58"
                />
                <rect
                  x="93.087"
                  y="41.668"
                  width="2.2"
                  height="7.69"
                  fill="#444e58"
                />
              </g>
              <g>
                <path
                  d="M100.444,52.97L98.502,53.119L99.602,51.214L100.444,52.97Z"
                  fill="#444e58"
                />
                <path
                  d="M98.502,53.119L93.637,50.31L94.737,48.405L99.602,51.214L98.502,53.119Z"
                  fill="#444e58"
                />
              </g>
              <path
                d="M93.087,49.358L93.637,50.31L94.187,49.358L93.087,49.358Z"
                fill="#444e58"
              />
            </g>
            <path
              d="M102.852,56.338L104.699,57.828C102.223,60.896 98.432,62.859 94.187,62.859C86.735,62.859 80.685,56.809 80.685,49.358C80.685,41.906 86.735,35.856 94.187,35.856C97.601,35.856 100.72,37.126 103.099,39.218L101.532,41C99.571,39.275 97,38.229 94.187,38.229C88.045,38.229 83.058,43.216 83.058,49.358C83.058,55.5 88.045,60.486 94.187,60.486C97.687,60.486 100.811,58.867 102.852,56.338Z"
              fill="#444e58"
            />
            <path
              d="M105.028,43.443L100.395,41.316L103.949,38.461L105.028,43.443Z"
              fill="#444e58"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="_nameplate_Linear1"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(4.66543e-15,-78,76.1923,4.77612e-15,101.999,88.4382)"
          >
            <stop offset="0" stopColor="#b3babf" stopOpacity="1" />
            <stop offset="0.5" stopColor="#84919a" stopOpacity="1" />
            <stop offset="1" stopColor="#8a99a4" stopOpacity="1" />
          </linearGradient>
          <linearGradient
            id="_nameplate_Linear2"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(4.28169e-15,72,-6.96375,4.38964e-16,101.999,13.4382)"
          >
            <stop offset="0" stopColor="#0c0e15" stopOpacity="1" />
            <stop offset="0.15" stopColor="#313743" stopOpacity="0.52" />
            <stop offset="0.33" stopColor="#4e5868" stopOpacity="0.13" />
            <stop offset="1" stopColor="#586375" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="_nameplate_Linear3"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(4.50339e-15,-72,6.96375,4.1705e-16,101.999,85.4382)"
          >
            <stop offset="0" stopColor="#dee0e5" stopOpacity="1" />
            <stop offset="0.47" stopColor="#767f8e" stopOpacity="0.23" />
            <stop offset="1" stopColor="#586375" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* go button */}
        <g transform="translate(85, 170)">
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
          <circle
            id="Conical-Gradient-Layer"
            cx="59"
            cy="59"
            r="45"
            fill="#e5f0f3"
          />
          <path
            id="Arrow"
            d="M34,69L34,49L65,49L65,39L84,59L65,79L65,69L34,69Z"
            fill="#1e1e1e"
          />
        </g>
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

        {/* date picker */}
        <g transform="translate(45, 300)">
          <g>
            <path
              d="M99.976,0C155.154,0 199.951,44.798 199.951,99.976L199.951,448.024C199.951,503.202 155.154,548 99.976,548C44.798,548 0,503.202 0,448.024L0,99.976C0,44.798 44.798,0 99.976,0Z"
              fill="url(#_datepicker_Linear1)"
            />
            <path
              d="M100,13C148.017,13 187,51.983 187,100L187,448C187,496.017 148.017,535 100,535C51.983,535 13,496.017 13,448L13,100C13,51.983 51.983,13 100,13Z"
              fill="#000c23"
            />
            <path
              d="M100,17C145.809,17 183,54.191 183,100L183,448C183,493.809 145.809,531 100,531C54.191,531 17,493.809 17,448L17,100C17,54.191 54.191,17 100,17Z"
              fill="url(#_datepicker_Linear2)"
            />
            <path
              d="M100,25C141.394,25 175,58.606 175,100L175,448C175,489.394 141.394,523 100,523C58.606,523 25,489.394 25,448L25,100C25,58.606 58.606,25 100,25Z"
              fill="url(#_datepicker_Linear3)"
            />
            <path
              d="M100,30C138.634,30 170,61.366 170,100L170,448C170,486.634 138.634,518 100,518C61.366,518 30,486.634 30,448L30,100C30,61.366 61.366,30 100,30Z"
              fill="url(#_datepicker_Linear4)"
            />
            <path
              d="M100,38C134.219,38 162,65.781 162,100L162,448C162,482.219 134.219,510 100,510C65.781,510 38,482.219 38,448L38,100C38,65.781 65.781,38 100,38Z"
              fill="url(#_datepicker_Linear5)"
            />
          </g>
          <g>
            <g>
              <path
                d="M99.976,451L67.976,436L131.976,436L99.976,451Z"
                fill="#8bf8ff"
              />
              <path
                d="M99.976,358L131.976,373L67.976,373L99.976,358Z"
                fill="#8bf8ff"
              />
              <path
                d="M99.976,316L67.976,301L131.976,301L99.976,316Z"
                fill="#8bf8ff"
              />
              <path
                d="M99.976,222L131.976,237L67.976,237L99.976,222Z"
                fill="#8bf8ff"
              />
              <path
                d="M99.976,190L67.976,175L131.976,175L99.976,190Z"
                fill="#8bf8ff"
              />
              <path
                d="M99.976,97L131.976,112L67.976,112L99.976,97Z"
                fill="#8bf8ff"
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
        </g>
        <defs>
          <linearGradient
            id="_datepicker_Linear1"
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
            id="_datepicker_Linear2"
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
            id="_datepicker_Linear3"
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
            id="_datepicker_Linear4"
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
            <stop offset="1" stopColor="#bbb;st" p-opOity="1" />
          </linearGradient>
          <linearGradient
            id="_datepicker_Linear5"
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

        {/* dice button */}
        <g transform="translate(85, 900)">
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
            id="Dice"
            d="M26.358,43.154C26.358,43.154 26.352,42.379 27.349,41.93C28.074,41.604 29.078,41.93 29.078,41.93L56.688,54.307C56.688,54.307 57.249,54.572 57.408,54.867C57.64,55.298 57.64,56.075 57.64,56.075L57.64,91.981C57.64,91.981 57.64,93.033 56.938,93.514C55.963,94.181 55.056,93.749 55.056,93.749L28.126,81.781C28.126,81.781 27.309,81.457 26.763,80.482C26.217,79.507 26.222,78.38 26.222,78.38L26.358,43.154ZM41.455,61.379C39.729,61.379 38.327,63.695 38.327,66.548C38.327,69.4 39.729,71.716 41.455,71.716C43.182,71.716 44.583,69.4 44.583,66.548C44.583,63.695 43.182,61.379 41.455,61.379ZM91.642,43.154L91.778,78.38C91.778,78.38 91.783,79.507 91.237,80.482C90.691,81.457 89.874,81.781 89.874,81.781L62.944,93.749C62.944,93.749 62.037,94.181 61.062,93.514C60.36,93.033 60.36,91.981 60.36,91.981L60.36,56.075C60.36,56.075 60.36,55.298 60.592,54.867C60.751,54.572 61.312,54.307 61.312,54.307L88.922,41.93C88.922,41.93 89.926,41.604 90.651,41.93C91.648,42.379 91.642,43.154 91.642,43.154ZM82.121,52.131C80.395,52.131 78.993,54.447 78.993,57.299C78.993,60.152 80.395,62.468 82.121,62.468C83.848,62.468 85.249,60.152 85.249,57.299C85.249,54.447 83.848,52.131 82.121,52.131ZM70.425,72.124C68.698,72.124 67.296,74.44 67.296,77.292C67.296,80.145 68.698,82.461 70.425,82.461C72.151,82.461 73.553,80.145 73.553,77.292C73.553,74.44 72.151,72.124 70.425,72.124ZM59,52.131C58.139,52.131 57.64,51.859 57.64,51.859L30.03,39.482C30.03,39.482 29.214,39.097 29.214,37.714C29.214,36.467 30.03,36.082 30.03,36.082L57.64,24.385C57.64,24.385 58.139,24.113 59,24.113C59.861,24.113 60.36,24.385 60.36,24.385L87.97,36.082C87.97,36.082 88.786,36.467 88.786,37.714C88.786,39.097 87.97,39.482 87.97,39.482L60.36,51.859C60.36,51.859 59.861,52.131 59,52.131ZM59,34.45C56.148,34.45 53.832,35.852 53.832,37.578C53.832,39.305 56.148,40.706 59,40.706C61.852,40.706 64.168,39.305 64.168,37.578C64.168,35.852 61.852,34.45 59,34.45ZM44.039,34.45C41.187,34.45 38.871,35.852 38.871,37.578C38.871,39.305 41.187,40.706 44.039,40.706C46.892,40.706 49.207,39.305 49.207,37.578C49.207,35.852 46.892,34.45 44.039,34.45ZM73.961,34.45C71.108,34.45 68.793,35.852 68.793,37.578C68.793,39.305 71.108,40.706 73.961,40.706C76.813,40.706 79.129,39.305 79.129,37.578C79.129,35.852 76.813,34.45 73.961,34.45Z"
            fill="#1e1e1e"
          />
        </g>
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

      {/* door */}
      <svg
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
      </svg>
    </div>
  );
};
