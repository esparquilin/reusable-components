import classes from "./NeonButton.module.css";

function NeonButton() {
  return (
    <div className={classes.buttonContainer}>
      <button className={classes["colorful-button"]}>
        <span>Button</span>
      </button>
      <button className={classes["glowing-button-cyan"]}>
        Glowing button cyan
      </button>
      <button className={classes["glowing-button-magenta"]}>
        Glowing button magenta
      </button>
      <button className={classes["glowing-button-yellow"]}>
        Glowing button yellow
      </button>
      <button className={classes["glowing-button-black"]}>
        Glowing button black
      </button>
    </div>
  );
}

export default NeonButton;
