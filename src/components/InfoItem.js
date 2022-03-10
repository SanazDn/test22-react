import classes from "./InfoItem.module.css";
import { useState } from "react";

const InfoItem = (props) => {
  const [isActive, setActive] = useState(false);
  const onReviewClick = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };


  return (
    <div className={classes.flex}>
      <div className={isActive ? classes.checked : classes.unchecked}></div>
      <div className={classes.description}>
        <h6>{props.type}</h6>
        {props.message}
        <div>
          {props.downloadPdf && (
            <div className={classes.print}>
              <img className={classes.printer} />
              Print PDF(CRA version)
              <img className={classes.printer} />
              {props.type}XLM
            </div>
          )}
        </div>
        {props.submittedOn}
      </div>
      <div>
        <div className="btn-group-justified">
          <div className="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary col-3 sm"
              size="sm"
              onClick={onReviewClick}
            >
              Review {props.type}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
