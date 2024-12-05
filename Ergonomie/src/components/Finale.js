function Finale({ score, maxPoints, highscore, dispatch }) {
  const percentage = (score / maxPoints) * 100;
  let emoji;
  if (percentage < 20) {
    emoji = "👶";
  } else if (percentage >= 20 && percentage < 40) {
    emoji = "😊";
  } else if (percentage >= 40 && percentage < 70) {
    emoji = "👌";
  } else {
    emoji = "💪";
  }
  return (
    <div>
      <p className="result">
        You scored{" "}
        <strong>
          {score}/ {maxPoints}
        </strong>{" "}
        ({Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ prot: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Finale;
