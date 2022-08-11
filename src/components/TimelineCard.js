import "./Portfolio.scss";

const TimelineCard = ({ leftBool, visible, image }) => {
  return (
    <div
      className={`${
        leftBool ? "timeline-card-outer-left" : "timeline-card-outer-right"
      } ${visible ? "" : "timeline-card-invisible"}`}
    >
      {visible ? (
        <img
          className="timeline-card-img"
          alt="timeline card project"
          src={image}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TimelineCard;
