import { SendOutlined } from '@ant-design/icons';

const Newsletter = () => {
  return (
    <div className="min-h-96 flex flex-col items-center justify-center bg-gray-100 mt-8 p-5 rounded-lg">
      <h1 className="text-4xl font-bold mt-0">Newsletter</h1>
      <p className="text-lg text-center mt-0">
        Get timely updates from your favorite services!
      </p>
      <div className="w-1/2 flex items-center rounded-r-full overflow-hidden border-1 border-[#67b26f]" style={{border:'2px solid #67b26f'}}>
        <input
          className="border-0 w-full  bg-transparent border-r-0 p-[14px] outline-[#4ca2cd]"
          type="text"
          placeholder="Enter Your Email"
        />
        <button className="bg-[#67b26f] p-3 border-0">
          <SendOutlined style={{ fontSize: '1.5rem', color: 'white' }} />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
