function Option({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((item, index) => (
        <button
          onClick={() => dispatch({ prot: "newAnswer", payload: index })}
          key={index}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          disabled={hasAnswered}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Option;
