const FeaturedProducts = () => {
  const products = [
    { name: "Graphic Design", price: "$16.48", image: "/product1.jpg" },
    { name: "Graphic Design", price: "$16.48", image: "/product2.jpg" },
    { name: "Graphic Design", price: "$16.48", image: "/product3.jpg" },
    { name: "Graphic Design", price: "$16.48", image: "/product4.jpg" },
  ];

  return (
    <section className="py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Bestseller Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-md hover:shadow-xl"
            />
            <h3 className="text-lg font-medium mt-4">{product.name}</h3>
            <p className="text-blue-500 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
