const WRC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-yellow-100 to-gold/60 w-full h-full p-10 rounded-xl">
      <div className="h-full w-full flex md:flex-row gap-3 flex-col-reverse justify-between items-center md:px-5 px-0">
        <div className="md:w-3/5 w-full h-full align-top flex flex-col justify-start items-start ms-0">
          <h1 className="mt-5 font-bold text-lg md:mb-10 mb-4">
            Why Right Care?
          </h1>
          <h1 className="text-sm text-gray-600 pt-2 md:mb-5 md:w-[91%] text-left">
            Right Care for Home Nursing provides a new method of caring, more in
            tune with our natural desire to k continue residing in our own home
            for as long as possible and feel safer in the process. In doing so,
            consideration was given not only to the skills and experience
            required by our team of nurses, but more importantly to the personal
            attributes that they possess to make sure those we care for feel
            more at ease
          </h1>
          <h1 className="text-sm text-gray-600 text-left pt-2 md:w-[90%]">
            By hiring a nurse from Right Care for Home Nursing, you can avoid
            the need for further on-going visits to the hospital and clinic.
            Furthermore, it`s quite likely that the treatments will be more
            effective as you will be in a more relaxed state whilst receiving
            them.
          </h1>
        </div>

        <div className="w-full md:w-2/5">
          <img
            className="inset-0 w-full h-full object-cover object-center rounded-xl"
            src="\retouched81.jpg"
            alt="Ad- woman on a beach"
          />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default WRC;
