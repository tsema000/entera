import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(null);
  const getItems = () => {
    axios
      .get(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/436121"
      )
      .then((response) => {
        console.log(response);
        const i = response.data;
        setItems(i);
      });
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div>
      <div className="App">
        {items &&
          items.constituents.map((constituents) => (
            <>
              <p>{items.title}</p>
              <p>({items.repository})</p>
              <div>
                <img src={items.primaryImage} alt="imag" />
                <p>{constituents.name}</p>
                <p>[{constituents.role}]</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default App;
