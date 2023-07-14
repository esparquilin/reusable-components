import classes from "./FillBackground.module.css";

const FillBackgroundText = () => {
  return (
    <div>
      <button className={classes.ButtonFillBackgroundLeft}>
        Fill Background on hover (left)
      </button>
      <br />
      <button className={classes.ButtonFillBackgroundRight}>
        Fill Background on hover (right)
      </button>
      <br />
      <button className={classes.ButtonFillBackgroundTop}>
        Fill Background on hover (top)
      </button>
      <br />
      <button className={classes.ButtonFillBackgroundBottom}>
        Fill Background on hover (bottom)
      </button>
      <br />
      <button className={classes.ButtonFillBackgroundLeftToRight}>
        Fill Background on hover (left to right)
      </button>
      <br />
      <button className={classes.ButtonFillBackgroundRightToLeft}>
        Fill Background on hover (right to left)
      </button>
      <br />
      <button className={classes.ButtonFillBackgroundTopToBottom}>
        Fill Background on hover (top to bottom)
      </button>
      <br />
      <button className={classes.ButtonFillBackgroundBottomToTop}>
        Fill Background on hover (bottom to top)
      </button>
      <br />
    </div>
  );
};

export default FillBackgroundText;
