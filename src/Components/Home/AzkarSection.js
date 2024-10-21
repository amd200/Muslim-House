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
              backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/772/265/137/2d-flat-nature-mountain-top-hd-wallpaper-preview.jpg)",
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
              backgroundImage: "url(https://e1.pxfuel.com/desktop-wallpaper/351/721/desktop-wallpaper-flat-2d.jpg)",
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
              backgroundImage: "url(https://static5.depositphotos.com/1000875/537/v/450/depositphotos_5373161-stock-illustration-rain-vector-image-with-dark.jpg)",
            }}
          >
            <div className="card-body me-auto">
              <p className="card-title h3">الرقية الشرعية</p>
            </div>
          </NavLink>
        </div>
      </div>
      {/* <p className="text-center info mt-3">لا تنسَ الدعاء لي بظهر الغيب.</p> */}
      <p className="text-center info mt-3">
        تم تطوير هذا الموقع بواسطة <NavLink style={{ color: "var(--color-primary)" }} to={"https://www.facebook.com/ahmed.elhosseni.71"}>Ahmed Mohamed</NavLink>
      </p>
    </div>
  );
}

export default AzkarSection;
