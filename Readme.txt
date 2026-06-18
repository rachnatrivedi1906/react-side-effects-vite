========================================
React Programming Joke Fetcher - Readme
========================================

Overview:
---------
This React application fetches and displays programming jokes from a public API. 
It supports both automatic fetching on initial page load (mount) and manual 
fetching via user interaction.

Features:
---------
1. Initial Data Fetch: Automatically fetches a joke when the component mounts.
2. User Interaction: Clicking the "Get a New Joke" button fetches a new joke.
3. Loading State: Displays "Loading..." while waiting for the API response.
4. Error Handling: Gracefully displays an error message if the fetch fails.

Technical Stack & Dependencies:
-------------------------------
- React 19 (useState, useEffect hooks)
- Vite (Dev server and bundler)
- Vitest (Testing framework)
- HTML5 / CSS3 (Responsive minimalist styling)

Setup and Installation:
-----------------------
1. Navigate to the project root directory:
   cd react-side-effects-vite

2. Install all required dependencies:
   npm install

3. Run the development server locally:
   npm run dev
   The application will be accessible at http://localhost:5173

4. Run the test suite:
   npm run test

Usage Guide:
------------
- On page load, the application will automatically perform a GET request to:
  https://v2.jokeapi.dev/joke/Programming?type=single
  
  During this fetch, you will see a "Loading..." text display.
  
- Click the "Get a New Joke" button to refresh and fetch a new joke.

- If there are network issues or API failures, a clear error message is shown 
  in place of the joke.

Component Structure:
--------------------
- src/App.jsx: 
  - Manages joke state, loading state, and error state.
  - Implements the API fetch request inside a `useEffect` hook.
  - Passes state and handlers to subcomponents.

- src/components/JokeDisplay.jsx:
  - Accepts `joke`, `loading`, and `error` as props.
  - Renders exactly one <p> tag containing either the loading text, the error, 
    or the fetched joke.

- src/components/FetchButton.jsx:
  - Accepts `fetchJoke` callback as a prop.
  - Renders exactly one <button> element to fetch a new joke.
