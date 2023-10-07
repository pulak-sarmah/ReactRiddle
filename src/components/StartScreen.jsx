import { PropTypes } from "prop-types";
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Riddle</h2>
      <h3>{numQuestions} questions to test your react knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Lets start
      </button>
    </div>
  );
}

export default StartScreen;

StartScreen.propTypes = {
  numQuestions: PropTypes.number,
  dispatch: PropTypes.func,
};
