import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = (props) => {
  const { pathname } = useLocation();

  if (pathname === "/") return <div>{props.children}</div>;

  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
