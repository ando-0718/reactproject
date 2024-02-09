import { useRef, useState } from 'react';
import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //APIURL
    const endpointURL = `https://pixabay.com/api/?key=42083500-3f3a25cc3a59030f42bf69d8b&q=${ref.current.value}&image_type=photo`;
    //APIを叩く
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      });

  }
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='画像を探す' ref={ref} />
      </form>
      <ImageGrallery fetchData={fetchData} />
    </div>
  );
}

export default App;
