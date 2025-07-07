import Link from "@/app/ui/link";

const Header = () => {
  return (
    <header className="flex items-center p-4 lg:py-[1.72rem] lg:px-[4.5rem] font-outfit font-light fixed top-0 right-0 left-0 z-100">
      <a href="/" className="mr-auto">
        <img src="/icons/logo.svg" srcSet="/icons/logo-mobile.svg 179w, /icons/logo.svg 239w" sizes="(max-width: 768px) 178px, 239px" alt="allevent" />
      </a>
      <img src="/icons/burger-icon.svg" alt="menu" className="lg:hidden"/>
      <nav className="hidden lg:block">
        <ul className="flex items-center text-white">
            <li className="mx-[1.8rem]">
                <a href="/services"> Services </a>
            </li>
            <li className="mx-[1.8rem]">
                <Link color="white" text="Let's talk" href="/contact"/>
            </li>
            <li className="mr-3 ml-[1.8rem]">
                <a href="https://instagram.com">
                    <img src="/icons/instagram.svg" alt="instagram" />
                </a>
            </li>
            <li className="mx-3">
                <a href="https://linkedin.com">
                    <img src="/icons/linkedin.svg" alt="instagram" />
                </a>
            </li>
            <li className="ml-3">
                <a href="https://instagram.com">
                    <img src="/icons/whatsapp.svg" alt="instagram" />
                </a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
