import Image from "next/image";
 
export default function Slide() {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3] container mx-auto flex">
        <div className="slideText pt-9">

        <h4 className=" font-extrabold text-[2rem] ">50+ Beautiful Rooms Inspiration</h4>
        <p>
          Our Designers made a lot of beautiful Prototipe of Rooms that
          Inspire You...
        </p>
        <button className="bg-[#B88E2F] p-2">Explore More</button>
        </div>
        <div className="slideImages">
        <Image src="/inner1.jpg" width={250} height={200}  alt="Picture of the author" />

        </div>
        <div className="slideImages">
        <Image src="/inner2.jpg" width={250} height={200} alt="Picture of the author" />

        </div>
      </div>
    </>
  );
}