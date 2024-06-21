import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Audio({ src }) {
  return (
    <AudioPlayer
      src={src}
      autoPlay={false} // هنا تم تعيين خاصية autoPlay إلى false
      layout=""
      className="audio-surah"
      style={{ direction: "ltr" }}
    />
  );
}

export default Audio;
