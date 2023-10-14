import Explore7 from "../assets/images/explore/coxbazar.jpg";
import Explore2 from "../assets/images/explore/sylhet.jpg";
import Explore3 from "../assets/images/explore/dhaka.jpg";
import Explore4 from "../assets/images/explore/sreemongol.jpg";
import Explore5 from "../assets/images/explore/chittagong.jpg";
import Explore6 from "../assets/images/explore/coxbazar.jpg";
const Explore = () => {
  return (
    <div className="pl-24 pr-24 mt-8">
      <h2 className="mb-0">Explore Bangladesh</h2>
      <p className="mt-0 text-gray-600">
        These popular destinations have a lot to offer
      </p>

      <div className="grid grid-cols-6 gap-4">
        <div className="border-1 h-36 w-full relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Explore7}
            alt=""
          />
          <div>
            <h3 className="mb-0 mt-1">Cox's Bazar</h3>
            <p className="mt-0 font-light">73 Properties</p>
          </div>
        </div>
        <div className="border-1 h-36 w-full relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Explore2}
            alt=""
          />
          <div>
            <h3 className="mb-0 mt-1">Sylhet</h3>
            <p className="mt-0 font-light">25 Properties</p>
          </div>
        </div>
        <div className="border-1 h-36 w-full relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Explore3}
            alt=""
          />
          <div>
            <h3 className="mb-0 mt-1">Dhaka</h3>
            <p className="mt-0 font-light">200 Properties</p>
          </div>
        </div>
        <div className="border-1 h-36 w-full relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Explore4}
            alt=""
          />
          <div>
            <h3 className="mb-0 mt-1">Kishurgonj</h3>
            <p className="mt-0 font-light">10 Properties</p>
          </div>
        </div>
        <div className="border-1 h-36 w-full relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Explore5}
            alt=""
          />
          <div>
            <h3 className="mb-0 mt-1">Chittagong</h3>
            <p className="mt-0 font-light">25 Properties</p>
          </div>
        </div>
        <div className="border-1 h-36 w-full relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={Explore6}
            alt=""
          />
          <div>
            <h3 className="mb-0 mt-1">Kuakata</h3>
            <p className="mt-0 font-light">10 Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
