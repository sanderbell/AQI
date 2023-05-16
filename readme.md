# **Emojified Air Quality in Chiang Mai**

This web application displays the current Air Quality Index (AQI) for Chiang Mai. It retrieves real-time AQI data from an API and presents it in a visually appealing and user-friendly manner. The app also implements caching to improve performance and reduce API calls.

## Features

- Dynamic Background: The background of the webpage changes based on the current air quality level.
- AQI Display: The AQI value is prominently displayed in a large font size, making it easy to read and understand.
- Favicon Update: The favicon of the webpage is updated dynamically to reflect the current air quality level.
- Caching: The application utilizes local storage to cache the AQI data and minimize API calls for better performance.

## Technologies Used

- HTML: Provides the structure and markup of the webpage.
- CSS: Handles the styling and visual presentation of the webpage.
- JavaScript: Fetches data from the API, manipulates the DOM, handles dynamic content updates, and implements caching.

## Usage

- Upon loading the webpage, the application fetches the current air quality data from the API.
- The data is cached in the local storage to minimize API calls in subsequent visits.
- The background color, AQI value, and favicon are updated based on the received data.
- The user can view the AQI value and the interpretation of the air quality level.
- The webpage is responsive and can be viewed on different devices.

## Acknowledgments

- The project utilizes data from the [AirVisual API](https://www.airvisual.com/air-pollution-data-api).
- The design and implementation of the application were inspired by the importance of air quality awareness.