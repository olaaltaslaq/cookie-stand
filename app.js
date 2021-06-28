'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let CookieIn = [];

function CookieInfo(name, min, max, avg) {

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.randCust=[],
  this.avgCookiesPerH=[],
  this.total=0,

  CookieIn.push(this);
}


CookieInfo.prototype.calcRandCustPerH= function() {
  for(let i =0; i < hours.length; i++){
    let min = Math.ceil(this.min);
    let max = Math.floor(this.max);
    let randCust = Math.floor(Math.random() * (max - min) + min);
    this.randCust.push(randCust);
  }
};

CookieInfo.prototype.calcAngCookiesPerH= function() {
  for(let i =0; i < hours.length; i++){
    this.avgCookiesPerH[i]=Math.floor(this.randCust[i] * this.avg);
    this.total = this.total + this.avgCookiesPerH[i];
  }
};


let container = document.getElementById('salmonCookies');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function createTableHeader() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thEl1 = document.createElement('th');
  thEl1.textContent = '-';
  trEl.appendChild(thEl1);

  for(let i = 0; i < hours.length; i++) {
    let thEl2 = document.createElement('th');
    thEl2.textContent = hours[i];
    trEl.appendChild(thEl2);
  }

  let thEl3 = document.createElement('th');
  thEl3.textContent = 'Daily Location Total';
  trEl.appendChild(thEl3);
}

createTableHeader();

let seattle = new CookieInfo('Seattle', 23, 65, 6.3);
seattle.calcRandCustPerH();
seattle.calcAngCookiesPerH();


let tokyo = new CookieInfo('Tokyo', 3, 24, 1.2);
tokyo.calcRandCustPerH();
tokyo.calcAngCookiesPerH();


let dubai = new CookieInfo('Dubai', 11, 38, 3.7);
dubai.calcRandCustPerH();
dubai.calcAngCookiesPerH();


let paris = new CookieInfo('Paris', 20, 38, 2.3);
paris.calcRandCustPerH();
paris.calcAngCookiesPerH();


let lima = new CookieInfo('liam', 2, 16, 4.6);
lima.calcRandCustPerH();
lima.calcAngCookiesPerH();


for(let i=0;i < CookieIn.length;i++){
  let trEl = document.createElement('tr');

  let td1 = document.createElement('td');
  td1.textContent = CookieIn[i].name;
  trEl.appendChild(td1);



  let td2 = document.createElement('td');
  td2.textContent = CookieIn[i].avgCookiesPerH;
  trEl.appendChild(td2);

  tableEl.appendChild(trEl);
}


function makeTableFooter() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thEl10 = document.createElement('th');
  thEl10.textContent = 'Totals';
  trEl.appendChild(thEl10);

//   let hourlyTotal = 0;
//   let totalOfTotals = 0;
//   for(let i = 0; i < hours.length; i++) {
//     hourlyTotal = 0;
//     for(let j = 0; j < CookieInfo.avgCookiesPerH.length; j++) {
//       let total = CookieInfo.avgCookiesPerH[j].randCust[i];
//       hourlyTotal += total;
//       totalOfTotals += total;
//     }
//     let thEl10 = document.createElement('th');
//     thEl10.textContent = hourlyTotal;
//     trEl.appendChild(thEl10);
//   }

//   let thEl11 = document.createElement('th');
//   thEl11.textContent = totalOfTotals;
//   trEl.appendChild(thEl10); 
//

}

makeTableFooter();

console.log(CookieIn);

