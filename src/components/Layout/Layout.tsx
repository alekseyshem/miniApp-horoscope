import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      {/* <header className="layout__header"></header> */}
      <Outlet />
      {/* <footer className="layout__footer">copyright @ 2024</footer> */}
    </div>
  );
};

export default Layout;
