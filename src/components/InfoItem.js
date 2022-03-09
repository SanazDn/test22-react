import classes from "./InfoItem.module.css";
import { useState } from "react";

const InfoItem = (props) => {
  const [isActive, setActive] = useState(false);
  const onReviewClick = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const pdfCaption = (downloadPdf) => {
    if (downloadPdf === true) {
      return "Print PDF(CRA Version)";
    }
    return;
  };

  return (
    // <div class="d-flex  flex-hover bd-highlight mb-1 border p-3 mb-2 bg-light text-dark " >
    <div className={classes.flex}>
      <div
        class="p-2 flex-fill bd-highlight"
        className={isActive ? classes.checked : classes.unchecked}
      ></div>
      <div class="p-2 flex-fill bd-highlight">
        <h6>{props.type}</h6>
        {props.message}
        <br className={classes.print} />
        {pdfCaption(props.downloadPdf)}
        <br />
        {props.submittedOn}
      </div>
      <div class="p-2  bd-highlight">
        <button
          class={classes.button}
          //for="btn-check-2"
          //text-align="right"
          onClick={onReviewClick}
        >
          Review {props.type}
        </button>
      </div>
    </div>
  );
};

export default InfoItem;
