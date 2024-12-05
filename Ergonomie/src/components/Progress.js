function Progress({ index, numQuestion, score, maxPoints }) {
  return (
    <>
      <progress max={numQuestion} value={index} />
      <header className="progress">
        <p>
          Question <strong>{index}</strong>/{numQuestion}
        </p>
        <p>
          {" "}
          <strong>{score} </strong> / {maxPoints}
        </p>
      </header>
    </>
  );
}

export default Progress;
