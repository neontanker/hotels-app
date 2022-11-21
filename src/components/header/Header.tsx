import classes from "./Header.module.css";

const Header: React.FC = (props) => {
  return (
    <header className={classes.header}>
      <h1>Hotel App</h1>
    </header>
  );
};

export default Header;
