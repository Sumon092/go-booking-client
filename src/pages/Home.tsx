import Destination from "../component/Destination";
import Discount from "../component/Discount";
import Explore from "../component/Explore";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Newsletter from "../component/NewsLetter";
import Offers from "../component/Offers";
import Reviews from "../component/Reviews";


import SearchFilter from "../component/SearchFilter";

const Home = () => {
    return (
        <div className="mt-0">
            <Header/>
            <SearchFilter/>
            <Offers/>
            <Destination/>
            <Explore/>
            <Discount/>
            <Reviews  />
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;