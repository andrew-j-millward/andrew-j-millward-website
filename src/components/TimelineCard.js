import "./Portfolio.scss";

const TimelineCard = ({ leftBool, visible, image }) => {
  return (
    <div
      className={`${
        leftBool ? "timeline-card-outer-left" : "timeline-card-outer-right"
      } ${visible ? "" : "timeline-card-invisible"}`}
    >
      <img className="timeline-card-img" src={image} />
    </div>
  );
};

export default TimelineCard;
