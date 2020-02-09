
// Takes in a date in any string representation of a date and returns it in 'mo/dy/year' format
const datePrettier = date => {
  const uglyDate = new Date(date);
  const prettyDate = `${uglyDate.getMonth() +
    1}/${uglyDate.getDate()}/${uglyDate.getFullYear()}`;
  return prettyDate;
};

//takes in a dateTime string and
//formats a 24 hour dateTime into 12 hour time with AM/PM appended
const formatTime = (date) => {
  const d = new Date(date);
  let hh = d.getHours();
  let m = d.getMinutes();
  let dd = "AM";
  let h = hh;
  if (h >= 12) {
    h = hh - 12;
    dd = "PM";
  }
  if (h === 0) {
    h = 12;
  }

  //adds 0 before times with less than 2 digits
  m = m < 10 ? "0" + m : m;


  let replacement = h + ":" + m;
  replacement += " " + dd;

  return replacement;
}


module.exports = {
  datePrettier,
  formatTime,
};
