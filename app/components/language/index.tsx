import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translation";

export default function HomePage() {
  const { locale, setLocale } = useLanguage();
  // @ts-ignore
  const t = translations[locale];

  return (
    <div className="relative z-50 text-white mr-[4rem] text-[1.5rem] mt-2 lg:mt-0 lg:text-[1rem] lg:-mr-[2rem]">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
      >
        <option className="bg-gray-800 text-white" value="en">
          English
        </option>
        <option className="bg-gray-800 text-white" value="ar">
          العربية
        </option>
      </select>
    </div>
  );
}
