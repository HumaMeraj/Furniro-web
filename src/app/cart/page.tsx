import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[240px] bg-[url('/bg-1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4">
          <div className="relative flex h-[240px] flex-col items-center justify-center text-white">
            <h1 className="text-4xl text-black font-bold">Cart</h1>
            <div className="mt-2 flex items-center space-x-2">
              <Link href="/" className="text-sm text-black hover:underline">
                Home
              </Link>
              <span>→</span>
              <span className="text-sm text-black">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        {/* Cart Table */}
        <div className="bg-gray-100 p-4 rounded-md shadow-md flex-1 overflow-auto">
          <div className="grid grid-cols-4 text-center font-bold mb-2">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          {/* Cart Item */}
          <div className="grid grid-cols-4 items-center border-b py-2">
            <div className="flex items-center gap-2 col-span-4 sm:col-span-1">
              <img
                src="/sofa.jpg"
                alt="Product"
                className="w-16 h-16 object-cover rounded"
              />
              <span>Asgaard Sofa</span>
            </div>
            <div className="text-center col-span-4 sm:col-span-1">$50.00</div>
            <div className="text-center col-span-4 sm:col-span-1">
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center border rounded-md"
              />
            </div>
            <div className="text-center col-span-4 sm:col-span-1">$50.00</div>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="bg-gray-200 p-4 rounded-md shadow-md mt-4 lg:mt-0 lg:ml-4 max-w-full lg:max-w-sm">
          <h2 className="text-lg font-bold mb-2 text-center">Cart Total</h2>
          <div className="flex justify-between py-1">
            <span>Subtotal:</span>
            <span>$50.00</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Total:</span>
            <span>$50.00</span>
          </div>
          <button className="w-full bg-black text-white p-2 rounded-md mt-4 hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </div>

      {/* Features Section */}
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
              <p className="text-sm text-gray-600">Order over $150</p>
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
  );
}