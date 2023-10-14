import Dest from "../assets/images/destination/Dhaka.jpg";
import Dest2 from "../assets/images/destination/Sylhet.jpg";
import Dest3 from "../assets/images/destination/Rajshahi.jpg";
import Dest4 from "../assets/images/destination/coxbazar.jpg";
import Dest5 from "../assets/images/destination/khulna.jpg";

const Destination = () => {
  return (
    <div className="pl-24 pr-24 mt-12">
        <h2 className="mb-0">Trending Destinations</h2>
        <p className="text-gray-600 mt-0">Most popular choices for Travelers from Bangladesh</p>
      <div className="pr-1 grid grid-cols-2 gap-5">
        <div className="border-1 h-64 w-full relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Dest}
            alt=""
          />
          <div className="absolute top-3 left-5 flex justify-center items-center gap-1">
            <div><h2 className="text-gray-700 font-bold">Dhaka,</h2></div>
            <div><p className="text-gray-600">Bangladesh</p></div>
          </div>
        </div>
        <div className="border-1 w-full h-64 relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Dest2}
            alt=""
          />
          <div className="absolute top-3 left-5 flex justify-center items-center gap-1">
            <div><h2 className="text-gray-700 font-bold">Rajshahi,</h2></div>
            <div><p className="text-gray-600">Bangladesh</p></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="w-full h-60 relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Dest3}
            alt=""
          />
          <div className="absolute top-3 left-5 flex justify-center items-center gap-1">
            <div><h2 className="text-gray-700 font-bold">Sylhet,</h2></div>
            <div><p className="text-gray-600">Bangladesh</p></div>
          </div>
        </div>
        <div className="w-full h-60 relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Dest4}
            alt=""
          />
          <div className="absolute top-3 left-5 flex justify-center items-center gap-1">
            <div><h2 className="text-gray-700 font-bold">Mymensingh,</h2></div>
            <div><p className="text-gray-600">Bangladesh</p></div>
          </div>
        </div>
        <div className="w-full h-60 relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Dest5}
            alt=""
          />
          <div className="absolute top-3 left-5 flex justify-center items-center gap-1">
            <div><h2 className="text-gray-700 font-bold">Khulna,</h2></div>
            <div><p className="text-gray-600">Bangladesh</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
