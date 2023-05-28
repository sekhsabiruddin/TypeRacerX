import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaPalette } from "react-icons/fa";
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";

const ColorBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isColorSelect, setisColorSelect] = useState(false);
  const modalRef = useRef(null);

  const { setTheme } = useTheme();

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    console.log("close is clicked");
  }, []);
  //it handle when user click the color select option start here
  const handleMouseEnter = useCallback(
    (event) => {
      const target = event.currentTarget;
      const background = getComputedStyle(
        target.querySelector(".background-color")
      ).backgroundColor;
      const textColor = getComputedStyle(
        target.querySelector(".text-color")
      ).backgroundColor;
      const typeBoxText = getComputedStyle(
        target.querySelector(".type-box-text")
      ).backgroundColor;

      console.log(background, " --> ", textColor, " --->", typeBoxText);

      setTheme({ background, textColor, typeBoxText });
    },
    [setTheme]
  );
  //it handle when user click the color select option end here
  //it handle when user hover the color select option start here
  const handleMouseClick = useCallback(
    (event) => {
      const target = event.currentTarget;
      const background = getComputedStyle(
        target.querySelector(".background-color")
      ).backgroundColor;
      const textColor = getComputedStyle(
        target.querySelector(".text-color")
      ).backgroundColor;
      const typeBoxText = getComputedStyle(
        target.querySelector(".type-box-text")
      ).backgroundColor;

      const theme = { background, textColor, typeBoxText };
      localStorage.setItem("theme", JSON.stringify(theme));
      setisColorSelect(true);
    },
    [setTheme]
  );
  //it handle when user hover the color select option end here
  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [closeModal]);

  const handleModalClose = useCallback(() => {
    closeModal();
  }, []);

  return (
    <div>
      <FaPalette
        className="custom-icon"
        style={{ cursor: "pointer" }}
        onClick={openModal}
      />
      {isModalOpen && (
        <div className="modal">
          <div
            className="modal-content"
            ref={modalRef}
            onClick={handleModalClose}
          >
            {themeOptions.map((data) => (
              <div
                key={data.label}
                className="color-item"
                onMouseEnter={handleMouseEnter}
                onClick={handleMouseClick}
              >
                {data.label && <span>{data.label}</span>}
                <div className="inner-color-box">
                  <span
                    className="color-effect background-color"
                    style={{ backgroundColor: data.value.background }}
                  ></span>
                  <span
                    className="color-effect text-color"
                    style={{ backgroundColor: data.value.textColor }}
                  ></span>
                  <span
                    className="color-effect type-box-text"
                    style={{ backgroundColor: data.value.typeBoxText }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorBox;
