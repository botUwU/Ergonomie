import Option from "./Option";
function Question({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  var pointsEarned = 0;
  if (answer === question.correctOption) {
    pointsEarned = Number(question.points);
  } else {
    pointsEarned = 0;
  }
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
