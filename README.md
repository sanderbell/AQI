# Emojified Air Quality in Chiang Mai

![Live Air Quality](./demo.png "Live Air Quality") 

## Overview

Emojified Air Quality in Chiang Mai is a web application that provides real-time Air Quality Index (AQI) data for Chiang Mai. The app fetches the latest AQI data from an API and presents it in a visually appealing and user-friendly manner. Additionally, the application implements caching to improve performance and reduce API calls, ensuring a seamless user experience.

## Features

### 1. Dynamic Background

The webpage's background changes dynamically based on the current air quality level. This visual representation helps users quickly assess the air quality without reading the numerical value.

### 2. AQI Display

The application prominently displays the AQI value in a large font size, making it easy to read and understand. Users can quickly grasp the air quality status at a glance.

### 3. Favicon and Title Update

The webpage's favicon and title are updated in real-time to reflect the current air quality level. This small yet significant feature allows users to identify the air quality even when they switch to other browser tabs.

### 4. Caching

To optimize performance and minimize API calls, the application utilizes local storage for caching AQI data. Subsequent visits to the webpage will rely on the cached data, providing a faster and smoother user experience.

## Technologies Used

- HTML: Provides the structure and markup of the webpage.
- CSS: Handles the styling and visual presentation of the webpage.
- JavaScript: Fetches data from the API, manipulates the DOM, handles dynamic content updates, and implements caching.

## Usage

1. Upon loading the webpage, the application fetches the current air quality data from the API.
2. The retrieved data is cached in the local storage for future visits, reducing the need for repeated API calls.
3. The dynamic background color, AQI value, and favicon are updated based on the received data, providing an instant overview of the air quality.
4. Users can easily view the current AQI value and understand the interpretation of the air quality level.
5. The webpage is designed to be responsive and can adapt to different devices for a seamless user experience.

## Acknowledgments

- The project utilizes data from the [AirVisual API](https://www.airvisual.com/air-pollution-data-api).
- The design and implementation of the application were inspired by the importance of air quality awareness.

## How to Contribute

We welcome contributions to this project! If you find any bugs or have ideas for improvements, please submit an issue on the [GitHub repository](https://github.com/sanderbell/AQI) or feel free to create a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.
