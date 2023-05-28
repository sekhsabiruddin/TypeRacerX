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
    setTestTime(20);
  }, []);
  return (
    <div className="upper-menu">
      <div className="counter">{countDown}</div>
      <div className="modes">
        <div className="time-mode" id={20} onClick={updateTime}>
          20s
        </div>
        <div className="time-mode" id={40} onClick={updateTime}>
          40s
        </div>
        <div className="time-mode" id={60} onClick={updateTime}>
          60s
        </div>
      </div>
    </div>
  );
};
export default UpperMenu;
