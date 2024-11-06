import React from "react";
import TitleSection from "./TitleSection";
import { NavLink } from "react-router-dom";

function AzkarSection() {
  return (
    <div className="azkar-section">
      <TitleSection name={"الأذكار"} />
      <div className="row">
        <div className="col-12 mb-3 col-lg-4">
          <NavLink
            to="/AzkarMornig"
            className="card p-2 morning"
            style={{
              backgroundImage: "url(https://cdn.pixabay.com/photo/2022/10/07/12/02/sunset-7504891_960_720.jpg)",
            }}
          >
            <div className="card-body me-auto">
              <p className="card-title h3">أذكار الصباح</p>
            </div>
          </NavLink>
        </div>

        <div className="col-12 mb-3 col-lg-4">
          <NavLink
            to="/AzkarEvening"
            className="card p-2 evening"
            style={{
              backgroundImage: "url(https://media.istockphoto.com/id/1666056470/photo/night-sky-with-full-moon.jpg?s=2048x2048&w=is&k=20&c=WtrdjUv5cDZc2-iPMigh1wd8xV6KTfdJVNrvih7gw2Q=)",
            }}
          >
            <div className="card-body me-auto">
              <p className="card-title h3">أذكار المساء</p>
            </div>
          </NavLink>
        </div>
        <div className="col-12 mb-3 col-lg-4">
          <NavLink
            to="#"
            className="card p-2 roqia"
            style={{
              backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCqy6VVM7BCQxOfvcgHvfJEK4g8nhdmiHfw&s)",
            }}
          >
            <div className="card-body me-auto">
              <p className="card-title h3">الرقية الشرعية</p>
            </div>
          </NavLink>
        </div>
      </div>
      {/* <p className="text-center info mt-3">لا تنسَ الدعاء لي بظهر الغيب.</p> */}
      <p className="text-center info mt-3" style={{ color: "var(--color-text-primary)" }}>
        تم تطوير هذا الموقع بواسطة
        <NavLink style={{ color: "var(--color-primary)"  }} className={"ms-1"} to={"https://www.facebook.com/ahmed.elhosseni.71"}>
          Ahmed Mohamed
        </NavLink>
      </p>
    </div>
  );
}

export default AzkarSection;
