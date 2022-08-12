import "./Portfolio.scss";

const TimelineCard = ({ leftBool, visible, image, heading, bodyText }) => {
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
      {visible ? (
        <h1 className="portfolio-label timeline-card-h1">{heading}</h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default TimelineCard;
