import s from "../Options/Options.module.css";

export default function Options({ updateFeedback, reset, totalFeedback }) {
  return (
    <div>
      <button className={s.optionBtn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.optionBtn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.optionBtn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.optionBtn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
