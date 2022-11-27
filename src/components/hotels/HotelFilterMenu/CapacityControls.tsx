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
    <div className={classes.controlsContainer}>
      {props.text}:{" "}
      <div className={classes.controls}>
        <button
          onClick={() => props.value !== 0 && changeCount(props.value - 1)}
        >
          &minus;
        </button>
        <span>{props.value}</span>
        <button onClick={() => changeCount(props.value + 1)}>+</button>
      </div>
    </div>
  );
};

export default CapacityControls;
