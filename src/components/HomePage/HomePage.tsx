import { Link } from "react-router-dom";
import "./HomePage.css";
import { useInitData } from "@telegram-apps/sdk-react";
import Aquarius from "../../../assets/astrology_icons/Aquarius.svg";
import Aries from "../../../assets/astrology_icons/Aries.svg";
import Taurus from "../../../assets/astrology_icons/Taurus.svg";
import Gemini from "../../../assets/astrology_icons/Gemini.svg";
import Cancer from "../../../assets/astrology_icons/Cancer.svg";
import Leo from "../../../assets/astrology_icons/Leo.svg";
import Virgo from "../../../assets/astrology_icons/Virgo.svg";
import Libra from "../../../assets/astrology_icons/Libra.svg";
import Scorpio from "../../../assets/astrology_icons/Scorpio.svg";
import Sagittarius from "../../../assets/astrology_icons/Sagittarius.svg";
import Capricorn from "../../../assets/astrology_icons/Capricorn.svg";
import Pisces from "../../../assets/astrology_icons/Pisces.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {t, i18n} = useTranslation("translation");
  const signs = [
    { sign: t("Aries"), date: "21.03 - 20.04", img: Aries, description: "" },
    { sign: t("Taurus"), date: "21.04 - 20.05", img: Taurus, description: "" },
    { sign: t("Gemini"), date: "21.05 - 20.06", img: Gemini, description: "" },
    { sign: t("Cancer"), date: "21.06 - 22.07", img: Cancer, description: "" },
    { sign: t("Leo"), date: "23.07 - 22.08", img: Leo, description: "" },
    { sign: t("Virgo"), date: "23.08 - 22.09", img: Virgo, description: "" },
    { sign: t("Libra"), date: "23.09 - 22.10", img: Libra, description: "" },
    { sign: t("Scorpio"), date: "23.10 - 22.11", img: Scorpio, description: "" },
    {
      sign: t("Sagittarius"),
      date: "23.11 - 21.12",
      img: Sagittarius,
      description: "",
    },
    { sign: t("Capricorn"), date: "22.12 - 19.01", img: Capricorn, description: "" },
    { sign: t("Aquarius"), date: "20.01 - 19.02", img: Aquarius, description: "" },
    { sign: t("Pisces"), date: "20.02 - 20.03", img: Pisces, description: "" },
  ];
  const initData = useInitData();
  const [language, setLanguage] = useState(
    initData?.user?.languageCode || "ru"
  );
  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  console.log(language);
  return (
    <div className="homepage">
      <select
        className="homepage__select"
        onChange={(e) => {
          setLanguage(e.target.value);
          handleChangeLanguage(e.target.value);
        }}
        defaultValue={language}
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
      <div className="homepage__container">
        {signs.map((x) => (
          <Link key={x.sign} to={`/${x.sign}`} className="homepage__sign">
            <li className="homepage__sign-item">
              <div>{x.sign}</div>
              <img src={x.img}></img>
              <div>{x.date}</div>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
