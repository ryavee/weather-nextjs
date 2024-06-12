# Weather App
# Link
https://weather-nextjs-omega.vercel.app/

## Overview
This Weather App is a web application that provides users with up-to-date weather forecasts for their specified locations. It fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface. Users can view current weather conditions, as well as forecasts for the next five days.

## Features
- **Current Weather:** Display current weather conditions, including temperature, humidity, wind speed, and visibility.
- **Hourly Forecast:** Show hourly weather forecast for the next few hours.
- **Daily Forecast:** Provide a daily weather forecast for the next five days.
- **Search Functionality:** Allow users to search for weather forecasts by location.
- **Responsive Design:** Ensure the app is optimized for various screen sizes, including desktop and mobile devices.

## Technologies Used
- **Next.js:** React framework for building server-side rendered (SSR) React applications.
- **React Query:** Library for fetching and caching data in React applications.
- **Tailwind CSS:** Utility-first CSS framework for styling the app.
- **Axios:** Promise-based HTTP client for making requests to the OpenWeatherMap API.
- **Date-fns:** Library for manipulating dates and times in JavaScript.

## Setup and Running the App Locally

### Prerequisites
Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ryavee/weather-nextjs.git
    cd weather-nextjs
    ```

2. **Install dependencies:**
    If you are using npm:
    ```bash
    npm install
    ```
    If you are using Yarn:
    ```bash
    yarn install
    ```

3. **Set up environment variables:**
    Create a `.env.local` file in the root directory of your project and add your OpenWeatherMap API key:
    ```env
    NEXT_PUBLIC_WEATHER_KEY=your_openweathermap_api_key
    ```

4. **Run the development server:**
    If you are using npm:
    ```bash
    npm run dev
    ```
    If you are using Yarn:
    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

### Building and Running for Production

1. **Build the application:**
    If you are using npm:
    ```bash
    npm run build
    ```
    If you are using Yarn:
    ```bash
    yarn build
    ```

2. **Start the production server:**
    If you are using npm:
    ```bash
    npm start
    ```
    If you are using Yarn:
    ```bash
    yarn start
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running in production mode.

## Contributing
If you would like to contribute to this project, please fork the repository and create a pull request with your changes. We welcome all contributions!

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
