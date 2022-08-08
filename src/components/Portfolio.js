import { useState, useEffect } from "react";
import "./Portfolio.scss";
import TimelineCard from "./TimelineCard";
import proj1 from "./assets/projects/L2-UniFrac-Cover-Photo.png";
import center from "./assets/languages/Python-logo-notext.svg";

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);
  return { width, height };
};

const toggleRight = (windowSize) => {
  return windowSize.width <= 1024 ? true : false;
};

const Portfolio = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <h1 className="portfolio-label">My Portfolio</h1>
      <div>
        <div className="timeline">
          {!toggleRight(windowSize) ? (
            <TimelineCard
              leftBool={!toggleRight(windowSize)}
              visible={!toggleRight(windowSize)}
              image={!toggleRight(windowSize) ? proj1 : null}
            />
          ) : (
            ""
          )}
          <div className="timeline-strip show-box">
            <div className="line-element">
              <div className="line-element-inner">
                <p>2021</p>
              </div>
            </div>
            <div className="line"></div>
          </div>
          <TimelineCard
            leftBool={toggleRight(windowSize)}
            visible={toggleRight(windowSize)}
            image={toggleRight(windowSize) ? proj1 : null}
          />
        </div>
        <div className="gap-content show-box">
          <div className="timeline-strip">
            {/*<div className="line"></div>*/}
          </div>
          {toggleRight(windowSize) ? <div className="buffer"></div> : ""}
        </div>
        <div className="timeline">
          {!toggleRight(windowSize) ? (
            <TimelineCard
              leftBool={toggleRight(windowSize)}
              visible={toggleRight(windowSize)}
              image={toggleRight(windowSize) ? proj1 : null}
            />
          ) : (
            ""
          )}
          <div className="timeline-strip">
            <div className="line-element">
              <div className="line-element-inner">
                <p>2021</p>
              </div>
            </div>
            <div className="line"></div>
          </div>
          <TimelineCard leftBool={false} visible={true} image={proj1} />
        </div>
        <div className="gap-content show-box">
          <div className="timeline-strip">
            <div className="line-element">
              <div className="line-element-inner">
                <p>2021</p>
              </div>
            </div>
          </div>
          {toggleRight(windowSize) ? <div className="buffer"></div> : ""}
        </div>
        <div className="timeline">
          {!toggleRight(windowSize) ? (
            <TimelineCard
              leftBool={!toggleRight(windowSize)}
              visible={!toggleRight(windowSize)}
              image={!toggleRight(windowSize) ? proj1 : null}
            />
          ) : (
            ""
          )}
          <div className="timeline-strip"></div>
          <TimelineCard
            leftBool={toggleRight(windowSize)}
            visible={toggleRight(windowSize)}
            image={toggleRight(windowSize) ? proj1 : null}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
