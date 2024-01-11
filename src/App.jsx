import WRC from "./components/modules/WRC"
import Appointment from "./components/modules/appointment"
import Hero from "./components/modules/hero"
import Testimonial from "./components/modules/testimonial"
import Footer from "./components/wrapper/footer"
import Navbar from "./components/wrapper/navbar"


const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className="flex justify-center items-center sm:px-16 px-6">
                <div className="xl:max-w-[1280px] w-full px-10">
                    <Navbar />
                </div>
            </div>
            <div className="flex justify-center items-center w-full bg-slate-600 py-10">
                <div className="xl:max-w-[1280px] w-[80%] ">
                    <Hero />
                </div>
            </div>
            <div className="bg-primary flex justify-center items-start  sm:px-16 px-6">
                <div className="xl:max-w-[1280px] w-full">
                    <Appointment />
                    <WRC />
                    <Testimonial />
                    <Footer />  
                </div>
            </div>
        </div>
    )
}

export default App

