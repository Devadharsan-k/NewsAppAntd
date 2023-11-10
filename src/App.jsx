import { useState } from "react";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import SubHeader from "./Components/Header/SubHeader";
import "./index.css";

function App() {
  const [category, setCategory] = useState("General");
  return (
    <>
      <Header />
      <SubHeader onChangeCategory={setCategory} />
      <Content selectedCategory={category} />
    </>
  );
}

export default App;
