import { useState } from "react";
import banner from "../assets/banner.png";
// import Banner from "../shared/Banner";
import nicknames_array from "../data/nicknames.json";
import quotes_array from "../data/quotes.json";
import { useTranslation } from "react-i18next";

function GetRandomNickname(): string {
  return nicknames_array.nicknames[
    Math.floor(Math.random() * nicknames_array.nicknames.length)
  ];
}

function GetRandomQuote(): string {
  return quotes_array.quotes[
    Math.floor(Math.random() * quotes_array.quotes.length)
  ];
}

function Nickname() {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const [newNickname, getNewNickname] = useState("Мама");
  const [newQuote, getNewQuote] = useState("я уебище");
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 " id="nickname">
      <div className="gradientBg rounded-xl md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Banner content */}
          {/* <div className="md:w-3/5 "> */}
          <div className="grid justify-items-center">
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed text-center">
              {newNickname}
            </h2>
            <p className="text-[#EBEBEB] text-2xl mb-8 text-center">
              {newQuote}
            </p>
            <div className="space-x-5 space-y-4">
              <button
                className="btnPrimary"
                onClick={() => {
                  getNewNickname((newNickname) => GetRandomNickname());
                  getNewQuote((newQuote) => GetRandomQuote());
                }}
              >
                {t("GenerateNickname")}
              </button>
            </div>
          </div>
          {/* Banner Image */}
          {/* <div>
            <img src={banner} alt="" className="lg:h-[386px]"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Nickname;
