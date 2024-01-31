import ImageGallery from 'react-image-gallery';
import { images } from '../data/gallery-image';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-wrapper'>
          <h1>React images gallery demo</h1>
        </div>
      </header>
      <div className='image-gallery-wrapper'>
        <ImageGallery items={images}
          showThumbnails={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
}

export default App;
