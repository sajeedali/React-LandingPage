import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUS";
import "./App.css";

export default function App() {
  return (
    <div className="body-wrap">
      <Layout>
        <Routes>
          <Route path="AboutUs" Component={AboutUs} />
          <Route path="/ContactUs" Component={ContactUs} />
          <Route path="/" Component={Home} />
        </Routes>
      </Layout>
    </div>
  );
}
