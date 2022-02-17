import React from "react";
import "./App.css";
import GoalsContainer from "./features/goalsContainer/GoalsContainer";
import Time from "./features/time/Time";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote"
import image2 from "./features/image/two.jpg"
import image3 from "./features/image/three.jpg"
import image4 from "./features/image/four.jpg"
import image5 from "./features/image/five.jpg"
import image6 from "./features/image/six.jpg"

export default function App() {
  const myBg1 = () => {
    document.body.style.backgroundImage = `url(${image2})`;
  }
  const myBg2 = () => {
    document.body.style.backgroundImage = `url(${image3})`;
  }
  const myBg3 = () => {
    document.body.style.backgroundImage = `url(${image4})`;
  }
  const myBg4 = () => {
    document.body.style.backgroundImage = `url(${image5})`;
  }
  const myBg5 = () => {
    document.body.style.backgroundImage = `url(${image6})`;
  }

  return (
    <div className="App">
      <header>
        <Time />
        <Weather />
      </header>
      <main>
        <GoalsContainer />
        <section>
        <div className="bg-content">
          <button id="btn-1" onClick={myBg1}>Img 1</button>
          <button id="btn-2" onClick={myBg2}>Img 2</button>
          <button id="btn-3" onClick={myBg3}>Img 3</button>
          <button id="btn-4" onClick={myBg4}>Img 4</button>
          <button id="btn-5" onClick={myBg5}>Img 5</button>
        </div>
        </section>
      </main>
      <footer>
        <Quote />
      </footer>
    </div>
  );
}
