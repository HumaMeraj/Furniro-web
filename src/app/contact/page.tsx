import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock } from 'lucide-react';
export default function Contact() {
    return(
        <div className="min-h-screen bg-white">
            <div className="relative h-[240px] bg-[url('/bg-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4">
          <div className="relative flex h-[240px] flex-col items-center justify-center text-white">
            <h1 className="text-4xl text-black font-bold">Contact</h1>
            <div className="mt-2 flex items-center space-x-2">
              <Link href="/" className="text-sm text-black hover:underline">Home</Link>
              <span>→</span>
              <span className="text-sm text-black">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-gray-500">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left Column - Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p className="text-gray-600">Mobile: +(84) 546-6789</p>
              <p className="text-gray-600">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 10:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 5:00</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                placeholder="Abc"
                className="w-full p-3 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Abc@def.com"
                className="w-full p-3 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                id="subject"
                placeholder="This is an optional"
                className="w-full p-3 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to ask about"
                className="w-full p-3 rounded-lg min-h-[150px]"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#B88E2F] hover:bg-[#A17922] text-white py-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="border-t bg-[#FAF3EA]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-4  gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/trophy.jpg" alt="Trophy" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-sm text-gray-600">Crafted from top materials</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/vector1.jpg" alt="Warranty" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
              <p className="text-sm text-gray-600">Over 3 years</p>
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
              <p className="text-sm text-gray-600">Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}