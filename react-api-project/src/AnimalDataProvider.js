import { useState, useEffect } from "react"
import axios from "axios"

export default function AnimalDataProvider() {
  const [animals, setAnimals] = useState("");

  useEffect(() => {
    const apiURL = "https://api.petfinder.com/v2";

    const body = {
      grant_type: "client_credentials",
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    };

    axios
      .post(`${apiURL}/oauth2/token`, body)
      .then((response) => {
        return response.data.access_token;
      })
      .then((responseToken) => {
        axios
          .get(`${apiURL}/animals`, {
            headers: {
              Authorization: `Bearer ${responseToken}`,
            },
          })
          .then((response) => {
            setAnimals(response.data.animals);
          });
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {/* switches and routes */}
    </div>
  );
}

// { animals === "" ? "Loading..." : animals.map(animal => <p>{ animal.name }</p>) }
