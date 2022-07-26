import "./Portfolio.scss";
import proj1 from "./assets/languages/Python-logo-notext.svg";

const TimelineCard = () => {
  return (
    <div className="timeline">
      <div className="timeline-card-outer-left">
        <img src={proj1} />
      </div>

      <div className="timeline-strip">
        <img src={proj1} />
      </div>

      <div className="timeline-card-outer-right">
        <img src={proj1} />
      </div>
    </div>
  );
};

export default TimelineCard;
