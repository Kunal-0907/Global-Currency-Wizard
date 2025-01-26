# Global Currency Wizard 🌍

A responsive and user-friendly web application that allows users to convert currencies in real-time using the ExchangeRate API. The application is designed with a modern UI and supports dynamic flag updates, currency swapping, and real-time exchange rates.

## Features

- **Real-Time Currency Conversion**: Fetches live exchange rates from the ExchangeRate API.
- **Currency Swapping**: Easily switch between "From" and "To" currencies.
- **Dynamic Flag Updates**: Displays country flags for selected currencies.
- **Optional Date Picker**: Allows selecting a date for historical rates (future enhancement).

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling and responsive design.
- **JavaScript**: Logic for fetching exchange rates and updating the UI.
- **npm & live-server**: For local development and automatic browser refresh.

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd currency-converter
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Application**:
   ```bash
   npm start
   ```
   This will start the project locally using `live-server`.

## How It Works

- Enter an amount to convert.
- Select "From" and "To" currencies using the dropdown menus.
- Click **Get Exchange Rate** to fetch and display the conversion result.
- Use the **Swap** button to quickly switch the selected currencies.

## Future Enhancements

- Add support for historical exchange rates using the date picker.
- Deploy the application to a live server (e.g., Netlify, GitHub Pages).

## License

This project is licensed under the ISC License. You are free to use, modify, and distribute this project.

## Author

Developed by **Kunal Sharma**.

## Acknowledgments

- Thanks to the **ExchangeRate API** for providing real-time exchange rates.

