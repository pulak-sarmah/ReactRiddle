import { PropTypes } from "prop-types";

import Options from "./options";

function Question({ questions, dispatch, answer }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

Question.propTypes = {
  questions: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.number,
};

export default Question;
