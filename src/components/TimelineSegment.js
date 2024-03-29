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
  heading,
  bodyText,
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
            heading={heading}
            bodyText={bodyText}
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
            <div>
              <div
                style={{ borderLeft: "6px solid #708090", height: "0vw" }}
                className="line"
              ></div>
              <div style={{ height: "35vw" }} className="line"></div>
            </div>
          )}
        </div>
        {leftToggle ? (
          <TimelineCard
            leftBool={toggleRight(windowSize)}
            visible={toggleRight(windowSize)}
            image={toggleRight(windowSize) ? image : null}
            heading={heading}
            bodyText={bodyText}
          />
        ) : (
          <TimelineCard
            leftBool={false}
            visible={true}
            image={image}
            heading={heading}
            bodyText={bodyText}
          />
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
