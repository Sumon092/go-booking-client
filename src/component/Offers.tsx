import { Button } from "antd";
import OfferImage from "../assets/images/family.jpeg";
import TourImage from "../assets/images/tour.jpeg";
const Offers = () => {
  return (
    <>
      <div className="pl-24 mb-0 mt-8">
        <h2 className="mb-0">Offers</h2>
        <p className="mt-0 text-gray-600">Promotions, deals and special offers for you</p>
      </div>
      <div className="h-[200px] flex pr-24 pl-24 gap-2 mb-8">
        <div
          className="w-1/2 rounded-lg shadow-md flex"
          style={{ border: "1px solid gray", boxShadow: "" }}
        >
          <div className="w-[60%] flex flex-col justify-center p-5">
            <h3 className="mb-0 text-gray-700">
              Take Your longest holiday yet
            </h3>
            <p className="text-gray-500">
              Browse properties offering long-term <br />
              stays, many at reduced monthly rates.
            </p>
            <Button type="primary" className=" w-1/3 font-bold">
              Find a stay
            </Button>
          </div>
          <div className="relative">
            <img
              className="h-full w-full rounded-tr-md rounded-br-md object-cover"
              src={OfferImage}
              alt=""
            />
          </div>
        </div>

        <div className="w-1/2 shadow-md rounded-lg relative flex justify-center">
          <img
            className="object-cover h-full w-full rounded-md"
            src={TourImage}
            alt=""
          />
          <div className="flex justify-center absolute flex-col top-7 left-4 text-white">
            <h3 className="mb-0">Save 15% with save escape deals</h3>
            <p>
              Explore thousands of destinations <br />
              worldwide and save 15% or more
            </p>
            <Button type="primary" className="w-2/3 font-bold">
              Find Late Escape Deals
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
