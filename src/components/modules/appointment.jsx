import { Select, SelectItem } from "@nextui-org/react";
import { HeroContent } from "../../constants";


const Appointment = () => {
  return (
    <>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
          <div className="py-6 md:py-0 md:px-6">
            <img src="/retouched65.jpg" className="rounded-2xl" alt="" />
          </div>
          <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <div className="font-semibold font-montserrat text-gray-800">Book An Appointment</div>
            <div className="flex flex-col">
              <div className="flex-grow">
                <input
                  placeholder="Name"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default  focus:outline-none"
                />
              </div>
              <div className="flex-grow mt-4">
                <input
                  placeholder="Phone Number"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default  focus:outline-none"
                />
              </div>
              <div className="flex-grow mt-4">
                <input
                  placeholder="Email"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default  focus:outline-none"
                />
              </div>
              <div className="flex w-full gap-4">
                <Select
                  label="Service of chioce"
                  size="sm"
                  color="default"
                  className="mt-4 p-0"
                >
                  {HeroContent.map((animal,id) => (
                    <SelectItem className="px-4 py-2.5 mt-2 text-base rounded-lg w-full text-black" key={id} value={animal.title}>
                      {animal.title}
                    </SelectItem>
                  ))}
                </Select>
              </div>

            </div>
            <button
              type="button"
              className="text-center w-fit bg-[#eec373] py-3 px-5 text-white text-sm font-semibold font-montserrat rounded-full "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Appointment;
