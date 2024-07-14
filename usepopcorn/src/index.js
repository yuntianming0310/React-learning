import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={5}
        color="#ffd700"
        size={24}
        className="star-rating"
        messages={["差", "一般", "好", "很好", "非常好"]}
        defaultRating={3}
        onSetRating={setMovieRating}
      />
      <p>这个电影的评分为{movieRating}星</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating />
    <Test />
  </React.StrictMode>
);
