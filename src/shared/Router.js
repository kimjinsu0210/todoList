import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage";
import DetailPage from "../components/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
