import Welcome from "@/components/sections/Welcome";
import About from "@/components/sections/About";
import Product from "@/components/sections/Product";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <div>
            <Welcome/>
            <About/>
            <Product/>
            <Contact/>
            <Footer/>
        </div>
    );
}
