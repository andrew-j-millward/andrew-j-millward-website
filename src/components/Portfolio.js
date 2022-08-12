import { useState, useEffect } from "react";
import "./Portfolio.scss";
import TimelineSegment from "./TimelineSegment";
import proj1 from "./assets/projects/L2-UniFrac-Cover-Photo.png";

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);
  return { width, height };
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
      <div className="portfolio-label">
        <h1>My Portfolio</h1>
      </div>
      <div>
        <TimelineSegment
          image={proj1}
          year={2021}
          windowSize={windowSize}
          leftToggle={true}
          endToggle={false}
          heading={"L2-UniFrac"}
          bodyText={""}
        />
        <TimelineSegment
          image={proj1}
          year={2021}
          windowSize={windowSize}
          leftToggle={false}
          endToggle={false}
          heading={"L2-UniFrac"}
          bodyText={""}
        />
        <TimelineSegment
          image={proj1}
          year={2021}
          windowSize={windowSize}
          leftToggle={true}
          endToggle={true}
          heading={"L2-UniFrac"}
          bodyText={""}
        />
      </div>
    </div>
  );
};

export default Portfolio;
