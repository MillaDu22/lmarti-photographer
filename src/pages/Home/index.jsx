import './home.css';
import Banner from '../../components/Banner/index.jsx';
import LoadPage from '../../components/Loadpage/index.jsx';
import Gallery from '../../components/Gallery/index.jsx';

function Home() {
    return (
        <div className="home">
            <LoadPage />
            <Banner />
            <Gallery />
        </div>
    );
}

export default Home;