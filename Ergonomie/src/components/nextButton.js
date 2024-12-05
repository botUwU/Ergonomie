function NextButton({ dispatch, answer, question, index, nquestions }) {
  if (answer === null) return null;
  var points;
  if (answer === question.correctOption) {
    points = question.points;
  } else {
    points = 0;
  }
  console.log(points);
  return (
    <button
      onClick={() => dispatch({ prot: "next", payload: points })}
      className="btn btn-ui"
    >
      {index === nquestions - 1 ? "finish quiz" : "next"}
    </button>
  );
}

export default NextButton;
