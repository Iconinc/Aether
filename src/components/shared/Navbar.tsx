import Link from "next/link";

const menuItems = ["About", "Services", "Product", "Contact Us"];

const Navbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full flex justify-center py-4 z-20">
            <ul className="bg-slate-50 flex rounded-full border-2 border-white p-1 shadow shadow-indigo-200 text-slate-500 font-medium">
                {menuItems.map((item, index) => (
                    <Link
                        href={`#${item}`}
                        key={item}
                        className={`px-8 py-5 text-sm cursor-pointer duration-100 hover:px-10 hover:bg-white hover:text-slate-800 hover:rounded-full
                        ${index === 0 ? "rounded-l-full pl-12" : ""}
                        ${index === menuItems.length - 1 ? "rounded-r-full pr-12" : ""}
                        ${index > 0 && index < menuItems.length - 1 ? "" : ""}
                    `}
                    >
                        {item}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;