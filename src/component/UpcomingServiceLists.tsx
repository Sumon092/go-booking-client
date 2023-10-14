import React from 'react';
import UpcomingService from './UpcomingService';

interface Service {
  serviceName: string;
  date: string;
  time: string;
}

const UpcomingServicesList: React.FC = () => {
  const upcomingServices: Service[] = [
    { serviceName: 'Helicopter Booking', date: '2023-10-15', time: '10:00 AM' },
    { serviceName: 'Speed Boat Rental', date: '2023-10-20', time: '2:30 PM' },
    
  ];

  return (
    <div className='pl-24 pr-24'>
      <h2 className="text-2xl font-bold mb-4">Upcoming Services</h2>
      <div className='flex gap-5'>
      {upcomingServices.map((service, index) => (
        <UpcomingService
          key={index}
          serviceName={service.serviceName}
          date={service.date}
          time={service.time}
        />
      ))}
      </div>
      
    </div>
  );
};

export default UpcomingServicesList;
