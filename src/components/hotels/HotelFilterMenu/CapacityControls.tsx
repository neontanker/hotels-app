import classes from "./CapacityControls.module.css";

const CapacityControls: React.FC<{
  text: string;
  changeCapacity: (count: number) => void;
  value: number;
}> = (props) => {
  const changeCount = (count: number) => {
    props.changeCapacity(count);
  };
  // @TODO: Disable + button if there are no rooms with selectedCapacity + 1
  return (
    <div className={classes.capacityControls}>
      {props.text}:{" "}
      <button onClick={() => props.value !== 0 && changeCount(props.value - 1)}>
        -
      </button>
      <button>{props.value}</button>
      <button onClick={() => changeCount(props.value + 1)}>+</button>
    </div>
  );
};

export default CapacityControls;
