import React from "react";

function Zekr({ azkar, index, handleDecrement }) {
  return (
    <div className="col-12">
      <div className="item rounded bg-white mb-4">
        <p className="text-start m-2 border-bottom pb-3">
          التكرار: {azkar.defaultCount}
        </p>
        <p className="zekr  ">{azkar.zekr}</p>
        <button
          className={`zekr-button ${azkar.count === 0 ? "done" : ""}`}
          disabled={azkar.count === 0}
          onClick={() => handleDecrement(index)}
        >
          التكرارات المتبقية:
          <span className="btnCount">{azkar.count}</span>
        </button>

        <p className="text-end h5 m-2"></p>
      </div>
    </div>
  );
}

export default Zekr;
