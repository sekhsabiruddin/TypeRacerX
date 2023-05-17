import React, { useState, useRef, useEffect, useMemo, createRef } from "react";
import UpperMenu from "./UpperMenu";
import randomWords from "random-words";
import { useTestMode } from "../Context/TextModeContext";
import Stats from "./Stats";

const TypingBox = () => {
  const { testTime } = useTestMode();
  console.log("tesTime", testTime);
  const [countDwon, setCountDwon] = useState(testTime);
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);

  const [interValId, setIntervalId] = useState(null);
  const inputRef = useRef(null);

  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(0);

  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChar, setIncorrectChars] = useState(0);
  const [extraChars, setextraChars] = useState(0);
  const [missedChars, setMissedChars] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);

  const [graphData, setGraphData] = useState([]);

  const [wordsArray, setWordsArray] = useState(() => {
    return randomWords(50);
  });

  const wordSpanRef = useMemo(() => {
    return Array(wordsArray.length)
      .fill(0)
      .map(() => createRef());
  }, [wordsArray]);
  //================>setTimer start here Function <=================
  const startTimer = () => {
    const intervalId = setInterval(timer, 1000);
    setIntervalId(intervalId);
    function timer() {
      setCountDwon((lastestCountDown) => {
        setCorrectChars((correctChars) => {
          setGraphData((graphData) => {
            return [
              ...graphData,
              testTime - lastestCountDown + 1,
              correctChars / 5 / ((testTime - lastestCountDown + 1) / 60),
            ];
          });
          return correctChars;
        });

        if (lastestCountDown === 1) {
          setTestEnd(true);
          clearInterval(intervalId);
        }
        return lastestCountDown - 1;
      });
    }
  };
  //================>setTimer Ende here Function <=================

  //=================> Reset function start here <===============
  const resetTest = () => {
    clearInterval(interValId);
    setCountDwon(testTime);
    setCurrWordIndex(0);
    setCurrCharIndex(0);
    setTestStart(false);
    setTestEnd(false);
    setWordsArray(randomWords(50));
    resetWordSpanRefClassName();
    focusInput();
  };
  //=======================>Rest End here<=======================
  const resetWordSpanRefClassName = () => {
    wordSpanRef.forEach((ref) => {
      const { current } = ref;
      if (current && current.childNodes.length > 0) {
        Array.from(current.childNodes).forEach((node) => {
          node.className = "";
        });
      }
    });

    if (
      wordSpanRef.length > 0 &&
      wordSpanRef[0].current.childNodes.length > 0
    ) {
      wordSpanRef[0].current.childNodes[0].className = "current";
    }
  };

  const handleUserInput = (e) => {
    const allCurrChars = wordSpanRef[currWordIndex].current.childNodes;
    if (!testStart) {
      startTimer();
      setTestStart(true);
    }
    //<=================space logic start here ===================>
    //it is handle the space means when user
    // type the space it  will handle this logic

    if (e.keyCode === 32) {
      console.log("Space is hitting");
      let correctCharsInword =
        wordSpanRef[currWordIndex].current.querySelectorAll(".correct");
      if (correctCharsInword.length === allCurrChars.length) {
        setCorrectWords(correctWords + 1);
      }

      if (allCurrChars.length <= currCharIndex) {
        //remove cursor from the last place in a word
        allCurrChars[currCharIndex - 1].classList.remove("current-right");
      } else {
        //remove cursor from in between of the word
        allCurrChars[currCharIndex].classList.remove("current");
        setMissedChars(missedChars + (allCurrChars.length - currCharIndex));
      }
      wordSpanRef[currWordIndex + 1].current.childNodes[0].className =
        "current";
      setCurrWordIndex(currWordIndex + 1);
      setCurrCharIndex(0);
      return;
    }
    //<======space heandle logic end here =====>

    //<============= Backspace logic start here============>
    if (e.keyCode === 8) {
      console.log("backspace is hitting");
      if (currCharIndex !== 0) {
        //it is handle the let assume if the cursor
        //is pointing the the word that this will be handle
        if (allCurrChars.length === currCharIndex) {
          allCurrChars[currCharIndex - 1].className = "current";
          setCurrCharIndex(currCharIndex - 1);
          return;
        }
        allCurrChars[currCharIndex].className = "";
        allCurrChars[currCharIndex - 1].className = "current";
        setCurrCharIndex(currCharIndex - 1);
      }
      return;
    }
    //<============= Backspace logic End here============>

    //=========================>user not type Space Start ==================>
    // debugger;

    if (currCharIndex === allCurrChars.length) {
      debugger;
      let newSpan = document.createElement("span");
      newSpan.innerText = e.key;
      newSpan.className = "incorrect extra current-right";
      allCurrChars[currCharIndex - 1].classList.remove("current-right");
      wordSpanRef[currCharIndex].current.append(newSpan);
      setCurrCharIndex(currCharIndex + 1);
      setextraChars(extraChars + 1);
      return;
    }
    //=========================>user not type Space end ==================>

    //<=============userinput and Display the paragraph corrct or not=============>
    //Note:- here i am checking whatever value typing user then
    //i am cheking adding new class if correct then add green color oherwise red color

    if (e.key === allCurrChars[currCharIndex].innerText) {
      allCurrChars[currCharIndex].className = "correct";
      setCorrectChars(correctChars + 1);
    } else {
      allCurrChars[currCharIndex].className = "incorrect";
      setIncorrectChars(incorrectChar + 1);
    }
    //<=============End here userinput and Display the paragraph corrct or not=============>

    if (currCharIndex + 1 === allCurrChars.length) {
      allCurrChars[currCharIndex].className += " current-right";
    } else {
      allCurrChars[currCharIndex + 1].className = "current";
    }

    setCurrCharIndex(currCharIndex + 1);
  };

  //=============>calculate watch per minitues<=================
  const calculateWPM = () => {
    return Math.round(correctChars / 5 / (testTime / 60));
  };
  const calculateAcc = () => {
    return Math.round((correctWords / currWordIndex) * 100);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    // setCountDwon(testTime);
    resetTest();
  }, [testTime]);

  useEffect(() => {
    focusInput();
    if (
      wordSpanRef[0].current &&
      wordSpanRef[0].current.childNodes.length > 0
    ) {
      wordSpanRef[0].current.childNodes[0].className = "current";
    }
  }, []);

  return (
    <div>
      <UpperMenu countDown={countDwon} />
      {testEnd ? (
        <Stats
          wpm={calculateWPM()}
          accuracy={calculateAcc()}
          correctChars={correctChars}
          incorrectChar={incorrectChar}
          missedChars={missedChars}
          extraChars={extraChars}
          graphData={graphData}
        />
      ) : (
        <div className="type-box" onClick={focusInput}>
          <div className="words">
            {wordsArray.map((word, index) => (
              <span className="word" ref={wordSpanRef[index]} key={index}>
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex}>{char}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      )}
      <input
        type="text"
        className="hidden-input"
        ref={inputRef}
        onKeyDown={handleUserInput}
      />
    </div>
  );
};

export default TypingBox;
