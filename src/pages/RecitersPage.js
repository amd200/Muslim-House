import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Utils/Card/Card";
import { getAllReciters } from "../redux/actions/MuslimAction";

function RecitersPage() {
  const dispatch = useDispatch();
  const reciters = useSelector((state) => state.reciters.reciters);
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(getAllReciters());
  }, [dispatch]);

  return (
    <div className="content">
      <div className="container mt-4">
        <div className="row justify-content-center" id="reciters">
          {loading === false ? (
            reciters && reciters.length >= 1 ? (
              reciters.map((item, i) => <Card key={i} dataReciters={item} index={i} />)
            ) : (
              <h4>لا يوجد قراء</h4>
            )
          ) : (
            <div class="spinner-border text-success my-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecitersPage;
