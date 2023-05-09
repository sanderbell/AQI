(function () {
  'use strict';

  async function getAqi() {
    const rawData = await fetch(
      'http://api.airvisual.com/v2/nearest_city?lat=18.7883&lon=98.9853&key=0fcbe316-1ca4-4621-a9d2-329e605f7c98'
    );

    const jsoned = await rawData.json();
    let result = await jsoned.data.current.pollution.aqius;
    // let result = 2290; // For testing purposes
    document.querySelector('#aqi').textContent = document.querySelector(
      'title'
    ).textContent = `${result}`;

    document.querySelector('#spinner').style.display = 'none';

    if (result < 51) {
      console.log('GOOD');
      document.querySelector('html').style.backgroundColor = '#a2d693';
      document.querySelector('#good').style.display = 'block';
    } else if (result >= 50 && result < 100) {
      document.querySelector('html').style.backgroundColor = '#dfc500';
      document.querySelector('#moderate').style.display = 'block';
    } else if (result >= 100 && result < 150) {
      document.querySelector('html').style.backgroundColor = '#ff8119';
      document.querySelector('#unhealthy-fsg').style.display =
        'block';
    } else if (result >= 150 && result < 200) {
      document.querySelector('html').style.backgroundColor = '#e55659';
      document.querySelector('#unhealthy').style.display = 'block';
    } else if (result >= 200 && result < 300) {
      document.querySelector('html').style.backgroundColor = '#9d75b6';
      document.querySelector('#very-unhealthy').style.display = 'block';
    } else if (result >= 300) {
      document.querySelector('html').style.backgroundColor = '#513e55';
      document.querySelector('#hazardous').style.display = 'block';
    }
  }
  getAqi();
})();
