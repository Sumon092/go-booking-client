import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import  { useState } from 'react';
import { CarOutlined, PicRightOutlined, SmileOutlined, DingtalkOutlined } from '@ant-design/icons';
import '../styles/Header.css'; // Import CSS for custom styling

const Header = () => {
    const [activeButton, setActiveButton] = useState('stays');

    const size: SizeType = 'large';

    const buttonStyle = (buttonType: string) => {
        const isActive = activeButton === buttonType;
        return {
            border: isActive ? '1px solid white' : 'none',
            borderRadius: '20px',
            background: isActive ? '#4ca2cd' : 'none',
            color: 'white',
            
            transition: 'background 0.3s ease',
        };
    };

    const handleButtonClick = (buttonType: string) => {
        setActiveButton(buttonType);
    };

    return (
        <div className="flex mr-4 mt-8 ml-0">
            <Button
                type="default"
                shape="round"
                icon={<PicRightOutlined />}
                size={size}
                style={buttonStyle('stays')}
                onClick={() => handleButtonClick('stays')}
            >
                Stays
            </Button>
            <Button
                type="default"
                shape="round"
                icon={<DingtalkOutlined />}
                size={size}
                style={buttonStyle('flights')}
                onClick={() => handleButtonClick('flights')}
            >
                Flights
            </Button>
            <Button
                type="default"
                shape="round"
                icon={<CarOutlined />}
                size={size}
                style={buttonStyle('carRental')}
                onClick={() => handleButtonClick('carRental')}
            >
                Car Rental
            </Button>
            <Button
                type="default"
                shape="round"
                icon={<SmileOutlined />}
                size={size}
                style={buttonStyle('attractions')}
                onClick={() => handleButtonClick('attractions')}
            >
                Attractions
            </Button>
            <Button
                type="default"
                shape="round"
                icon={<CarOutlined />}
                size={size}
                style={buttonStyle('airportTaxi')}
                onClick={() => handleButtonClick('airportTaxi')}
            >
                Airport Taxi
            </Button>
        </div>
    );
};

export default Header;

