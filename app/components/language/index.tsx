import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translation";

export default function HomePage() {
  const { locale, setLocale } = useLanguage();
  // @ts-ignore
  const t = translations[locale];
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: "en", label: "English" },
    { value: "ar", label: "العربية" }
  ];

  const selectedOption = options.find(option => option.value === locale);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      //@ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: any) => {
    setLocale(value);
    setIsOpen(false);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative z-50 text-white mr-[4rem] text-[1.5rem] mt-2 lg:mt-0 lg:text-[1rem] lg:-mr-[2rem]">
      <div ref={dropdownRef} className="relative">
        {/* Custom Select Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          className="bg-transparent text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between min-w-[120px] cursor-pointer hover:bg-white/10 transition-colors"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{selectedOption?.label}</span>
          <svg
            className={`w-4 h-4  transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Custom Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-10">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`w-full text-left px-3 py-2 text-black hover:bg-gray-100 transition-colors ${
                  locale === option.value ? "bg-blue-50 text-blue-600" : ""
                }`}
                role="option"
                aria-selected={locale === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}