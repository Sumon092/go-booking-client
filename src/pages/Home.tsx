import Destination from "../component/Destination";
import Discount from "../component/Discount";
import Explore from "../component/Explore";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Offers from "../component/Offers";
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
            <Footer/>
        </div>
    );
};

export default Home;