import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center text-center justify-center my-8">
        <a
          href="/"
          className="text-2xl font-semibold flex items-center justify-center space-x-3 text-white hover:underline hover:text-blue-400"
        >
          {t("SuggestGhoulContent")}
        </a>
      </div>
    </div>
  );
}

export default Footer;
