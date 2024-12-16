import Image from "next/image"
import Link from "next/link"
import { Heart, Share2, Repeat2 } from 'lucide-react'

const products = [
  { name: 'Syltherine', type: 'Stylish cafe chair', price: 2500000, image: '/image1.jpg' },
  { name: 'Leviosa', type: 'Stylish cafe chair', price: 2500000, image: '/image2.jpg' },
  { name: 'Lolito', type: 'Luxury big sofa', price: 7000000, image: '/image3.jpg' },
  { name: 'Respira', type: 'Outdoor bar table and stool', price: 500000, image: '/image4.jpg' },
]

export default function Shop() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[240px] bg-[url('/bg-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4">
          <div className="relative flex h-[240px] flex-col items-center justify-center text-white">
            <h1 className="text-4xl text-black font-bold">Shop</h1>
            <div className="mt-2 flex items-center space-x-2">
              <Link href="/" className="text-sm text-black hover:underline">Home</Link>
              <span>→</span>
              <span className="text-sm text-black">Shop</span>
            </div>
          </div>
        </div>
        
      </div>

      {/* Filter Section */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-sm">
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 text-sm">
                <span>Grid view</span>
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>Showing 1-16 of 32 results</span>
              <select className="border rounded px-2 py-1">
                <option>Default</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12">
        {[...Array(4)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {products.map((product, i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {i % 3 === 0 && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                      -30%
                    </div>
                  )}
                  {i === 3 && (
                    <div className="absolute top-4 right-4 bg-teal-500 text-white text-sm px-3 py-1 rounded-full">
                      New
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-black/0 group-hover:bg-black/60 transition-all flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                    <button className="text-white hover:text-primary">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="text-white hover:text-primary">
                      <Repeat2 className="h-5 w-5" />
                    </button>
                    <button className="text-white hover:text-primary">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.type}</p>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Rp {product.price.toLocaleString()}</span>
                    {i % 3 === 0 && (
                      <span className="text-sm text-gray-500 line-through">Rp {(product.price * 1.3).toLocaleString()}</span>
                    )}
                  </div>
                </div>
                {i === 1 && (
                  <button className="mt-4 w-full bg-primary text-white py-2 hover:bg-primary/90">
                    Add to cart
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center space-x-2">
          <Link href="/shop?page=1" className="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center">1</Link>
          <Link href="/shop?page=2" className="h-10 w-10 rounded-lg hover:bg-gray-100 flex items-center justify-center">2</Link>
          <Link href="/shop?page=3" className="h-10 w-10 rounded-lg hover:bg-gray-100 flex items-center justify-center">3</Link>
          <Link href="/shop?page=2" className="px-4 py-2 rounded-lg hover:bg-gray-100">Next</Link>
        </div>
      </div>

      {/* Features */}
      <div className="border-t bg-[#FAF3EA]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-4  gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/trophy.jpg" alt="Trophy" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-sm text-gray-600">crafted from top materials</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/vector1.jpg" alt="Warranty" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/shipping.jpg" alt="Shipping" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">Order over 150 $</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/customer-support.jpg" alt="Support" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24 / 7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}