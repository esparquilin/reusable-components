import classes from "./App.module.css";
import FillBackgroundText from ".//components/button/FillBackgroundText";
import FillText from "./components/texts/FillText";
import FunnyTexts from "./components/texts/FunnyTexts";
// import PerspectiveText from "./components/texts/PerspectiveText";
import UnderlineText from "./components/texts/UnderlineText";
import NeonButton from "./components/button/NeonButton";

function App() {
  return (
    <div className={classes.app}>
      <h1>REUSABLE COMPONENTS</h1>
      <UnderlineText />
      <FillText />
      <FillBackgroundText />
      <FunnyTexts />
      <NeonButton />
      {/* <PerspectiveText /> */}
    </div>
  );
}

export default App;
