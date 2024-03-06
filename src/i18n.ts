import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        Nickname: "Nickname",
        Avatar: "Avatar",
        Codex: "Codex",
        GenerateNickname: "Generate Nickname",
        GenerateAvatar: "Generate Avatar",
        SuggestGhoulContent: "Suggest Nickname/Avatar",
      },
    },
    ru: {
      translation: {
        Nickname: "Никнейм",
        Avatar: "Аватар",
        Codex: "Кодекс",
        GenerateNickname: "Сгенерировать Никнейм",
        GenerateAvatar: "Сгенерировать Аватар",
        SuggestGhoulContent: "Предложить Никнейм/Аватар",
      },
    },
  },
});

export default i18n;
