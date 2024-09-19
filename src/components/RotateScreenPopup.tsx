import { useState } from "react";
import classNames from "classnames";
import styles from "./RotateScreenPopup.module.css";

export const RotateScreenPopup = () => {
  const [showRotateScreenPopup, setShowRotateScreenPopup] = useState(true);

  const dismissRotateScreenPopup = () => {
    setShowRotateScreenPopup(false);
  };

  return (
    showRotateScreenPopup && (
      <div
        className={classNames(
          "fixed top-0 left-0 h-full w-full backdrop-brightness-50",
          styles.rotateScreenPopup
        )}
        onClick={dismissRotateScreenPopup}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1080 1920"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          fill="#DDD"
        >
          <g>
            <path d="M274.187,368.649c4.007,1.853 5.757,6.611 3.904,10.619c-1.853,4.008 -6.611,5.757 -10.619,3.904c-26.137,-12.084 -45.087,-19.72 -59.906,-23.487c-13.247,-3.368 -22.783,-3.552 -31.319,-0.678c-12.202,4.109 -22.311,13.848 -37.554,27.204c-6.299,5.519 -43.256,37.831 -65.555,78.229c-12.73,23.061 -20.828,48.807 -14.248,73.525c4.333,16.276 15.113,31.942 34.724,46.123c85.473,61.803 136.993,78.739 177.935,71.747c41.123,-7.022 71.012,-37.651 112.981,-68.252c3.567,-2.602 8.576,-1.817 11.177,1.751c2.601,3.567 1.817,8.576 -1.751,11.177c-44.269,32.279 -76.336,63.688 -119.713,71.096c-43.557,7.438 -99.073,-8.804 -190.004,-74.554c-23.256,-16.816 -35.672,-35.67 -40.81,-54.972c-7.627,-28.649 0.947,-58.644 15.701,-85.373c23.506,-42.584 62.379,-76.714 69.019,-82.531c17.295,-15.154 29.147,-25.671 42.992,-30.333c11,-3.704 23.296,-4.006 40.367,0.334c15.497,3.939 35.347,11.835 62.679,24.471Z" />
            <path d="M350.42,559.273c-4.413,-0.138 -7.884,-3.833 -7.745,-8.246c0.138,-4.413 3.833,-7.884 8.246,-7.746c23.656,0.741 37.12,-5.415 49.04,-7.627c14.327,-2.659 27.003,-1.334 47.918,17.9c5.067,4.66 8.872,7.496 11.615,10.099c2.616,2.484 4.484,4.875 5.825,7.744c1.952,4.175 2.813,9.6 2.2,19.091c-1.445,22.381 -0.8,21.847 -1.447,38.842c-0.168,4.412 -3.886,7.857 -8.299,7.689c-4.412,-0.168 -7.857,-3.886 -7.689,-8.298c0.654,-17.179 0.008,-16.64 1.468,-39.264c0.361,-5.584 0.421,-8.827 -0.727,-11.284c-0.722,-1.544 -1.972,-2.624 -3.566,-4.023c-2.6,-2.283 -5.965,-4.914 -10.211,-8.819c-9.325,-8.576 -16.228,-12.776 -22.684,-14.134c-6.261,-1.317 -11.915,0.107 -18.614,1.83c-11.22,2.886 -24.737,6.891 -45.33,6.246Z" />
          </g>
          <g>
            <path
              d="M599.401,327.052c-1.782,0 -3.446,-0.75 -4.992,-2.25c-15.516,-15.328 -32.766,-25.64 -51.75,-30.937l0.562,13.781l0.352,13.852c-0,2.062 -0.668,3.785 -2.004,5.167c-1.336,1.383 -3.012,2.075 -5.028,2.075c-2.015,-0 -3.691,-0.692 -5.027,-2.075c-1.336,-1.382 -2.004,-3.105 -2.004,-5.167c0,-3.704 -0.176,-9.223 -0.527,-16.559c-0.352,-7.336 -0.528,-12.856 -0.528,-16.559c0,-4.312 0.469,-10.734 1.407,-19.265c0.937,-8.532 1.406,-14.93 1.406,-19.196c-0,-2.39 -0.223,-5.929 -0.668,-10.617c-0.445,-4.687 -0.668,-8.226 -0.668,-10.617c-0,-2.672 0.75,-5.016 2.25,-7.031c1.781,-2.485 4.242,-3.61 7.383,-3.375l16.945,1.336c6.422,0.797 11.836,2.367 16.242,4.711c18.985,10.078 28.477,22.382 28.477,36.914c-0,7.125 -3.235,13.429 -9.703,18.914c-5.203,4.406 -11.696,7.758 -19.477,10.054c14.578,7.829 25.477,16.079 32.695,24.75c1.219,1.5 1.829,3.094 1.829,4.782c-0,1.968 -0.715,3.679 -2.145,5.133c-1.43,1.453 -3.105,2.179 -5.027,2.179Zm-44.789,-92.953l-10.407,-0.844l0.704,8.508c0.328,3.469 0.492,6.305 0.492,8.508c-0,3.75 -0.305,8.414 -0.914,13.992l-1.477,13.992c0.656,0 1.676,0.024 3.059,0.071c1.382,0.047 2.425,0.07 3.129,0.07c11.953,-0 20.906,-1.594 26.859,-4.781c2.625,-1.453 5.062,-3.352 7.312,-5.696c2.485,-2.625 3.727,-4.851 3.727,-6.679c0,-6.516 -3.703,-12.586 -11.109,-18.211c-6.797,-5.156 -13.922,-8.133 -21.375,-8.93Z"
              fillRule="nonzero"
            />
            <path
              d="M646.862,330.427c-7.875,0 -14.649,-2.906 -20.321,-8.719c-6.328,-6.468 -9.656,-15.164 -9.984,-26.085c-0.281,-10.594 2.391,-19.922 8.016,-27.985c6.562,-9.515 15.703,-14.273 27.421,-14.273c9.375,-0 16.477,4.289 21.305,12.867c3.844,6.937 5.695,15.281 5.555,25.031c-0.141,10.406 -2.86,19.289 -8.156,26.649c-6,8.343 -13.946,12.515 -23.836,12.515Zm4.218,-62.789c-6.89,-0.047 -12.257,3.235 -16.101,9.844c-3.047,5.297 -4.57,11.344 -4.57,18.141c-0,6.796 1.851,12.093 5.554,15.89c3.094,3.141 6.727,4.711 10.899,4.711c4.875,0 9.07,-1.781 12.586,-5.344c3.984,-3.937 6.093,-9.257 6.328,-15.961c0.656,-18.14 -4.242,-27.234 -14.696,-27.281Z"
              fillRule="nonzero"
            />
            <path
              d="M743.26,266.373c-0.984,-0 -2.144,-0.047 -3.48,-0.141c-1.336,-0.094 -2.496,-0.141 -3.481,-0.141c-1.078,0 -4.265,0.352 -9.562,1.055l1.336,41.555l0.07,3.093l0.07,3.586c0.188,10.266 -2.273,15.399 -7.383,15.399c-1.875,-0 -3.504,-0.61 -4.886,-1.828c-1.383,-1.219 -2.075,-2.743 -2.075,-4.571c0,-1.781 0.071,-4.453 0.211,-8.015c0.141,-3.563 0.211,-6.235 0.211,-8.016l-1.406,-41.062c-3.422,-0.141 -8.625,-0.539 -15.609,-1.196c-4.172,-0.562 -6.258,-2.883 -6.258,-6.961c-0,-2.062 0.633,-3.773 1.898,-5.132c1.266,-1.36 2.883,-2.04 4.852,-2.04l14.766,1.196c-0,-2.391 -0.106,-5.59 -0.317,-9.598c-0.211,-4.008 -0.316,-6.902 -0.316,-8.683c-0,-1.969 0.679,-3.598 2.039,-4.887c1.359,-1.289 3.023,-1.934 4.992,-1.934c4.219,0 6.68,3.446 7.383,10.336c0.14,1.735 0.211,3.82 0.211,6.258l-0.141,4.078l-0.07,4.359c5.812,-0.75 9.14,-1.125 9.984,-1.125c4.875,0 8.063,0.235 9.563,0.704c2.859,0.937 4.289,3.14 4.289,6.609c-0,2.062 -0.645,3.762 -1.934,5.098c-1.289,1.336 -2.941,2.004 -4.957,2.004Z"
              fillRule="nonzero"
            />
            <path
              d="M818.987,330.919c-0.891,0 -2.508,-1.031 -4.852,-3.093c-2.109,-1.922 -3.68,-3.633 -4.711,-5.133c-4.5,2.437 -8.461,4.277 -11.883,5.519c-3.422,1.243 -6.281,1.864 -8.578,1.864c-10.969,-0 -18.961,-3.094 -23.976,-9.282c-4.735,-5.812 -7.102,-14.718 -7.102,-26.718c0,-11.344 3.902,-21.047 11.707,-29.11c7.805,-8.062 17.121,-12.093 27.949,-12.093c4.078,-0 8.649,1.054 13.711,3.164c6.375,2.625 9.563,5.789 9.563,9.492c-0,1.265 -0.469,2.39 -1.406,3.375c-0.469,1.781 -0.833,4.711 -1.09,8.789c-0.258,4.078 -0.41,9.305 -0.457,15.68c-0.047,5.812 0.351,10.406 1.195,13.781c0.469,2.062 1.945,6.187 4.43,12.375c0.328,0.844 0.867,2.086 1.617,3.726l0.422,1.196c-0,1.875 -0.657,3.422 -1.969,4.64c-1.313,1.219 -2.836,1.828 -4.57,1.828Zm-14.625,-48.867c-0,-2.015 0.129,-4.207 0.386,-6.574c0.258,-2.367 0.645,-4.887 1.161,-7.559c-1.735,-0.89 -3.223,-1.546 -4.465,-1.968c-1.243,-0.422 -2.239,-0.633 -2.989,-0.633c-7.265,-0 -13.535,2.965 -18.808,8.894c-5.274,5.93 -7.91,12.762 -7.91,20.496c-0,7.688 1.359,13.454 4.078,17.297c2.719,3.844 6.797,5.766 12.234,5.766c4.5,-0 8.32,-0.82 11.461,-2.461c1.688,-0.891 4.055,-2.672 7.102,-5.344c-1.5,-12.422 -2.25,-21.726 -2.25,-27.914Z"
              fillRule="nonzero"
            />
            <path
              d="M884.799,266.373c-0.984,-0 -2.144,-0.047 -3.48,-0.141c-1.336,-0.094 -2.496,-0.141 -3.481,-0.141c-1.078,0 -4.265,0.352 -9.562,1.055l1.336,41.555l0.07,3.093l0.07,3.586c0.188,10.266 -2.273,15.399 -7.383,15.399c-1.875,-0 -3.503,-0.61 -4.886,-1.828c-1.383,-1.219 -2.074,-2.743 -2.074,-4.571c-0,-1.781 0.07,-4.453 0.21,-8.015c0.141,-3.563 0.211,-6.235 0.211,-8.016l-1.406,-41.062c-3.422,-0.141 -8.625,-0.539 -15.609,-1.196c-4.172,-0.562 -6.258,-2.883 -6.258,-6.961c-0,-2.062 0.633,-3.773 1.898,-5.132c1.266,-1.36 2.883,-2.04 4.852,-2.04l14.766,1.196c-0,-2.391 -0.106,-5.59 -0.317,-9.598c-0.211,-4.008 -0.316,-6.902 -0.316,-8.683c-0,-1.969 0.679,-3.598 2.039,-4.887c1.359,-1.289 3.023,-1.934 4.992,-1.934c4.219,0 6.68,3.446 7.383,10.336c0.14,1.735 0.211,3.82 0.211,6.258l-0.141,4.078l-0.07,4.359c5.812,-0.75 9.14,-1.125 9.984,-1.125c4.875,0 8.063,0.235 9.563,0.704c2.859,0.937 4.289,3.14 4.289,6.609c-0,2.062 -0.645,3.762 -1.934,5.098c-1.289,1.336 -2.941,2.004 -4.957,2.004Z"
              fillRule="nonzero"
            />
            <path
              d="M938.448,329.513c-10.594,0 -19.172,-2.648 -25.735,-7.945c-7.172,-5.86 -10.758,-14.063 -10.758,-24.61c0,-12.187 2.954,-22.406 8.86,-30.656c6.422,-9 15,-13.5 25.734,-13.5c7.781,0 14.133,1.313 19.055,3.938c6.047,3.234 9.07,8.203 9.07,14.906c0,4.687 -2.648,8.953 -7.945,12.797c-2.344,1.687 -7.313,4.312 -14.906,7.875l-26.86,12.726c2.625,3.891 5.895,6.821 9.809,8.789c3.914,1.969 8.472,2.954 13.676,2.954c3.234,-0 7.031,-0.61 11.39,-1.829c5.531,-1.546 9.094,-3.574 10.688,-6.082c1.593,-2.507 3.304,-3.761 5.133,-3.761c1.64,-0 3.105,0.621 4.394,1.863c1.289,1.242 1.934,2.684 1.934,4.324c-0,5.203 -4.196,9.68 -12.586,13.43c-7.172,3.187 -14.157,4.781 -20.953,4.781Zm-1.899,-64.055c-5.719,0 -10.476,2.215 -14.273,6.645c-3.797,4.43 -6.633,11.098 -8.508,20.004l21.586,-10.266c8.484,-4.125 14.531,-7.711 18.14,-10.758c-4.031,-3.75 -9.679,-5.625 -16.945,-5.625Z"
              fillRule="nonzero"
            />
            <path
              d="M591.315,407.56l-24.328,52.594c-6,12.797 -10.594,23.508 -13.782,32.133l-4.64,13.64c-1.219,3.375 -3.328,5.063 -6.328,5.063c-1.969,-0 -3.668,-0.645 -5.098,-1.934c-1.43,-1.289 -2.145,-2.894 -2.145,-4.816c0,-4.688 5.063,-18.258 15.188,-40.711l-25.172,-48.446l-3.164,-5.132c-1.266,-2.157 -1.898,-3.961 -1.898,-5.414c-0,-1.922 0.738,-3.61 2.214,-5.063c1.477,-1.453 3.129,-2.18 4.957,-2.18c2.157,0 3.821,0.821 4.993,2.461c7.968,11.063 16.523,26.813 25.664,47.25l10.406,-24.257c3.75,-8.391 7.359,-15.61 10.828,-21.657c1.5,-2.625 3.469,-3.937 5.906,-3.937c1.922,-0 3.621,0.679 5.098,2.039c1.477,1.359 2.215,2.976 2.215,4.851c-0,1.032 -0.305,2.204 -0.914,3.516Z"
              fillRule="nonzero"
            />
            <path
              d="M631.323,474.427c-7.875,0 -14.649,-2.906 -20.321,-8.719c-6.328,-6.468 -9.656,-15.164 -9.984,-26.085c-0.281,-10.594 2.391,-19.922 8.016,-27.985c6.562,-9.515 15.703,-14.273 27.421,-14.273c9.375,-0 16.477,4.289 21.305,12.867c3.844,6.937 5.695,15.281 5.555,25.031c-0.141,10.406 -2.86,19.289 -8.156,26.649c-6,8.343 -13.946,12.515 -23.836,12.515Zm4.218,-62.789c-6.89,-0.047 -12.257,3.235 -16.101,9.844c-3.047,5.297 -4.571,11.344 -4.571,18.141c0,6.796 1.852,12.093 5.555,15.89c3.094,3.141 6.727,4.711 10.899,4.711c4.875,0 9.07,-1.781 12.586,-5.344c3.984,-3.937 6.093,-9.257 6.328,-15.961c0.656,-18.14 -4.243,-27.234 -14.696,-27.281Z"
              fillRule="nonzero"
            />
            <path
              d="M577.463,560.138c-2.578,0 -4.383,-0.867 -5.414,-2.601c-0.703,-1.219 -1.312,-3.75 -1.828,-7.594c-3.516,0.89 -8.93,2.531 -16.242,4.922c-7.547,3 -11.344,6.703 -11.391,11.109c1.406,0.516 2.789,0.891 4.149,1.125c10.781,1.922 18.797,4.57 24.047,7.945c7.64,4.922 11.46,12.047 11.46,21.375c0,7.641 -3.304,13.407 -9.914,17.297c-5.484,3.188 -12.421,4.782 -20.812,4.782c-6.141,-0 -12,-1.032 -17.578,-3.094c-7.219,-2.625 -10.828,-6.281 -10.828,-10.969c-0,-1.875 0.738,-3.516 2.214,-4.922c1.477,-1.406 3.153,-2.109 5.028,-2.109c1.453,-0 3.328,1.125 5.625,3.375c1.125,1.078 3.656,1.969 7.594,2.672c3.14,0.562 5.789,0.843 7.945,0.843c3.937,0 7.406,-0.468 10.406,-1.406c4.36,-1.359 6.539,-3.515 6.539,-6.469c0,-6.375 -4.453,-10.687 -13.359,-12.937l-7.313,-1.617c-6.234,-1.36 -10.664,-2.953 -13.289,-4.782c-3.797,-2.625 -5.695,-6.585 -5.695,-11.882c-0,-9.797 4.617,-16.782 13.852,-20.953c2.812,-1.266 7.312,-2.778 13.5,-4.536c6.187,-1.757 10.617,-3.246 13.289,-4.464c1.921,-0.844 4.007,-1.266 6.257,-1.266c2.016,-0 3.668,0.656 4.957,1.969c1.289,1.312 1.934,3.023 1.934,5.132c0,1.36 0.293,3.352 0.879,5.977c0.586,2.625 0.879,4.617 0.879,5.977c-0,2.109 -0.645,3.82 -1.934,5.132c-1.289,1.313 -2.941,1.969 -4.957,1.969Z"
              fillRule="nonzero"
            />
            <path
              d="M631.885,618.708c-9.609,0 -17.625,-2.906 -24.047,-8.718c-6.75,-6.094 -10.125,-14.133 -10.125,-24.117c0,-9.516 3.164,-19.336 9.492,-29.461c7.032,-11.25 14.954,-16.875 23.766,-16.875c4.594,-0 9.727,1.078 15.398,3.234c7.172,2.766 10.758,6.141 10.758,10.125c0,1.781 -0.586,3.363 -1.758,4.746c-1.171,1.383 -2.625,2.074 -4.359,2.074c-1.359,0 -2.543,-0.41 -3.551,-1.23c-1.008,-0.821 -1.98,-1.629 -2.918,-2.426c-2.765,-2.203 -7.289,-3.305 -13.57,-3.305c-4.781,0 -9.516,4.266 -14.203,12.797c-4.266,7.828 -6.399,14.602 -6.399,20.321c0,6.187 2.11,11.062 6.329,14.625c3.937,3.328 9,4.992 15.187,4.992c2.813,-0 5.813,-0.75 9,-2.25l8.156,-4.36c1.407,-0.75 2.414,-1.125 3.024,-1.125c1.734,0 3.234,0.692 4.5,2.075c1.265,1.382 1.898,2.964 1.898,4.746c0,3.422 -3.609,6.726 -10.828,9.914c-6.328,2.812 -11.578,4.218 -15.75,4.218Z"
              fillRule="nonzero"
            />
            <path
              d="M728.776,562.318c-0.328,5.859 -2.672,8.789 -7.032,8.789c-4.031,-0 -6.046,-2.32 -6.046,-6.961c-0,-0.891 -0.071,-2.531 -0.211,-4.922l-0.211,-5.906c-7.407,0.89 -13.336,2.976 -17.789,6.258c-4.172,3.047 -7.641,7.64 -10.407,13.781l0.141,38.531c0,4.735 -2.32,7.102 -6.961,7.102c-4.125,-0 -6.187,-2.367 -6.187,-7.102l-0,-49.359c-0,-1.547 0.058,-3.867 0.175,-6.961c0.118,-3.094 0.176,-5.414 0.176,-6.961c0,-4.734 2.063,-7.102 6.188,-7.102c4.593,0 6.914,3.891 6.961,11.672c9,-8.672 18.984,-13.008 29.953,-13.008c3.797,0 6.633,1.43 8.508,4.289c1.875,2.86 2.812,7.172 2.812,12.938c0,2.437 -0.023,4.078 -0.07,4.922Z"
              fillRule="nonzero"
            />
            <path
              d="M776.096,617.513c-10.594,0 -19.172,-2.648 -25.734,-7.945c-7.172,-5.86 -10.758,-14.063 -10.758,-24.61c-0,-12.187 2.953,-22.406 8.859,-30.656c6.422,-9 15,-13.5 25.735,-13.5c7.781,0 14.132,1.313 19.054,3.938c6.047,3.234 9.071,8.203 9.071,14.906c-0,4.687 -2.649,8.953 -7.946,12.797c-2.343,1.687 -7.312,4.312 -14.906,7.875l-26.859,12.726c2.625,3.891 5.894,6.821 9.808,8.789c3.914,1.969 8.473,2.954 13.676,2.954c3.234,-0 7.031,-0.61 11.391,-1.829c5.531,-1.546 9.093,-3.574 10.687,-6.082c1.594,-2.507 3.305,-3.761 5.133,-3.761c1.641,-0 3.105,0.621 4.394,1.863c1.29,1.242 1.934,2.684 1.934,4.324c0,5.203 -4.195,9.68 -12.586,13.43c-7.172,3.187 -14.156,4.781 -20.953,4.781Zm-1.898,-64.055c-5.719,0 -10.477,2.215 -14.274,6.645c-3.797,4.43 -6.633,11.098 -8.508,20.004l21.586,-10.266c8.485,-4.125 14.532,-7.711 18.141,-10.758c-4.031,-3.75 -9.68,-5.625 -16.945,-5.625Z"
              fillRule="nonzero"
            />
            <path
              d="M854.987,617.513c-10.594,0 -19.172,-2.648 -25.735,-7.945c-7.172,-5.86 -10.758,-14.063 -10.758,-24.61c0,-12.187 2.954,-22.406 8.86,-30.656c6.422,-9 15,-13.5 25.734,-13.5c7.781,0 14.133,1.313 19.055,3.938c6.047,3.234 9.07,8.203 9.07,14.906c0,4.687 -2.648,8.953 -7.945,12.797c-2.344,1.687 -7.313,4.312 -14.906,7.875l-26.86,12.726c2.625,3.891 5.895,6.821 9.809,8.789c3.914,1.969 8.473,2.954 13.676,2.954c3.234,-0 7.031,-0.61 11.39,-1.829c5.532,-1.546 9.094,-3.574 10.688,-6.082c1.594,-2.507 3.304,-3.761 5.133,-3.761c1.64,-0 3.105,0.621 4.394,1.863c1.289,1.242 1.934,2.684 1.934,4.324c-0,5.203 -4.196,9.68 -12.586,13.43c-7.172,3.187 -14.156,4.781 -20.953,4.781Zm-1.899,-64.055c-5.719,0 -10.476,2.215 -14.273,6.645c-3.797,4.43 -6.633,11.098 -8.508,20.004l21.586,-10.266c8.484,-4.125 14.531,-7.711 18.141,-10.758c-4.032,-3.75 -9.68,-5.625 -16.946,-5.625Z"
              fillRule="nonzero"
            />
            <path
              d="M954.971,619.271c-4.031,-0 -6.305,-2.203 -6.82,-6.609l-1.969,-15.399c-0.656,-5.484 -0.984,-10.617 -0.984,-15.398c-0,-1.313 0.082,-3.539 0.246,-6.68c0.164,-3.141 0.246,-5.367 0.246,-6.68c-0,-10.125 -1.875,-15.187 -5.625,-15.187c-5.25,-0 -10.266,3.117 -15.047,9.351c-4.313,5.672 -7.688,12.844 -10.125,21.516c-0.094,1.828 -0.305,4.125 -0.633,6.891c-0.281,2.343 -0.422,4.617 -0.422,6.82c0,1.406 0.141,3.516 0.422,6.328c0.281,2.813 0.422,4.922 0.422,6.328c-0,2.11 -0.645,3.821 -1.934,5.133c-1.289,1.313 -2.941,1.969 -4.957,1.969c-2.062,-0 -3.726,-0.656 -4.992,-1.969c-1.265,-1.312 -1.898,-3.023 -1.898,-5.133c-0,-1.406 -0.153,-3.515 -0.457,-6.328c-0.305,-2.812 -0.457,-4.922 -0.457,-6.328c-0,-4.828 0.339,-11.52 1.019,-20.074c0.68,-8.555 1.02,-15.246 1.02,-20.074c-0,-1.5 -0.082,-3.727 -0.246,-6.68c-0.164,-2.953 -0.246,-5.18 -0.246,-6.68c-0,-2.015 0.667,-3.668 2.003,-4.957c1.336,-1.289 2.989,-1.933 4.957,-1.933c4.313,-0 6.68,3.046 7.102,9.14l0.211,8.227c7.875,-10.5 15.961,-15.75 24.258,-15.75c7.5,-0 12.726,3.304 15.679,9.914c2.016,4.406 3.118,10.922 3.305,19.547l0,7.101l-0.07,6.539c-0,3.891 0.504,8.918 1.512,15.082c1.007,6.164 1.511,11.168 1.511,15.012c0,2.063 -0.668,3.738 -2.004,5.027c-1.336,1.289 -3.011,1.934 -5.027,1.934Z"
              fillRule="nonzero"
            />
            <path
              d="M591.315,695.56l-24.328,52.594c-6,12.797 -10.594,23.508 -13.782,32.133l-4.64,13.64c-1.219,3.375 -3.328,5.063 -6.328,5.063c-1.969,-0 -3.668,-0.645 -5.098,-1.934c-1.43,-1.289 -2.145,-2.894 -2.145,-4.816c0,-4.688 5.063,-18.258 15.188,-40.711l-25.172,-48.446l-3.164,-5.132c-1.266,-2.157 -1.898,-3.961 -1.898,-5.414c-0,-1.922 0.738,-3.61 2.214,-5.063c1.477,-1.453 3.129,-2.18 4.957,-2.18c2.157,0 3.821,0.821 4.993,2.461c7.968,11.063 16.523,26.813 25.664,47.25l10.406,-24.257c3.75,-8.391 7.359,-15.61 10.828,-21.657c1.5,-2.625 3.469,-3.937 5.906,-3.937c1.922,-0 3.621,0.679 5.098,2.039c1.477,1.359 2.215,2.976 2.215,4.851c-0,1.032 -0.305,2.204 -0.914,3.516Z"
              fillRule="nonzero"
            />
            <path
              d="M631.323,762.427c-7.875,0 -14.649,-2.906 -20.321,-8.719c-6.328,-6.468 -9.656,-15.164 -9.984,-26.085c-0.281,-10.594 2.391,-19.922 8.016,-27.985c6.562,-9.515 15.703,-14.273 27.421,-14.273c9.375,-0 16.477,4.289 21.305,12.867c3.844,6.937 5.695,15.281 5.555,25.031c-0.141,10.406 -2.86,19.289 -8.156,26.649c-6,8.343 -13.946,12.515 -23.836,12.515Zm4.218,-62.789c-6.89,-0.047 -12.257,3.235 -16.101,9.844c-3.047,5.297 -4.571,11.344 -4.571,18.141c0,6.796 1.852,12.093 5.555,15.89c3.094,3.141 6.727,4.711 10.899,4.711c4.875,0 9.07,-1.781 12.586,-5.344c3.984,-3.937 6.093,-9.257 6.328,-15.961c0.656,-18.14 -4.243,-27.234 -14.696,-27.281Z"
              fillRule="nonzero"
            />
            <path
              d="M694.182,651.685l-0,78.258c-0,4.172 -2.086,6.258 -6.258,6.258c-4.172,-0 -6.258,-2.086 -6.258,-6.258c0,-1.922 -0.058,-4.793 -0.175,-8.613c-0.118,-3.821 -0.176,-6.668 -0.176,-8.543c-0,-6.797 0.058,-16.981 0.176,-30.551c0.117,-13.571 0.175,-23.754 0.175,-30.551c0,-4.172 2.086,-6.258 6.258,-6.258c4.172,0 6.258,2.086 6.258,6.258Zm0.07,104.977c0,1.687 -0.668,3.152 -2.004,4.394c-1.336,1.242 -2.847,1.863 -4.535,1.863c-1.875,0 -3.75,-1.218 -5.625,-3.656c-1.828,-2.297 -2.742,-4.406 -2.742,-6.328c0,-1.687 0.668,-3.141 2.004,-4.359c1.336,-1.219 2.871,-1.828 4.605,-1.828c1.829,-0 3.704,1.218 5.625,3.656c1.782,2.297 2.672,4.383 2.672,6.258Z"
              fillRule="nonzero"
            />
          </g>
        </svg>
      </div>
    )
  );
};
