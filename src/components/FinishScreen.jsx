function FinishScreen({ points, maxposiblepoints, dispatch }) {
  const percentage = (points / maxposiblepoints) * 100;

  console.log(percentage);
  return (
    <>
      <div>
        <p className="result">
          Your scored <strong>{points}</strong> out of{" "}
          <strong>{maxposiblepoints}(</strong>
          {Math.ceil(percentage)}%)
        </p>
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
