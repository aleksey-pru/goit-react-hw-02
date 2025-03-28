import s from "./Options.module.css";
const Options = ({ updateFeedback }) => {
  return (
    <div className={s.container}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("reset")}>Reset</button>
    </div>
  );
};

export default Options;
