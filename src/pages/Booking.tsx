import Bookings from "../component/Bookings";
import Header from "../component/Header";
import SearchFilter from "../component/SearchFilter";

const Booking = () => {
    return (
        <div>
            <Header/>
            <SearchFilter/>
           <Bookings/>
        </div>
    );
};

export default Booking;