import React, {useState, useEffect} from "react";

function App() {
  const [randomDog, setrandomDog] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((data) => {
        
        setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) return <p>Loading...</p>
}

export default App;