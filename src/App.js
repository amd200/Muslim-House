import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
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
import RiwayatsPage from "./pages/RiwayatsPage";
import Sidebar from "./Components/Sidebar/Sidebar";
import Hearing from "./pages/Hearing";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [audio, setAudio] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [enableAudioAzan, setEnableAudioAzan] = useState(false);

  return (
    <BrowserRouter>
      <Analytics />
      <Navbar isMenuOpen={isMenuOpen} audio={audio} isAudioPlaying={isAudioPlaying} setIsAudioPlaying={setIsAudioPlaying} setAudio={setAudio} setIsMenuOpen={setIsMenuOpen} />
      <Sidebar setEnableAudioAzan={setEnableAudioAzan} enableAudioAzan={enableAudioAzan} isMenuOpen={isMenuOpen} setIsAudioPlaying={setIsAudioPlaying} setIsMenuOpen={setIsMenuOpen} setAudio={setAudio} />
      <Routes>
        <Route path="/" element={<Home enableAudioAzan={enableAudioAzan} />}></Route>
        <Route path="/Reciters" element={<Reciters />}></Route>
        <Route path="/Hearing/:surahId" element={<Hearing />}></Route>
        <Route path="/quran/:recitersId/" element={<RiwayatsPage />}></Route>
        <Route path="/quran/:recitersId/:riwayatId" element={<QuranPage />}></Route>
        <Route path="/quran/:recitersId/:riwayatId/:surahId" element={<Read />}></Route>
        <Route path="/AzkarMornig" element={<AzkarMornig />}></Route>
        <Route path="/AzkarEvening" element={<AzkarEvening />}></Route>
        <Route path="/AudioPage" element={<AudioPage />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
