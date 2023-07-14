import classes from "./FillTexs.module.css";

const FillText = () => {
  return (
    <div>
      <p className={classes.fillLeft}>FillText on hover (left)</p>
      <br />
      <p className={classes.fillTop}>FillText on hover (top)</p>
      <br />
      <p className={classes.fillShadowTop}>
        FillText on hover with shadow (top)
      </p>
      <br />
      <p className={classes.fillShadowBottom}>
        FillText on hover with shadow (bottom)
      </p>
      <br />
      <p className={classes.fillShadowLeft}>
        FillText on hover with shadow (left)
      </p>
      <br />
      <p className={classes.fillShadowRight}>
        FillText on hover with shadow (right)
      </p>
      <br />
    </div>
  );
};

export default FillText;
