import glass from "../images/glass.png";

const Landing = () => {
  return (
    <div className="landing">
      <img src={glass} className="glass"></img>
      <h1
        data-text="I MAKE THINGS"
        className="landing__title glitch"
        onMouseOver={breakWord}
        onMouseOut={makeWord}
        // onMouseLeave={() => this.makeWord}
      >
        I{" "}
        <span className="landing__title__span glitch" target="_break">
          MAKE
        </span>{" "}
        THINGS
      </h1>
    </div>
  );
};

//FIND A WAY TO CHANGE THE DATA-TEXT
function breakWord() {
  const el = document.querySelector(".landing__title__span");
  el.textContent = "BREAK";
  el.toggleAttribute("target", "_break");

  const glassImg = document.querySelector(".glass");
  glassImg.style.opacity = 1;

  const elSubtext = document.querySelector(".glitch");
  elSubtext.setAttribute("data-text", "I BREAK THINGS");
}

function makeWord() {
  const el = document.querySelector(".landing__title__span");
  el.textContent = "MAKE";
  el.removeAttribute("target", "_break");

  const glassImg = document.querySelector(".glass");
  glassImg.style.opacity = 0;

  const elSubtext = document.querySelector(".glitch");
  elSubtext.setAttribute("data-text", "I MAKE THINGS");
}

export default Landing;
