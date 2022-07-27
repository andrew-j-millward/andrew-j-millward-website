import "./Portfolio.scss";
import TimelineCard from "./TimelineCard";
import proj1 from "./assets/projects/L2-UniFrac-Cover-Photo.png";
import center from "./assets/languages/Python-logo-notext.svg";

const Portfolio = () => {
  return (
    <div>
      <h1 className="portfolio-label">My Portfolio</h1>
      <div className="timeline">
        <TimelineCard leftBool={true} image={proj1} />
        <div className="timeline-strip">
          <img src={center} />
        </div>
        <TimelineCard leftBool={false} image={proj1} />
      </div>
    </div>
  );
};

export default Portfolio;
