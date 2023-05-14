(function () {
  // 'use strict';
  try {
    // async function getAqi() {

    //   const rawData = await fetch(
    //     'https://api.airvisual.com/v2/nearest_city?lat=18.7883&lon=98.9853&key=0fcbe316-1ca4-4621-a9d2-329e605f7c98'
    //   );

    //   const jsoned = await rawData.json();
    //   let aqi = await jsoned.data.current.pollution.aqius;

    function getAqi() {
      ////////////// for testing purposes
      aqi = 12; ////////////// for testing purposes

      return uiChanger(aqi);
    }
  } catch (error) {
    console.log('An error occurred:', error);
  }

  function uiChanger(aqi) {
    const body = document.querySelector('body');
    let bgContainer = document.querySelector('#background-container');
    let emoji, diagnosis, favicon;

    document.querySelector('#spinner').style.display = 'none'; // Hiding the spinner

    // Preparing UI variables based upon AQI:
    if (aqi < 51) {
      body.style.backgroundColor = '#83d77d';
      emoji = '/static/emoji/good.png';
      favicon = '/static/favicons/good.ico';
      diagnosis = 'good';
    } else if (aqi >= 50 && aqi < 100) {
      body.style.backgroundColor = '#f5b200';
      emoji = '/static/emoji/moderate.png';
      favicon = '/static/favicons/moderate.ico';
      diagnosis = 'okayish';
    } else if (aqi >= 100 && aqi < 150) {
      body.style.backgroundColor = '#ff8119';
      emoji = '/static/emoji/ufsg.png';
      favicon = '/static/favicons/ufsg.ico';
      diagnosis = 'unhealthy for sensitive groups';
    } else if (aqi >= 150 && aqi < 200) {
      body.style.backgroundColor = '#e55659';
      emoji = '/static/emoji/unhealthy.png';
      favicon = '/static/favicons/unhealthy.ico';
      diagnosis = 'unhealthy';
    } else if (aqi >= 200 && aqi < 300) {
      body.style.backgroundColor = '#9d75b6';
      emoji = '/static/emoji/very-unhealthy.png';
      favicon = '/static/favicons/very-unhealthy.ico';
      diagnosis = 'very unhealthy';
    } else if (aqi >= 300) {
      body.style.backgroundColor = '#3a2c3d';
      favicon = '/static/favicons/hazardous.ico';
      emoji = '/static/emoji/hazardous.png';
      diagnosis = 'hazardous';
    }

    // Changing the favicon:
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
      existingFavicon.remove();
    }
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/png';
    faviconLink.href = favicon;
    document.head.appendChild(faviconLink);

    bgContainer.style.backgroundImage = `url(${emoji})`; // Changing the background
    document.querySelector('#aqi').textContent = `${aqi}`; // Changing AQI — the main content
    document.querySelector('title').textContent = `The air is ${diagnosis}!`; // Changing the page title
  }

  getAqi();
})();
