# WeatherJS 🌤️

WeatherJS is a modern, component-driven weather dashboard built using **Next.js** and **React**. It fetches real-time meteorological data and provides users with a clean, modular interface to check current conditions anywhere in the world.

## 🚀 Features

* **Auto-Geolocation:** Automatically requests browser location on load to fetch and display the user's local weather immediately.
* **City Search:** Includes a functional search bar allowing users to find weather data by typing a city name and pressing `Enter` or clicking search.
* **Comprehensive Metrics:** Breaks down weather data into clean, readable cards:
  * Location Details (City, Region, Country)
  * Temperature
  * Humidity
  * Wind Speed
  * Overall Conditions
* **Component-Based Architecture:** Built with highly modular React components for easy maintenance and scalability.

## 🛠️ Technologies Used

* **Framework:** [Next.js](https://nextjs.org/) (v16.1.6)
* **Library:** [React](https://react.dev/) (v19.2.3)
* **Styling:** CSS Modules
* **API:** [WeatherAPI](https://www.weatherapi.com/)

## 📂 Project Structure

```text
/src
├── app
│   ├── page.jsx                # Main application logic & API fetching
│   └── page.module.css         # Main layout styling
└── Components
    ├── ConditionCard
    ├── HumidityCard
    ├── LocationCard            # Displays Name, Region, Country
    ├── SearchBar               # Input field and search button
    ├── TemperatureCard
    └── WindSpeedCard

```

## 🔧 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install

```

Then, run the development server:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result. Allow the browser to access your location to see local weather data.

## ⚠️ Important Note on Environment Variables

Currently, the WeatherAPI key is hardcoded into the `fetch` URLs in `page.jsx`. For production deployments, it is highly recommended to move this key into a `.env.local` file to keep it secure and out of public repositories.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Made with ❤️ by Adrian Ablaza
