import React from "react";
import useMeasure from "react-use-measure";
import { useEffect, useContext, createContext } from "react";
import MainPrice from "./Main/MainPrice";
import MainFeedback from "./Main/MainFeedback";
import MainContact from "./Main/MainContact";
import MainTraining from "./Main/MainTraining";
import "../Styles/main.css";

export const ValueContext = createContext();

const Main = ({ style }) => {
  const [ref, { y }] = useMeasure();
  const { setYPos } = useContext(ValueContext);

  useEffect(() => {
    setYPos(y);
  }, [setYPos, y]);

  return (
    <main className="App-main">
      <MainPrice refs={ref} style={style} />
      <MainTraining />
      <MainFeedback />
      <MainContact />
    </main>
  );
};

export default Main;
