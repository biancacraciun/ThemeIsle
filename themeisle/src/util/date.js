Date.prototype.monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

Date.prototype.getMonthName = function () {
  return this.monthNames[this.getUTCMonth()];
};

Date.prototype.getShortMonthName = function () {
  return this.getMonthName().substr(0, 3);
};

export const showDate = (date) => {
  const convertedDate = new Date(date * 1000);
  const month = convertedDate.getShortMonthName();
  const day = convertedDate.getUTCDate().toString();
  const fullYear = convertedDate.getUTCFullYear().toString();
  return `${month} ${day}, ${fullYear}`;
};
