import {  useState } from "react";
import { Link, NavLink } from "react-router-dom";
import pdf from "../../../assets/مخطط الصلاة.pdf"
const Header = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4">
      <div className="container py-2">
        <Link to="/" className="navbar-brand logo">
          مسلم
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav pt-lg-0 pt-2 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                بيت المُسلم
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <li className="nav-item dropdown">
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle p-0"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    الأذكار
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="mb-2 py-2">
                      <NavLink className="dropdown-item" to="/AzkarMornig">
                        أذكار الصباح
                      </NavLink>
                    </li>
                    <li className="mb-2 py-2">
                      <NavLink className="dropdown-item" to="/AzkarEvening">
                        أذكار المساء
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </li>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/stories">
                قصص الإسلام
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Reciters">
                القرأن
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={pdf} download={true}>
                مخطط الصلاة
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#" onClick={toggleAudio}>
                {isAudioPlaying ? "إيقاف الإذاعة" : "تشغيل الإذاعة"}
                <span
                  className={`point ms-2 ${isAudioPlaying ? "active" : ""}`}
                ></span>
              </NavLink>
              {isAudioPlaying && (
                <audio
                  // src="https://qurango.net/radio/salma"
                  src="https://qurango.net/radio/tarateel"
                  controls
                  autoPlay
                  className="position-absolute invisible"
                ></audio>
              )}
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item" id="dark">
              <NavLink className="nav-link" to="#">
                الوضع الداكن
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
