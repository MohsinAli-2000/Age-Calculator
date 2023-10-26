let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");


let calculateAge = () => {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth();
  let y1 = birthDate.getFullYear();
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 < d1) {
    m3--;
    let daysInLastMonth = getDaysInMonth(y1, m1);
    d3 = daysInLastMonth + d2 - d1;
  } else {
    d3 = d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

result.innerHTML = `Your age is ${y3} years, ${m3} month and ${d3} days.` 
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
