import React, {useState, useEffect} from "react";

function App() {
  const [dogImage, setDogImage] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((data) => {
        
    });
  }, []);

  if (!isLoaded) return <p>Loading...</p>
}

export default App;