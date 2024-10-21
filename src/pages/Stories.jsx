import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { youtube } from "../redux/actions/MuslimAction";

function Stories() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.youtube);
  const loading = useSelector((state) => state.loading);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [nameVideo, setNameVideo] = useState("");

  useEffect(() => {
    dispatch(youtube());
    console.log(loading);
  }, [dispatch, loading]);

  // تعيين رابط الفيديو الحالي عند النقر على الفيديو
  const handleVideoClick = (videoId) => {
    setCurrentVideo(videoId);
    setNameVideo(videos.find((video) => video.snippet.resourceId.videoId === videoId).snippet.title);

  };

  return (
    <div className="stories">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="video-list position-relative">
              {loading === false && videos.length >= 1
                ? videos.map((video, index) => (
                  <div
                    className="video"
                    key={index}
                    onClick={() =>
                      handleVideoClick(video.snippet.resourceId.videoId)
                    } // تعيين رابط الفيديو عند النقر
                  >
                    <img
                      src={video.snippet.thumbnails.default.url}
                      alt={video.snippet.title}
                    />
                    <h3 className="title">{video.snippet.title}</h3>
                  </div>
                ))
                : <div class="spinner-border text-success my-5 position-absolute top-50 start-50 translate-middle" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>}
            </div>
          </div>
          <div className="col-lg-8">
            {currentVideo && (
              <>
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <h5 className="mt-2">{nameVideo}</h5>
              </>

            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
