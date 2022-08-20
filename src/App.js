import harvardArt from './data/harvardArt';
import GalNav from './components/GalleryNavigation';
import GalView from './components/GalleryView';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { Switch } from 'react-router';


function App() { 
  return (
    // <Router>
      <div className="page-wrapper">
        <GalNav galleries={harvardArt.records} />
        <Switch>
        <Route path="/galleries/:galleryId">
          <GalView galleries={harvardArt.records} />
        </Route>
        <Route exact path="/">
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.
            You break, you pay!{console.log(harvardArt.records)}
          </p>
        </Route>
        <Route>
          <p>Page not found Four Oh Four. You may want to try the gallery at BU</p>
        </Route>
        </Switch>

      </div>
    // </Router>
  );
}

export default App;
