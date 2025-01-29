import React, { useEffect, useState } from "react";

function ApiData({ onFetchData }) {
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!hasFetched) {
      fetch("https://657869f6f08799dc80453ea2.mockapi.io/persondata")
        .then((res) => res.json())
        .then((data) => {
          const formattedData = data.map((item) => ({
            title: item.name,
            content: item.jobtitle,
            image: item.avatar,
          }));
          onFetchData(formattedData);
          setHasFetched(true);
        })
        .catch((error) => console.error("Fehler beim Abrufen der API-Daten:", error));
    }
  }, [hasFetched, onFetchData]);

  return null;
}

export default ApiData;