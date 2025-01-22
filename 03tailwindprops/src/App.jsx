import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Pradesh",
    age: 25,
    address: {
      city: "Troy",
      state: "Alabama",
      country: "USA",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, , 8, 9];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Pradesh" myArr={newArr} />
      <Card username="Rakesh" post="Software Engineer" />
      <Card />
    </>
  );
}

export default App;
