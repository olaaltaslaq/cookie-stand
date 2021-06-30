'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let container = document.getElementById('salmonCookies');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

let CookieIn = [];

function CookieInfo(name, min, max, avg) {

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.randCusts=[],
  this.avgCookiesPerH=[],
  this.total=0,

  CookieIn.push(this);
}


CookieInfo.prototype.calcRandCustPerH= function() {
  for(let i =0; i < hours.length; i++){
    let min = Math.ceil(this.min);
    let max = Math.floor(this.max);
    let randCust = Math.floor(Math.random() * (max - min) + min);
    this.randCusts.push(randCust);
  }
};

CookieInfo.prototype.calcAngCookiesPerH= function() {
  for(let i =0; i < hours.length; i++){
    this.avgCookiesPerH[i]=Math.floor(this.randCusts[i] * this.avg);
    this.total = this.total + this.avgCookiesPerH[i];
  }
};

CookieInfo.prototype.render = function () {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent= this.name;
  trEl.appendChild(tdEl);

  for (let i = 0; i < hours.length; i++) {
    let tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookiesPerH[i];
    trEl.appendChild(tdEl);
  }
  let tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = this.total;
  trEl.appendChild(tdTotalEl);

  tableEl.appendChild(trEl);
};

function createTableHeader() {
  let trEl = document.createElement('tr');
  let shopNameEl = document.createElement('th');
  trEl.appendChild(shopNameEl);
  shopNameEl.textContent = 'Shop Name';

  for (let i = 0; i < hours.length; i++) {
    let thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  let dailyTotalEl = document.createElement('th');
  trEl.appendChild(dailyTotalEl);
  dailyTotalEl.textContent = 'Daily Location Total';

  tableEl.appendChild(trEl);
}

function createFooter() {
  let tfootEl = document.createElement('tfoot');

  let tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  tfootEl.appendChild(tdEl);

  tableEl.appendChild(tfootEl);

  let megaTotal = 0;

  for (let h = 0; h < hours.length; h++) {
    let tdEl = document.createElement('td');
    let sum = 0;
    for (let s = 0; s < CookieIn.length; s++) {
      sum = sum + CookieIn[s].avgCookiesPerH[h];
    }
    megaTotal += sum;
    tdEl.textContent = sum;
    tfootEl.appendChild(tdEl);
  }
  let totaltdEl = document.createElement('td');
  totaltdEl.textContent = megaTotal;
  tfootEl.appendChild(totaltdEl);
}


let seattle = new CookieInfo('Seattle', 23, 65, 6.3);
let tokyo = new CookieInfo('Tokyo', 3, 24, 1.2);
let dubai = new CookieInfo('Dubai', 11, 38, 3.7);
let paris = new CookieInfo('Paris', 20, 38, 2.3);
let lima = new CookieInfo('liam', 2, 16, 4.6);

seattle.calcRandCustPerH();
seattle.calcAngCookiesPerH();

tokyo.calcRandCustPerH();
tokyo.calcAngCookiesPerH();

dubai.calcRandCustPerH();
dubai.calcAngCookiesPerH();

paris.calcRandCustPerH();
paris.calcAngCookiesPerH();

lima.calcRandCustPerH();
lima.calcAngCookiesPerH();

createTableHeader();

seattle.render();

tokyo.render();

dubai.render();

paris.render();

lima.render();

createFooter();


let myForm = document.getElementById('myForm');
myForm.addEventListener('submit',addShop);
function addShop(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;

  let newShop = new CookieInfo(name, min, max, avg);

  newShop.calcRandCustPerH();
  newShop.calcAngCookiesPerH();
  newShop.render();
}


createFooter();

