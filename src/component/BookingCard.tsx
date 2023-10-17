import { Button } from "antd";
import BookingImage from "../assets/images/book/booki1.webp";
import "../styles/BookingCards.css";
const BookingCard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 neon-border p-4 relative shadow-lg mb-5">
        <div className="col-span-1">
          <img className="w-full" src={BookingImage} alt="" />
        </div>
        <div className="col-span-1">
          <h2 className="text-[#4ca2cd] font-bold text-2xl mt-0 mb-0 ">
            Reem Resort
          </h2>
          <p className="underline mt-0 mb-0 text-sm text-[#4ca2cd]">
            Cox's Bazar
          </p>
          <p className="mt-0 mb-0 font-bold">Standard Triple Room</p>
          <span className="text-xs text-gray-500">
            2 double bed, 1 single bed
          </span>
          <br />
          <span className="text-sm text-[#67b26f] font-bold">
            Free cancellation
          </span>
          <br />
          <span className="text-sm">
            No payment needed-{" "}
            <span className="text-xs">pay at the property</span>
          </span>
        </div>
        <div className="col-span-1">
          <div className="flex justify-end items-center gap-5">
            <div>
              <p className="mb-0">Review Score</p>
              <p className="text-sm mt-0 text-gray-500">5 reviews</p>
            </div>
            <div className="h-8 w-8 rounded-md rounded-bl-none bg-[#67b26f] flex items-center justify-center font-bold p-1 text-white cursor-pointer">
              <span>4.5</span>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-end text-right">
              <p className="mb-0">2 Nights</p>
              <h3 className="mt-0 mb-0 font-bold text-2xl">BDT 5000</h3>
              <p className="mb-5 mt-0 text-sm text-gray-600">
                including taxes and vat
              </p>
            </div>
            <div className="text-right">
              <Button className="bg-[#4ca2cd] font-bold uppercase text-white w-28">
                Add To Cart
              </Button>
              <Button className="bg-[#67b26f] font-bold uppercase text-white w-28 ml-2">
                BOOK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
