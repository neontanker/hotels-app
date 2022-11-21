const RoomItem: React.FC<Room> = (props) => {
  return (
    <>
      <div>
        <p>{props.name}</p>
        <p>Adults: {props.occupancy.maxAdults}</p>
        <p>Children: {props.occupancy.maxChildren}</p>
      </div>
      <div>
        <p>{props.longDescription}</p>
      </div>
    </>
  );
};

export default RoomItem;
