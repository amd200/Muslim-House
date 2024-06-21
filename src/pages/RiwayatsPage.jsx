import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Utils/Card/Card";
import { getAllRiwayats } from "../redux/actions/MuslimAction";
import { useParams } from "react-router-dom";

function RiwayatsPage() {
  const dispatch = useDispatch();
  const riwayats = useSelector((state) => state.riwayats.reciters);
  const loading = useSelector((state) => state.loading);
  const { recitersId } = useParams();
  const recitersIdInt = parseInt(recitersId);
  useEffect(() => {
    dispatch(getAllRiwayats());
  }, [dispatch]);
  const foundRiwayat = loading === false && riwayats ? riwayats.find(item => item.id === recitersIdInt) : null;
  return (
    <div className="content">
      <div className="container mt-4">
        <div className="row justify-content-center" id="reciters">
          {loading === false && riwayats && riwayats.length >= 1 && foundRiwayat.moshaf.map((item, i) => <Card dataRiwayats={item} />)}
        </div>
      </div>
    </div>
  );
}

export default RiwayatsPage;
