import { useEffect, useState } from "react";
import Card from "./Card/Card";

function App() {
  const [data, setData] = useState([]); // Initialize state as an array
  const url = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result); // Set the fetched data in the state
    };

    callApi();
  }, []); // Empty dependency array to fetch data only once when the component mounts
  {console.log(data)}

  return (

  
    <>
      {data.map((item) => (
        <Card key={item.id} images={ item.images.lenght == 3 ? item.images[0] : item.images[0][0]} /> // Ensure JSX is returned and add a key prop
      ))}
    </>
  );
}

export default App;