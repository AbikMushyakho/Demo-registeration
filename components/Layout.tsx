import type AppProps from "next/app";
import Header from "./Header";

const Layout = (props:any): JSX.Element => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
