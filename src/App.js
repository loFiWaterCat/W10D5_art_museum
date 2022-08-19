import harvardArt from './data/harvardArt';
import GalNav from './components/GalleryNavigation';
import GalView from './components/GalleryView';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";


function App() {
  return (
    // <Router>
      <div className="page-wrapper">
        <GalNav galleries={harvardArt.records} />
        <Route exact path="/galleries/:galleryId">
          <GalView galleries={harvardArt.records} />
        </Route>
      </div>
    // </Router>
  );
}

export default App;

