import classes from "./InfoItem.module.css";

const Header = () => {
  return (
    <div className={classes.flexHeader}>
      <img className={classes.year} />
      <p>2020 select year</p>
    </div>
  );
};

export default Header;
