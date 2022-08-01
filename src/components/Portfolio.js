import "./Portfolio.scss";
import TimelineCard from "./TimelineCard";
import proj1 from "./assets/projects/L2-UniFrac-Cover-Photo.png";
import center from "./assets/languages/Python-logo-notext.svg";

const Portfolio = () => {
  return (
    <div>
      <h1 className="portfolio-label">My Portfolio</h1>
      <div>
        <div className="timeline">
          <TimelineCard leftBool={true} visible={true} image={proj1} />
          <div className="timeline-strip">
            <div class="line"></div>
          </div>
          <TimelineCard leftBool={false} visible={false} />
        </div>
        <div className="gap-content">
          <div className="timeline-strip">
            <div class="line"></div>
          </div>
        </div>
        <div className="timeline">
          <TimelineCard leftBool={true} visible={false} />
          <div className="timeline-strip">
            <div class="line"></div>
          </div>
          <TimelineCard leftBool={false} visible={true} image={proj1} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
