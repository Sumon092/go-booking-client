import BookingCards from "./BookingCards";
import Range from "./Range";

const Bookings = () => {
    return (
        <div className="pl-24 pr-24 grid grid-cols-4 min-h-screen gap-5 mt-4">
            <div className="col-span-1">
            <Range min={1500} max={20000} />
            </div>
            <div className="col-span-3">
                <BookingCards/>
            </div>
        </div>
    );
};


export default Bookings;