import InfoItem from "./InfoItem";
import classes from "./InfoItem.module.css";

const DUMMY_INFORMAYION = [
  {
    id: "m1",
    type: "YTD",
    message: "Employee YTD Overview",
    submittedOn: "",
    downloadPdf: false,
  },

  {
    id: "m2",
    type: "T4", //for button lable and row label
    message: "T4 for 2022 been completed on.", // description to use as second line in the row
    submittedOn: "08 nov 2021", //for submission label
    downloadPdf: true, // to show and hide the blue PDF label.
  },
  {
    id: "m3",
    type: "T4A",
    message: "T4A for 2020 have been completed and submitted on",
    submittedOn: "06 Nov 2021",
    downloadPdf: true,
  },
  {
    id: "m4",
    type: "RL1",
    message: "RL1 for 2020 have been completed and submitted on",
    submittedOn: "06 Aug 2021",
    downloadPdf: true,
  },
];

const AvailableInformation = () => {
  const informationList = DUMMY_INFORMAYION.map((info) => (
    <InfoItem
      key={info.id}
      id={info.id}
      type={info.type}
      message={info.message}
      submittedOn={info.submittedOn}
      downloadPdf={info.downloadPdf}
    />
  ));

  return (
    <section>
      <div className={classes.fullWidthDiv}>
        <ul>{informationList}</ul>
      </div>
    </section>
  );
};

export default AvailableInformation;
