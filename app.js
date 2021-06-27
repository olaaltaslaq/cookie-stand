'use strict';

let info = document.getElementById('salmonCookies');

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookieList: [],
  CookieNum:0,

  getCookieNum: function () {
    return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avg);

  },

  render: function () {

    function addTheCookieCity (city) {
      let cookie;
      let randomCookie;
      let cookieSum;
      let naming;
      let unOrderCookie;
      let hourlyCookie;
      let totalCookie;


      for (let i = 0; i < city.length; i++){
        naming = document.createElement('h1');
        unOrderCookie = document.createElement('ul');
        cookieSum = 0;

        for (let j = 6; j < 21 ; j++) {

          hourlyCookie = document.createElement('li');
          totalCookie = document.createElement('li');
          randomCookie = city[i].getCookieNum();
          cookieSum+=randomCookie;

          if (j<12) {
            cookie = [`${j}am: ${randomCookie} cookies`];
          }
          else if (j === 12 ){
            cookie = [`${j}pm: ${randomCookie} cookies`];
          }
          else {
            cookie = [`${j-12}pm: ${randomCookie} cookies`];
          }
          hourlyCookie.innerHTML = cookie;
          unOrderCookie.appendChild(hourlyCookie);
        }
        totalCookie.innerHTML=`Total: ${cookieSum} cookies`;
        unOrderCookie.appendChild(totalCookie);
        naming.innerHTML=city[i].name;
        info.appendChild(naming);
        info.appendChild(unOrderCookie);
      }
    }

    let city = [seattle];
    addTheCookieCity(city);

  }
};
seattle.render();


let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookieList: [],
  CookieNum:0,

  getCookieNum: function () {
    return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avg);

  },

  render: function () {

    function addTheCookieCity (city) {
      let cookie;
      let randomCookie;
      let cookieSum;
      let naming;
      let unOrderCookie;
      let hourlyCookie;
      let totalCookie;


      for (let i = 0; i < city.length; i++){
        naming = document.createElement('h1');
        unOrderCookie = document.createElement('ul');
        cookieSum = 0;

        for (let j = 6; j < 21 ; j++) {

          hourlyCookie = document.createElement('li');
          totalCookie = document.createElement('li');
          randomCookie = city[i].getCookieNum();
          cookieSum+=randomCookie;

          if (j<12) {
            cookie = [`${j}am: ${randomCookie} cookies`];
          }
          else if (j === 12 ){
            cookie = [`${j}pm: ${randomCookie} cookies`];
          }
          else {
            cookie = [`${j-12}pm: ${randomCookie} cookies`];
          }
          hourlyCookie.innerHTML = cookie;
          unOrderCookie.appendChild(hourlyCookie);
        }
        totalCookie.innerHTML=`Total: ${cookieSum} cookies`;
        unOrderCookie.appendChild(totalCookie);
        naming.innerHTML=city[i].name;
        info.appendChild(naming);
        info.appendChild(unOrderCookie);
      }
    }

    let city = [tokyo];
    addTheCookieCity(city);

  }
};
tokyo.render();


let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookieList: [],
  CookieNum:0,

  getCookieNum: function () {
    return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avg);

  },

  render: function () {

    function addTheCookieCity (city) {
      let cookie;
      let randomCookie;
      let cookieSum;
      let naming;
      let unOrderCookie;
      let hourlyCookie;
      let totalCookie;


      for (let i = 0; i < city.length; i++){
        naming = document.createElement('h1');
        unOrderCookie = document.createElement('ul');
        cookieSum = 0;

        for (let j = 6; j < 21 ; j++) {

          hourlyCookie = document.createElement('li');
          totalCookie = document.createElement('li');
          randomCookie = city[i].getCookieNum();
          cookieSum+=randomCookie;

          if (j<12) {
            cookie = [`${j}am: ${randomCookie} cookies`];
          }
          else if (j === 12 ){
            cookie = [`${j}pm: ${randomCookie} cookies`];
          }
          else {
            cookie = [`${j-12}pm: ${randomCookie} cookies`];
          }
          hourlyCookie.innerHTML = cookie;
          unOrderCookie.appendChild(hourlyCookie);
        }
        totalCookie.innerHTML=`Total: ${cookieSum} cookies`;
        unOrderCookie.appendChild(totalCookie);
        naming.innerHTML=city[i].name;
        info.appendChild(naming);
        info.appendChild(unOrderCookie);
      }
    }

    let city = [dubai];
    addTheCookieCity(city);

  }
};
dubai.render();


let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookieList: [],
  CookieNum:0,

  getCookieNum: function () {
    return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avg);

  },

  render: function () {

    function addTheCookieCity (city) {
      let cookie;
      let randomCookie;
      let cookieSum;
      let naming;
      let unOrderCookie;
      let hourlyCookie;
      let totalCookie;


      for (let i = 0; i < city.length; i++){
        naming = document.createElement('h1');
        unOrderCookie = document.createElement('ul');
        cookieSum = 0;

        for (let j = 6; j < 21 ; j++) {

          hourlyCookie = document.createElement('li');
          totalCookie = document.createElement('li');
          randomCookie = city[i].getCookieNum();
          cookieSum+=randomCookie;

          if (j<12) {
            cookie = [`${j}am: ${randomCookie} cookies`];
          }
          else if (j === 12 ){
            cookie = [`${j}pm: ${randomCookie} cookies`];
          }
          else {
            cookie = [`${j-12}pm: ${randomCookie} cookies`];
          }
          hourlyCookie.innerHTML = cookie;
          unOrderCookie.appendChild(hourlyCookie);
        }
        totalCookie.innerHTML=`Total: ${cookieSum} cookies`;
        unOrderCookie.appendChild(totalCookie);
        naming.innerHTML=city[i].name;
        info.appendChild(naming);
        info.appendChild(unOrderCookie);
      }
    }

    let city = [paris];
    addTheCookieCity(city);

  }
};
paris.render();


let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookieList: [],
  CookieNum:0,

  getCookieNum: function () {
    return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avg);

  },

  render: function () {

    function addTheCookieCity (city) {
      let cookie;
      let randomCookie;
      let cookieSum;
      let naming;
      let unOrderCookie;
      let hourlyCookie;
      let totalCookie;


      for (let i = 0; i < city.length; i++){
        naming = document.createElement('h1');
        unOrderCookie = document.createElement('ul');
        cookieSum = 0;

        for (let j = 6; j < 21 ; j++) {

          hourlyCookie = document.createElement('li');
          totalCookie = document.createElement('li');
          randomCookie = city[i].getCookieNum();
          cookieSum+=randomCookie;

          if (j<12) {
            cookie = [`${j}am: ${randomCookie} cookies`];
          }
          else if (j === 12 ){
            cookie = [`${j}pm: ${randomCookie} cookies`];
          }
          else {
            cookie = [`${j-12}pm: ${randomCookie} cookies`];
          }
          hourlyCookie.innerHTML = cookie;
          unOrderCookie.appendChild(hourlyCookie);
        }
        totalCookie.innerHTML=`Total: ${cookieSum} cookies`;
        unOrderCookie.appendChild(totalCookie);
        naming.innerHTML=city[i].name;
        info.appendChild(naming);
        info.appendChild(unOrderCookie);
      }
    }

    let city = [lima];
    addTheCookieCity(city);

  }
};
lima.render();

