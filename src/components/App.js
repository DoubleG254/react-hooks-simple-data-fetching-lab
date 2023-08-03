import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the dog image URL
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []); 

  return (
    <div>
      {loading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog" />}
    </div>
  );
}

export default App;
