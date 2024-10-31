const Regenerate = ({ input, reSend, status }) => {
  return (
    <button
      onClick={() => {
        reSend();
      }}
    >
      <div className="bg-input p-2 m-2 rounded-3xl flex  ">
        <div className="w-full text-white text-xl  ps-4">
          <h4>Regenerate</h4>
        </div>
        <div>
          <div className={"rounded-full bg-white ms-2"}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="icon-2xl"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.47189 2.5C5.02418 2.5 5.47189 2.94772 5.47189 3.5V5.07196C7.17062 3.47759 9.45672 2.5 11.9719 2.5C17.2186 2.5 21.4719 6.75329 21.4719 12C21.4719 17.2467 17.2186 21.5 11.9719 21.5C7.10259 21.5 3.09017 17.8375 2.53689 13.1164C2.47261 12.5679 2.86517 12.0711 3.4137 12.0068C3.96223 11.9425 4.45901 12.3351 4.5233 12.8836C4.95988 16.6089 8.12898 19.5 11.9719 19.5C16.114 19.5 19.4719 16.1421 19.4719 12C19.4719 7.85786 16.114 4.5 11.9719 4.5C9.7515 4.5 7.75549 5.46469 6.38143 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4.47189C3.93253 9 3.4929 8.57299 3.47262 8.03859C3.47172 8.01771 3.47147 7.99677 3.47189 7.9758V3.5C3.47189 2.94772 3.91961 2.5 4.47189 2.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Regenerate;