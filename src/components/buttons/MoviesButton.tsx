import { BaseButton, BaseButtonChildProps } from "./BaseButton";

export const MoviesButton = ({ active, onClick }: BaseButtonChildProps) => (
  <BaseButton key="movies" onClick={onClick} active={active}>
    <g>
      <path
        d="M30.924,14.076C21.577,14.076 14,21.653 14,31C14,40.347 21.577,47.924 30.924,47.924C40.271,47.924 47.848,40.347 47.848,31C47.848,21.653 40.271,14.076 30.924,14.076ZM30.924,16.641C28.965,16.641 27.377,18.23 27.377,20.189C27.377,22.148 28.965,23.736 30.924,23.736C32.883,23.736 34.472,22.148 34.472,20.189C34.472,18.23 32.883,16.641 30.924,16.641ZM18.489,23.821C17.51,25.517 18.091,27.687 19.788,28.667C21.485,29.646 23.654,29.065 24.634,27.368C25.613,25.671 25.032,23.502 23.335,22.522C21.639,21.543 19.469,22.124 18.489,23.821ZM18.489,38.179C19.469,39.876 21.639,40.457 23.335,39.478C25.032,38.498 25.613,36.328 24.634,34.632C23.654,32.935 21.485,32.354 19.788,33.333C18.091,34.313 17.51,36.482 18.489,38.179ZM30.924,45.358C32.883,45.358 34.472,43.77 34.472,41.811C34.472,39.852 32.883,38.264 30.924,38.264C28.965,38.264 27.377,39.852 27.377,41.811C27.377,43.77 28.965,45.358 30.924,45.358ZM43.359,38.179C44.339,36.482 43.757,34.313 42.06,33.333C40.364,32.354 38.194,32.935 37.215,34.632C36.235,36.328 36.816,38.498 38.513,39.478C40.21,40.457 42.379,39.876 43.359,38.179ZM43.359,23.821C42.379,22.124 40.21,21.543 38.513,22.522C36.816,23.502 36.235,25.671 37.215,27.368C38.194,29.065 40.364,29.646 42.06,28.667C43.757,27.687 44.339,25.517 43.359,23.821Z"
        // style="fill:#1e2023;"
      />
      <path
        d="M37.327,47.924L48,47.924L48,44.318L43.167,44.318C41.483,45.866 39.506,47.099 37.327,47.924Z"
        // style="fill:#1e2023;"
      />
    </g>
  </BaseButton>
);
