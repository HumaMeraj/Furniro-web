const products = [
    {
      name: "Syltherine",
      price: 250000,
      originalPrice: 350000,
      image: "/image1.jpg",
      tag: "-30%",
    },
    {
        image: "/image2.jpg",
        
      },
    {
      name: "Lolito",
      price: 700000,
      originalPrice: 1400000,
      image: "/image3.jpg",
      tag: "-50%",
    },
    {
        name: "Respira",
        price: 500000,
        image: "/image4.jpg",
        tag: "New",
      },
    {
        name: "Grifo",
        price: 1500000,
        image: "/image5.jpg",
        
    },
    {
        name: "Muggo",
        price: 150000,
        image: "/image6.jpg",
        tag: "New",
    },
    {
        name: "Pingky",
        price: 700000,
        originalPrice: 1400000,
        image: "/image7.jpg",
        tag: "-50%",
    },
    {
        name: "Pottery",
        price: 500000,
        image: "/image8.jpg",
        tag: "New",
    },  
  ];
  
  export default function Products() {
    return (
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
                {product.tag && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                {product.originalPrice && (
                  <p className="text-gray-500 line-through">
                    Rp {Number(product.originalPrice).toLocaleString('id-ID')}
                  </p>
                )}
                <p className="text-xl font-bold">
                  Rp {Number(product.price).toLocaleString('id-ID')}
                </p>
                
              </div>
             </div>
          ))}
            </div>
            <div className="flex items-center justify-center mb-12">
       <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F] mt-4">Show More</button>
        </div>
      </div>
    );
 
}