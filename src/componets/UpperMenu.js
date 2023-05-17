import { useEffect } from "react";
import { useTestMode } from "../Context/TextModeContext";
const UpperMenu = ({ countDown }) => {
  //this i did call the custom Hooks which is created ../context/TestMode
  //then destructing object from  custom hooks UseTestMode() hooks

  const { setTestTime } = useTestMode();

  const updateTime = (e) => {
    //number is convert string to number
    setTestTime(Number(e.target.id));
  };
  useEffect(() => {
    setTestTime(5);
  }, []);
  return (
    <div className="upper-menu">
      <div className="counter">{countDown}</div>
      <div className="modes">
        <div className="time-mode" id={15} onClick={updateTime}>
          15s
        </div>
        <div className="time-mode" id={30} onClick={updateTime}>
          30s
        </div>
        <div className="time-mode" id={60} onClick={updateTime}>
          60s
        </div>
      </div>
    </div>
  );
};
export default UpperMenu;
