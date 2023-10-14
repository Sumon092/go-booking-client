import { StarFilled, UserOutlined } from "@ant-design/icons";

interface ReviewProps {
  name: string;
  comment: string;
  stars: number;
}

const Reviews: React.FC<ReviewProps> = ({ name, comment, stars }) => {
  const renderStars = () => {
    const starArray = [];
    for (let i = 0; i < stars; i++) {
      starArray.push(<StarFilled key={i} className="text-yellow-400" />);
    }
    return starArray;
  };

  return (
    <div className="pl-24 pr-24 mt-20 gap-3 flex">
      <div className="bg-white border rounded-lg p-6 mb-4 shadow-lg w-64 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
          <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
            <UserOutlined style={{ fontSize: "24px" }} />
          </div>
        </div>
        <div className="text-center font-bold mb-2">{name}</div>
        <div className="flex justify-center mb-2">{renderStars()}</div>
        <div className="text-gray-700 mb-2 text-center">{comment}</div>
      </div>
      <div className="bg-white border rounded-lg p-6 mb-4 shadow-lg w-64 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
          <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
            <UserOutlined style={{ fontSize: "24px" }} />
          </div>
        </div>
        <div className="text-center font-bold mb-2">{name}</div>
        <div className="flex justify-center mb-2">{renderStars()}</div>
        <div className="text-gray-700 mb-2 text-center">{comment}</div>
      </div>
      <div className="bg-white border rounded-lg p-6 mb-4 shadow-lg w-64 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
          <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
            <UserOutlined style={{ fontSize: "24px" }} />
          </div>
        </div>
        <div className="text-center font-bold mb-2">{name}</div>
        <div className="flex justify-center mb-2">{renderStars()}</div>
        <div className="text-gray-700 mb-2 text-center">{comment}</div>
      </div>
      <div className="bg-white border rounded-lg p-6 mb-4 shadow-lg w-64 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
          <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
            <UserOutlined style={{ fontSize: "24px" }} />
          </div>
        </div>
        <div className="text-center font-bold mb-2">{name}</div>
        <div className="flex justify-center mb-2">{renderStars()}</div>
        <div className="text-gray-700 mb-2 text-center">{comment}</div>
      </div>
    </div>
  );
};

export default Reviews;
