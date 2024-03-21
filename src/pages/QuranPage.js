import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Components/Utils/Card/Card";
import { getAllSurah } from "../redux/actions/MuslimAction";

function QuranPage() {
  const dispatch = useDispatch();
  const AllSurah = useSelector((state) => state.AllSurah);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getAllSurah());
  }, [dispatch]);

  return (
    <div className="content">
      <div className="container mt-4">
        <div className="row justify-content-center" id="surahs">
          {loading == false ? (
            AllSurah ? (
              AllSurah.map((item, i) => <Card key={i} dataAllSurah={item} />)
            ) : (
              <h4>لا يوجدد قراء</h4>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default QuranPage;
