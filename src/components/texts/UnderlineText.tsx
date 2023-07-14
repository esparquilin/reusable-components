import classes from "./UnderlineText.module.css";

const UnderlineText = () => {
  return (
    <div>
      <p className={classes.underline}>Underline text on hover (center)</p>
      <br />
      <p className={classes.underlineLeft}>Underline text on hover (left)</p>
      <br />
      <p className={classes.underlineRight}>Underline text on hover (right)</p>
      <br />
      <p className={classes.underlineLeftToRight}>
        Underline text on hover (left-right)
      </p>
      <br />
      <p className={classes.underlineRightToLeft}>
        Underline text on hover (right-left)
      </p>
      <br />
    </div>
  );
};

export default UnderlineText;
