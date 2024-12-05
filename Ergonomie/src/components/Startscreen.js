function Startscreen({ NQuestions, dispatch }) {
  return (
    <div>
      <h2>welcome to the react quiz</h2>
      <h3>{NQuestions} questions to test your React skills</h3>
      <button
        onClick={() => dispatch({ prot: "status", payload: "active" })}
        className="btn btn-ui"
      >
        Start
      </button>
    </div>
  );
}

export default Startscreen;
