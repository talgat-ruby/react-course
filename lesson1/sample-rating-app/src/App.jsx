import { useState } from "react";
import "./App.css";
import ReviewPage from "./ReviewPage.jsx";
import OutputPage from "./OutputPage.jsx";

function App() {
  const [page, setPage] = useState(1);
  const [rate, setRate] = useState(0);

  switch (page) {
    case 1:
      return <ReviewPage gotoNewPage={setPage} rate={rate} setRate={setRate} />;
    case 2:
      return <OutputPage rate={rate} setPage={setPage} />;
    default:
      return null;
  }
}

export default App;
