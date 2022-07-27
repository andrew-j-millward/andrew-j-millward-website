import "./Portfolio.scss";

const TimelineCard = ({ leftBool, image }) => {
  return (
    <div
      className={`${
        leftBool ? "timeline-card-outer-left" : "timeline-card-outer-right"
      }`}
    >
      <img className="timeline-card-img" src={image} />
    </div>
  );
};

export default TimelineCard;
