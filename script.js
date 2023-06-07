const time = document.querySelector(".count--content");
// 2023/4/11
var current = new Date();
var dNow = current.getDate() + 1;
var mNow = current.getMonth() + 1;
var yNow = current.getFullYear();
let date_1 = new Date("4/11/2023");
let date_2 = new Date(`${mNow}/${dNow}/${yNow}`);
const days = (date_1, date_2) => {
  let difference = date_1.getTime() - date_2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return Math.abs(TotalDays);
};

const str = days(date_1, date_2);
time.innerHTML = `${str} days since last rerun`;
// E:\DataCode\web\shootingStart
