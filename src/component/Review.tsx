import { StarFilled, UserOutlined ,StarOutlined} from "@ant-design/icons";

interface ReviewProps {
  name: string;
  comment: string;
  stars: number;
}

const Review: React.FC<ReviewProps> = ({ name, comment, stars }) => {
  const renderStars = () => {
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starArray.push(<StarFilled key={i} className="text-orange-300" />);
      } else {
        starArray.push(<StarOutlined key={i} className="text-orange-300" />);
      }
    }
    return starArray;
  };

  return (
    
      <div className="bg-gradient-to-r from-[#81c8ec] to-[#a7efaf] border rounded-lg p-6 mb-4 shadow-lg w-64 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
          <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
            <UserOutlined className="text-[#4ca2cd]" style={{ fontSize: "24px" }} />
          </div>
        </div>
        <div className="text-center font-bold mt-2 mb-2 text-white text-xl">{name}</div>
        <div className="flex justify-center mb-2">{renderStars()}</div>
        <div className="text-white mb-2 text-center">{comment}</div>
      </div>
    
  );
};

export default Review;
