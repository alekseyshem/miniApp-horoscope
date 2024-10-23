import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Sign.css";

const Sign = () => {
  const navigate = useNavigate();
  const { sign } = useParams();
  const [data, setData] = useState({
    description: "ЗДЕСЬ ДОЛЖНО БЫТЬ ОПИСАНИЕ",
  });

  // если бы фетч работал, было бы так:
  // useEffect(() => {
  //   fetch("https://poker247tech.ru/get_horoscope/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ sign, language: "original", period: "today" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, [sign]);

  return (
    <div className="sign">
      <h1 className="sign__name">{sign}</h1>
      <p className="sign__description">{data.description}</p>
      <button className="sign__button" onClick={() => navigate("/")}>
        GO BACK
      </button>
    </div>
  );
};

export default Sign;
