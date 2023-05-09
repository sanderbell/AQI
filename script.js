(function () {
  'use strict';

  async function getAqi() {
    const rawData = await fetch(
      'https://api.airvisual.com/v2/nearest_city?lat=18.7883&lon=98.9853&key=0fcbe316-1ca4-4621-a9d2-329e605f7c98'
    );

    const jsoned = await rawData.json();
    let result = await jsoned.data.current.pollution.aqius;

    let emoji;
    let body = document.querySelector('body');
    if (result < 51) {
      body.style.backgroundColor = '#83d77d';
      emoji = '😍';
    } else if (result >= 50 && result < 100) {
      body.style.backgroundColor = '#f5bb00';
      emoji = '😌';
    } else if (result >= 100 && result < 150) {
      body.style.backgroundColor = '#ff8119';
      emoji = '😑';
    } else if (result >= 150 && result < 200) {
      body.style.backgroundColor = '#e55659';
      emoji = '🙁';
    } else if (result >= 200 && result < 300) {
      body.style.backgroundColor = '#9d75b6';
      emoji = '🥴';
    } else if (result >= 300) {
      body.style.backgroundColor = '#513e55';
      emoji = '💀';
    }
    document.querySelector('#aqi').textContent = `${result}${emoji}`;
    document.querySelector(
      'title'
    ).textContent = `${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji}`;
    20;

    document.querySelector('#spinner').style.display = 'none';
  }
  getAqi();
})();
