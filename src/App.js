import "./Style/Main.css";
import iconStar from "./Img/icon-star.svg";
import ilustration from "./Img/illustration-thank-you.svg";
import React from "react";
function App() {
  const [value, setValue] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  const onClickhandele = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  function submit() {
    setDisplay(!display);
  }
  return (
    <div className="App">
      {display ? (
        <div className="submit-before">
          <img src={ilustration} alt="ilustration" />
          <div className="message">
            <p>You Selected {value} out of 5</p>
          </div>
          <h3>Thank you </h3>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      ) : (
        <div className="default">
          <div className="icon">
            <img src={iconStar} alt="Icon" />
          </div>
          <h3>How did we do?</h3>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="number">
            <button
              className="num"
              value="1"
              title="num1"
              onClick={onClickhandele}
            >
              1
            </button>
            <button
              className="num"
              value="2"
              title="num2"
              onClick={onClickhandele}
            >
              2
            </button>
            <button
              className="num "
              value="3"
              title="num3"
              onClick={onClickhandele}
            >
              3
            </button>
            <button
              className="num "
              value="4"
              title="num4"
              onClick={onClickhandele}
            >
              4
            </button>
            <button
              className="num "
              value="5"
              title="num5"
              onClick={onClickhandele}
            >
              5
            </button>
          </div>
          <button className="Submit" onClick={submit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
