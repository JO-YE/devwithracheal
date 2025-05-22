import { Footer } from "../components/Footer";
import { Hero } from "../components/Header";
import { Navbar } from '../components/Navbar';



export const Home = () => {
    return <div className=" flex flex-col min-h-screen ">
        <main className="flex-grow">
            <Navbar />
            <Hero/>
        </main>
        

      
      <Footer/>
    </div>
};