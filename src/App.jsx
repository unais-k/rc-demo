import WRC from "./components/modules/WRC";
import Appointment from "./components/modules/appointment";
import Hero from "./components/modules/hero";
import Testimonial from "./components/modules/testimonial";
import Footer from "./components/wrapper/footer";
import Navbar from "./components/wrapper/navbar";

const App = () => {
  return (
    <div className="w-full overflow-hidden font-montserrat bg-white">
      <Navbar />
      <div className="flex justify-center items-center w-full bg-slate-600 py-10">
        <div className="lg:max-w-[1480px] w-[80%] ">
          <Hero />
        </div>
      </div>
      <div className="flex justify-center items-start  md:px-8 lg:px-16 px-6">
        <div className="xl:max-w-[1480px] w-full">
          <Appointment />
          <WRC />
          <Testimonial />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
