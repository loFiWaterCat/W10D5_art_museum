import harvardArt from './data/harvardArt';
import GalNav from './components/GalleryNavigation';


function App() {
  return (
    <GalNav galleries={harvardArt.records} />
  );
}

export default App;

