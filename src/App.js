import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Utils/Navbar/Navbar";
import Read from "./pages/Read";
import AzkarMornig from "./pages/AzkarMorning";
import AzkarEvening from "./pages/AzkarEvening";
import Footer from "./Components/Utils/Footer/Footer";
import Reciters from "./pages/RecitersPage";
import AudioPage from "./pages/AudioPage";
import QuranPage from "./pages/QuranPage";
import Stories from "./pages/Stories";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quran/:recitersId" element={<QuranPage />}></Route>
        <Route path="/quran/:recitersId/:surahId" element={<Read />}></Route>
        <Route path="/AzkarMornig" element={<AzkarMornig />}></Route>
        <Route path="/AzkarEvening" element={<AzkarEvening />}></Route>
        <Route path="/Reciters" element={<Reciters />}></Route>
        <Route path="/AudioPage" element={<AudioPage />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
