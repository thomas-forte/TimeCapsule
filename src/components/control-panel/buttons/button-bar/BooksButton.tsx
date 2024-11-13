import { BaseButtonBar, BaseButtonBarChildProps } from "./BaseButtonBar";

export const BooksButton = ({ active, onClick }: BaseButtonBarChildProps) => (
  <BaseButtonBar name="books" onClick={onClick} active={active}>
    <path
      d="M20.926,14L43.653,14C43.653,14 43.902,14.01 44.102,14.21C44.3,14.407 44.312,14.69 44.312,14.69L44.312,40.654C44.312,40.654 43.053,42.223 43.053,43.413C43.053,44.602 44.312,46.171 44.312,46.171L44.312,47.67C44.312,47.67 44.303,47.828 44.222,47.91C44.142,47.991 44.012,48 44.012,48L21.106,48C21.106,48 19.818,47.971 18.767,46.921C17.687,45.84 17.688,44.492 17.688,44.492L17.688,17.208C17.688,17.208 17.693,16.034 18.707,15.019C19.722,14.005 20.926,14 20.926,14ZM42.004,41.014L22.185,41.014C22.185,41.014 19.877,41.024 19.877,43.413C19.877,45.801 22.185,45.811 22.185,45.811L42.004,45.811C42.004,45.811 41.314,44.602 41.314,43.413C41.314,42.223 42.004,41.014 42.004,41.014ZM41.314,18.527L22.185,18.527L22.185,23.534L41.314,23.534L41.314,18.527Z"
      // Original values
      // fill="#1e2023"
    />
  </BaseButtonBar>
);
