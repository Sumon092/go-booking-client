const Discount = () => {
  return (
    <div className="pl-24 pr-24 mt-16">
      <h2 className="mb-2">Travel More, Spend Less</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#4ca2cd] p-3 rounded-lg h-20 flex flex-col justify-center text-white">
          <h2 className="mb-0">Genius</h2>
          <p className="font-light mt-1">
            Sumon, your are <strong>Genius level 1</strong>
            <br /> in our loyalty program
          </p>
        </div>
        <div
          className=" p-3 rounded-lg h-20 flex flex-col justify-center"
          style={{ border: "1px solid #4ca2cd" }}
        >
          <h2 className="mb-0 text-lg">10% discount on stay</h2>
          <p className="text-gray-600 text-sm mt-1">
            Enjoy discount at participating <br />
            properties worldwide
          </p>
        </div>
        <div
          className=" p-3 rounded-lg h-20 flex flex-col justify-center"
          style={{ border: "1px solid #4ca2cd" }}
        >
          <h2 className="mb-0 text-lg">15% discount on car rental</h2>
          <p className="text-gray-600 text-sm mt-1">
            Save on select rental car <br/>
            get 15% discount
          </p>
        </div>
        <div
          className=" p-3 rounded-lg h-20 flex flex-col justify-center bg-gray-200"
          style={{ background: "gray" }}
        >
          <h2 className="mb-0 text-lg">15% discount on stay</h2>
          <p className="text-gray-600 text-sm mt-1">
            Complete 5 stays to Genius <br/>
             level 2
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
