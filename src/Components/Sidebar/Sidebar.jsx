import React, { useEffect, useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { MdOutlineBrightnessAuto } from "react-icons/md";
import "jquery-nice-select/css/nice-select.css";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { getAllRadios } from "../../redux/actions/MuslimAction";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const Sidebar = ({ isMenuOpen, setIsMenuOpen, setAudio, setIsAudioPlaying }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.radios);
  const loading = useSelector((state) => state.loading);
  const [radios, setRadios] = useState([]);
  const [activeButton, setActiveButton] = useState("");
  const selectRef = useRef();
  const sidebarRef = useRef(null);

  useEffect(() => {
    dispatch(getAllRadios());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0 && loading === false) {
      setRadios(data);
      $(selectRef.current).niceSelect();

      $(selectRef.current).on("change", function () {
        const selectedRadio = $(this).val();
        setAudio(selectedRadio);
        localStorage.setItem("radio", selectedRadio);
      });
    }
  }, [data, loading]);

  const resetSettings = () => {
    setAudio("");
    setIsAudioPlaying(false);
    localStorage.setItem("radio", "");
    localStorage.setItem("theme", "AutoLight");
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.classList.contains("settings")) {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  };

  const toggleWhiteMode = () => {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  };

  const checkDeviceMode = () => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDarkMode === true) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "AutoDark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "AutoLight");
    }
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === "AutoDark";
    if (savedDarkMode) {
      checkDeviceMode();
    } else if (localStorage.getItem("theme") === "AutoLight") {
      document.body.classList.remove("dark");
      checkDeviceMode();
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    if (buttonType === "dark") {
      toggleDarkMode();
    } else if (buttonType === "light") {
      toggleWhiteMode();
    } else if (buttonType === "auto") {
      checkDeviceMode();
    }
  };

  return (
    <div className={`sidebar ${isMenuOpen ? "active" : ""}`} ref={sidebarRef}>
      <div className="header-sidebar d-flex justify-content-between">
        <h3>الاعدادات</h3>
        <IoMdClose onClick={() => closeMenu()} />
      </div>
      <div className="content-sidebar">
        <div className="theme-swticher mb-4">
          <h3 className="">الوضع</h3>
          <div className="swticher rounded-pill py-2 px-1">
            <div className="row">
              <div className="col-4 px-0">
                <div className="theme text-center">
                  <button className={`btn shadow-none border-0 rounded-pill ${activeButton === "auto" || localStorage.getItem("theme") === "AutoLight" || localStorage.getItem("theme") === "AutoDark" ? "active" : ""}`} onClick={() => handleButtonClick("auto")}>
                    تلقائي
                    <MdOutlineBrightnessAuto />
                  </button>
                </div>
              </div>
              <div className="col-4 px-0">
                <div className="theme text-center">
                  <button className={`btn shadow-none border-0 rounded-pill ${activeButton === "light" || localStorage.getItem("theme") === "light" ? "active" : ""}`} onClick={() => handleButtonClick("light")}>
                    فاتح
                    <CiLight />
                  </button>
                </div>
              </div>
              <div className="col-4 px-0">
                <div className="theme text-center">
                  <button className={`btn shadow-none border-0 rounded-pill ${activeButton === "dark" || localStorage.getItem("theme") === "dark" ? "active" : ""}`} onClick={() => handleButtonClick("dark")}>
                    داكن
                    <CiDark />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="note">يعتمد سمة النظام تلقائيًا على إعدادات الوضع الفاتح / الداكن</p>
        </div>
        <div className="raudioSelect mb-4">
          <h3>محطة الاذاعة</h3>
          <select ref={selectRef} className="wide text-start" dir="rtl">
            <option value="" selected>
              اختر محطة
            </option>

            {data && data.length > 0 && loading == false ? (
              data.map((radio, index) => (
                <option key={index} value={radio.url}>
                  {radio.name}
                </option>
              ))
            ) : (
              <option value="">لا توجد بيانات متاحة</option>
            )}
          </select>
        </div>

        <button className="btn btn-bg" onClick={() => resetSettings()}>
          إعادة ضبط الإعدادات
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
