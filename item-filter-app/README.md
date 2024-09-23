# Item Filter App

This React application allows users to filter, add, and delete items from a list. The app uses Redux Toolkit for state management and is styled with Tailwind CSS.

## Features

- **Search Functionality**: Filter items in real-time using the search bar.
- **Add Items**: Users can add new items to the list.
- **Delete Items**: Users can delete items from the list.
- **State Management**: Redux Toolkit is used for efficient and scalable state management.
- **Tailwind CSS**: The app is styled with Tailwind CSS for a modern, responsive design.

## Demo

The application provides a simple user interface for:
- Adding items dynamically.
- Filtering items based on search input.
- Deleting items from the list.

## Project Structure

```plaintext
src
├── components
│   ├── Header.js         # Header of the app
│   ├── SearchBar.js      # Search functionality component
│   ├── ItemList.js       # Renders a list of items
│   ├── Item.js           # Individual item component
├── redux
│   ├── itemsSlice.js     # Redux slice to handle item state
│   ├── store.js          # Redux store configuration
├── App.js                # Main app component
├── index.js              # Entry point of the app
```

## Prerequisites

Ensure that you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/item-filter-app.git
   cd item-filter-app
   ```

2. **Install dependencies:**

   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

3. **Install Tailwind CSS:**

   Tailwind CSS has already been set up, but ensure it's installed by running:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

   You can configure Tailwind in the `tailwind.config.js` file as needed.

4. **Start the development server:**

   Run the app in development mode using the following command:

   ```bash
   cd item-filter-app
   ```

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000/`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production into the `build` folder.

### `npm test`

Launches the test runner in interactive watch mode using Jest and React Testing Library.

## Key Features & Implementation Notes

1. **Redux Toolkit for State Management:**
   - All item-related state (items, search term) is managed using Redux Toolkit.
   - `src/redux/itemsSlice.js` manages adding, deleting, and filtering items.

2. **Item Management:**
   - New items are added using an input field and dispatched to the Redux store.
   - Items can be deleted by clicking the delete button next to each item.

3. **Search Functionality:**
   - The search bar filters items in real time.
   - The search is case-insensitive, allowing flexible user input.

4. **Tailwind CSS for Styling:**
   - The app uses Tailwind CSS for responsive and modern styling.
   - Components like buttons, inputs, and the item list are all styled with Tailwind.

5. **Performance Optimization:**
   - The `Item.js` component is wrapped with `React.memo` to avoid unnecessary re-renders.
   - Redux keeps the state centralized for better performance and scalability.

## Folder Structure

- **src/components**: Contains React components like `ItemList`, `Item`, `SearchBar`, and `Header`.
- **src/redux**: Contains Redux slice (`itemsSlice.js`) and store configuration (`store.js`).
- **src/index.js**: The entry point that renders the `App` component.

---
