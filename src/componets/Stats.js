import React, { useEffect } from "react";
import Graph from "./Graph";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";

const Stats = ({
  wpm,
  accuracy,
  correctChars,
  incorrectChar,
  missedChars,
  extraChars,
  graphData,
}) => {
  //remove duplicate value Start here
  console.log("grap data", graphData);
  let timeSet = new Set();
  const newGraph = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0]);
      return i;
    }
  });
  //remove duplicate value end here
  const pushDataToDB = () => {
    if (isNaN(accuracy)) {
      toast.error("Invalid test", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    const resultRef = db.collection("Results");
    const { uid } = auth.currentUser;
    resultRef
      .add({
        wpm: wpm,
        accuracy: accuracy,
        timeStamp: new Date(),
        characters: `${correctChars}/${incorrectChar}/${missedChars}/${extraChars}`,
        userId: uid,
      })
      .then((res) => {
        toast.success("Data save to DB", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error("not able  to save result", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  useEffect(() => {
    if (auth.currentUser) {
      pushDataToDB();
    } else {
      toast.warning("login to save result", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, []);
  return (
    <div className="stats-box">
      <div className="left-stats">
        <div className="title">WPM</div>
        <div className="subtitle">{wpm}</div>
        <div className="title">Accuracy</div>
        <div className="subtitle">
          {isNaN(accuracy) || !isFinite(accuracy) ? "0" : accuracy}
        </div>
        <div className="title">Characters</div>
        <div className="subtitle">
          {correctChars}/{incorrectChar}/{missedChars}/{extraChars}
        </div>
        <div></div>
      </div>

      <div className="right-stats">
        <Graph graphData={newGraph} />
      </div>
    </div>
  );
};

export default Stats;
