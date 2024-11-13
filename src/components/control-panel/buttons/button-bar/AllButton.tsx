import { BaseButtonBar, BaseButtonBarChildProps } from "./BaseButtonBar";

export const AllButton = ({ active, onClick }: BaseButtonBarChildProps) => (
  <BaseButtonBar name="all" onClick={onClick} active={active}>
    <path
      d="M45.444,20.165C46.933,20.689 48,22.107 48,23.775L48,40.775C48,44.765 44.765,48 40.775,48L23.775,48C22.107,48 20.689,46.933 20.165,45.444L23.731,45.449L40.775,45.45C43.357,45.45 45.45,43.357 45.45,40.775L45.45,23.775L45.443,23.688L45.444,20.165ZM39.92,14C42.032,14 43.745,15.713 43.745,17.825L43.745,39.92C43.745,42.032 42.032,43.745 39.92,43.745L17.825,43.745C15.713,43.745 14,42.032 14,39.92L14,17.825C14,15.713 15.713,14 17.825,14L39.92,14ZM33.498,23.298L26.888,29.909L25.22,27.685C24.798,27.122 23.998,27.008 23.435,27.43C22.872,27.852 22.758,28.652 23.18,29.215L25.73,32.615C26.196,33.236 27.103,33.3 27.652,32.752L35.302,25.102C35.799,24.604 35.799,23.796 35.302,23.298C34.804,22.801 33.996,22.801 33.498,23.298Z"
      // Original values
      // fill="#212121"
      // fillRule="nonzero"
    />
  </BaseButtonBar>
);
