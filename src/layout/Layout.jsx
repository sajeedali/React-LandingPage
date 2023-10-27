import Footer from "../components/navigations/Footer";
import Navbar from "../components/navigations/Navbar";
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="main-content">{props.children}</main>
      <Footer />
    </>
  );
}
