import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [userDataJSON, setUserDataJSON] = useState("");
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const [userInfos, setUserInfos] = useState([]);

  const fetchData = (pageNumber) => {
    return axios
      .get(`https://randomuser.me/api?=page${pageNumber}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.error(err));
  };

  const fetchNextUser = () => {
    fetchData(nextPageNumber).then((newData) => {
      if (newData === undefined) return;
      setUserDataJSON(
        JSON.stringify(newData, null, 20) || "No user data found"
      );
      const newUserInfos = [...userInfos, ...newData.results];
      setUserInfos(newUserInfos);
      setNextPageNumber(newData.info.page + 1);
    });
  };

  useEffect(() => {
    fetchNextUser();
  }, []);

  const getFullUserName = (userInfo) => {
    const {
      name: { first, last },
    } = userInfo;
    return `${first} ${last}`;
  };

  return (
    <div className="App">
      <h1>Hi</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Up the count
      </button>
      <h1>Current Count: {count}</h1>
      <button onClick={fetchNextUser}>Fetch Next User</button>

      {userInfos.map((userInfo, idx) => (
        <>
          <div key={idx}>
            <p>{getFullUserName(userInfo)}</p>
            <img src={userInfo.picture.large} alt="userpic" />
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
