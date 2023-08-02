function StudentSection() {
  return (
    <div
      className="h-auto w-100 flex flex-wrap 
    flex-col items-center text-center p-10 bg-slate-900"
    >
      <div
        className="w-full h-auto flex flex-wrap 
        flex-col items-center"
      >
        <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">
          "Pure Hardwork, No ShortCuts!"
        </p>
        <div
          className="w-36 h-1 border-b-4 border-yellow-400
         mt-2 rounded-2xl md:mt-4 mb-12"
        ></div>
        <div className="w-full flex flex-wrap justify-evenly">
          <div className="w-46 flex flex-col items-center ">
            <img
              className="w-[120px] h-[120px]"
              src="https://freeiconshop.com/wp-content/uploads/edd/book-flat.png"
              alt="image"
            />
            <p className="text-3xl font-bold text-white">600+</p>
            <p className="text-3xl font-bold text-gray-500">Different Coures</p>
          </div>
          <div className="w-46 flex flex-col items-center ">
            <img
              className="w-[120px] h-[120px]"
              src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png"
              alt="image"
            />
            <p className="text-3xl font-bold text-white">700,000+</p>
            <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
          </div>
          <div className="w-46 flex flex-col items-center ">
            <img
              className="w-[110px] h-[120px] rounded-md"
              src="https://freeiconshop.com/wp-content/uploads/edd/imac-outline-filled.png"
              alt="image"
            />
            <p className="text-3xl font-bold text-white">10,000+</p>
            <p className="text-3xl font-bold text-gray-500">Successful Transition</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSection;
