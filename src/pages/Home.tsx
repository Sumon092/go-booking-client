import Destination from "../component/Destination";
import Explore from "../component/Explore";
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
        </div>
    );
};

export default Home;