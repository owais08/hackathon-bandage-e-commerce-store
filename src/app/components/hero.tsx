const Hero = () => {
  return (
    <section className="flex items-center justify-normal">
      <div className="">
        <div className="z-[10] mt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            NEW COLLECTION
          </h1>

          <p className="text-lg text-gray-600 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
