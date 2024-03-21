import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
function Audio({ src }) {
  return (
    <AudioPlayer
      src={src}
      layout=""
      className="audio-surah"
      onPlay={(e) => console.log("onPlay")}
      style={{ direction: "ltr" }}
    />
  );
}

export default Audio;
