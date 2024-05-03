import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top mt-3">
      <div className="container p-3 pt-5">
        <div className="row">
          <div className="col-lg-3">
            <p className="save">
              لا يوجد حقوق على أي مادة مستخدمة في الموقع، يمكنك إعادة استخدامها
              كما تشاء بدون الرجوع إلينا.
            </p>
          </div>

          <div className="col-lg-3 text-center">
            <div className="list">
              <h5 className="title-footer">الأذكار</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/AzkarMornig"
                    className="nav-link  m-0 pb-0"
                  >
                    أذكار الصباح
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/AzkarEvening"
                    className="nav-link  m-0 pb-0 "
                  >
                    أذكار المساء
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="#" className="nav-link  m-0 pb-0">
                    اذكار اخري وادعية اخري
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="#" className="nav-link  m-0 ">
                    الرقية الشرعية
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="list">
              <h5 className="title-footer">الصفحات الرئيسية</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link  m-0 pb-0">
                    الصفحة الرئيسية
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Reciters" className="nav-link  m-0 ">
                    القرأن
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 text-center">
            <div className="list">
              <h5 className="title-footer">قد يهمك</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="#" className="nav-link  m-0 pb-0">
                    إبلاغ عن مشكلة او إضافة تحديث
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
