

import { Select, SelectItem } from "@nextui-org/react";

const dropDownData = [
  {

    label: "Cat", value: "cat", description: "The second most popular pet in the world"
  },
  { label: "Dog", value: "dog", description: "The most popular pet in the world" },
  { label: "Elephant", value: "elephant", description: "The largest land animal" },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  { label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds" },
  { label: "Zebra", value: "zebra", description: "A several species of African equids" },

]

const Appointment = () => {
  return (
    <>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <img src="/retouched65.jpg" className="rounded-2xl" alt="" />
          </div>
          <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            {/* <label className="block">
              <span className="mb-1">Full name</span>
              <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
            </label> */}
            <div className="flex flex-col">
              <div className="flex-grow">
                <input
                  placeholder="PLZ"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default  focus:outline-none"
                />
              </div>
              <div className="flex-grow">
                <input
                  placeholder="City"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default  focus:outline-none"
                />
              </div>
              <div className="flex-grow">
                <input
                  placeholder="City"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg bg-default  focus:outline-none"
                />
              </div>
              <div className="flex w-full gap-4">
                <Select
                  label="Select an animal"
                  size="sm"
                  color="default"
                  className="mt-2 p-0"
                >
                  {dropDownData.map((animal) => (
                    <SelectItem className="px-4 py-2.5 mt-2 text-base rounded-lg w-full text-black" key={animal.value} value={animal.value}>
                      {animal.label}
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
