import React from 'react';
// import Helicopter from '../assets/images/helicopter.jpg'
import SpeedBoat from '../assets/images/pexels-rohit-kumar-allaparthi-2862532.jpg'

interface UpcomingServiceProps {
  serviceName: string;
  date: string;
  time: string;
}

const UpcomingService: React.FC<UpcomingServiceProps> = ({
  serviceName,
  date,
  time,
}) => {
  return (
    <div className="bg-white border rounded-lg p-6 mb-4 shadow-lg w-full h-[50vh] flex items-center justify-between">
      <img
        src={SpeedBoat}
        alt="Service Image"
        className="w-3/5 h-full object-cover rounded-l-lg"
      />
      <div className="w-2/5 p-4">
        <div>
          <div className="font-bold text-lg mb-2">{serviceName}</div>
          <div className="text-gray-700 mb-2">Date: {date}</div>
          <div className="text-gray-700">Time: {time}</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingService;
