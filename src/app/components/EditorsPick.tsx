const EditorsPick = () => {
  const items = [
    { label: "Men", image: "/men.jpg" },
    { label: "Women", image: "/women.jpg" },
    { label: "Accessories", image: "/accessories.jpg" },
    { label: "Kids", image: "/kids.jpg" },
  ];

  return (
    <section className="py-12 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Editor's Pick
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Problems trying to resolve the conflict between...
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.image}
              alt={item.label}
              className="w-full rounded-lg shadow-md hover:shadow-xl"
            />
            <h3 className="text-lg font-medium mt-4">{item.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorsPick;
