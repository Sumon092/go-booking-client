import Destination from "../component/Destination";
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
        </div>
    );
};

export default Home;