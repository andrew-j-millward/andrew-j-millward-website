import TimelineCard from "./TimelineCard";

const toggleRight = (windowSize) => {
  return windowSize.width <= 1024 ? true : false;
};

const TimelineSegment = ({
  image,
  year,
  windowSize,
  leftToggle,
  endToggle,
}) => {
  return (
    <div className="timeline-segment">
      <div className="timeline">
        {!toggleRight(windowSize) ? (
          <TimelineCard
            leftBool={
              leftToggle ? !toggleRight(windowSize) : toggleRight(windowSize)
            }
            visible={
              leftToggle ? !toggleRight(windowSize) : toggleRight(windowSize)
            }
            image={
              leftToggle
                ? !toggleRight(windowSize)
                  ? image
                  : null
                : toggleRight(windowSize)
                ? image
                : null
            }
          />
        ) : (
          ""
        )}
        <div className="timeline-strip">
          <div className="line-element">
            <div className="line-element-inner">
              <p>{year}</p>
            </div>
          </div>
          {endToggle ? (
            <div className="line-end"></div>
          ) : (
            <div className="line"></div>
          )}
        </div>
        {leftToggle ? (
          <TimelineCard
            leftBool={toggleRight(windowSize)}
            visible={toggleRight(windowSize)}
            image={toggleRight(windowSize) ? image : null}
          />
        ) : (
          <TimelineCard leftBool={false} visible={true} image={image} />
        )}
      </div>
      {endToggle ? (
        ""
      ) : (
        <div className="gap-content">
          <div className="timeline-strip">
            <div className="line"></div>
          </div>
          {toggleRight(windowSize) ? <div className="buffer"></div> : ""}
        </div>
      )}
    </div>
  );
};

export default TimelineSegment;
