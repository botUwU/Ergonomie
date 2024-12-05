import { useEffect } from "react";

function Timer({ dispatch, timer }) {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(
    function () {
      const timerId = setInterval(function () {
        dispatch({ prot: "tick" });
      }, 1000);
      return () => clearInterval(timerId);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minutes > 9 ? "" : "0"}
      {minutes} : {seconds}
    </div>
  );
}

export default Timer;
