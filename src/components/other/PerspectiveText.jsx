import classes from "./Perspective.module.css";

const PerspectiveText = () => {
  return (
    <div>
      <div class={classes["perspective-text"]}>
        <div class={classes["perspective-line"]}>
          <p className={classes.text}></p>
          <p className={classes.text}>Web</p>
        </div>
        <div class={classes["perspective-line"]}>
          <p className={classes.text}>Angel</p>
          <p className={classes.text}>&</p>
        </div>
        <div class={classes["perspective-line"]}>
          <p className={classes.text}>Chapulin</p>
          <p className={classes.text}>mobile</p>
        </div>
        <div class={classes["perspective-line"]}>
          <p className={classes.text}>Vargas</p>
          <p className={classes.text}>
            <span>developer</span>
          </p>
        </div>
        <div class={classes["perspective-line"]}>
          <p className={classes.text}>Webpage</p>
          <p className={classes.text}></p>
        </div>
      </div>
    </div>
  );
};

export default PerspectiveText;
