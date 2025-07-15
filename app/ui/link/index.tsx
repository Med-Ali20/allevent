import { useLanguage } from "@/app/contexts/LanguageContext";


type Props = {
  href: string;
  color: "white" | "primary" | "black";
  text: string;
  bg?: string;
  className?: string;
};

const Link: React.FC<Props> = ({ href, color, text, bg, className }) => {
  const { locale } = useLanguage();

  return (
    <a href={href} className={`${className} text-[1.6rem] text-${color} lg:text-[1rem] px-[2.5rem] py-[0.75rem] rounded-full ${
        locale === "ar" ? "font-[zain]" : "font-outfit"
      } font-light`} style={{background: bg? bg : '#FF002C'}} >
      {text}
    </a>
  );
};

export default Link
