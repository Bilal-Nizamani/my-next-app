function ProductSection() {
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
          Our Products
        </p>
        <div
          className="w-36 h-1 border-b-4 border-yellow-400
         mt-2 rounded-2xl md:mt-4 mb-12"
        ></div>

        <div className="w-[90%] h-auto flex flex-wrap  justify-around">
          <div
            className="w-60 flex flex-col items-center mb-12
           border-white border-2 rounded-xl p-2"
          >
            <img
              className="w-[144px] h-[144px]"
              src="https://freeiconshop.com/wp-content/uploads/edd/book-flat.png"
              alt=""
            />
            <p className="text-3xl font-bold text-white">PW Skills lab</p>
            <p className="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div
            className="w-60 flex flex-col items-center mb-12
          p-2"
          >
            <img
              className="w-[144px] h-[144px]"
              src="https://img.icons8.com/?size=512&id=64339&format=png"
              alt=""
            />
            <p className="text-3xl font-bold text-white">PW Skills lab</p>
            <p className="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div
            className="w-60 flex flex-col items-center mb-12
           p-2"
          >
            <img
              className="w-[144px] h-[144px]"
              src="https://img.icons8.com/?size=512&id=32525&format=png"
              alt=""
            />
            <p className="text-3xl font-bold text-white">PW Skills lab</p>
            <p className="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div
            className="w-60 flex flex-col items-center mb-12
           border-white border-2 rounded-xl p-2"
          >
            <img
              className="w-[144px] h-[144px]"
              src="https://img.icons8.com/?size=512&id=Z6mGeoFxQMQY&format=png"
              alt=""
            />
            <p className="text-3xl font-bold text-white">PW Skills lab</p>
            <p className="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div
            className="w-60 flex flex-col items-center mb-12
           border-white border-2 rounded-xl p-2"
          >
            <img
              className="w-[144px] h-[144px]"
              src="https://freeiconshop.com/wp-content/uploads/edd/book-flat.png"
              alt=""
            />
            <p className="text-3xl font-bold text-white">PW Skills lab</p>
            <p className="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
