const WorkCard = (props: any) => {
  return (
    <div
      className="work-item-card"
      style={{
        backgroundImage: `url(${props.thumb})`,
      }}
      onClick={props.onClick}
    >
      <div className="work-item-card-overlay">
        <div className="work-item-card-overlay-title">
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
