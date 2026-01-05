# 🎬 Movie Search App — React + REST API

This project is a complete **single-page application (SPA)** built with **React**, focused on consuming a **REST API** and rendering data dynamically **without page reloads**.

The app interacts with the **OMDb API (Open Movie Database)** to fetch and display movies and TV series in real time, offering search, infinite scroll, detailed views, and a persistent favorites system.

🔗 OMDb API: https://www.omdbapi.com/

The project is live at:
🔗 https://moviebrowser-8da01.web.app

---

## 🎯 Project Overview

The application connects to the **OMDb API** (Open Movie Database), an open API that provides information about movies and TV shows:

🔗 https://www.omdbapi.com/

Before starting the development, part of the work involves studying the API documentation and testing different queries to understand how it behaves.

The application is built entirely with React and behaves as a true SPA, preserving UI state and scroll position during navigation.

The project is live at:
🔗 

---

## 🚀 Features

### ✔️ API Requests (AJAX / Fetch)
- All data is retrieved asynchronously using the **Fetch API**.
- API calls are managed through React lifecycle using `useEffect`.
- The UI updates instantly based on state changes.

---

### ✔️ Search Results
- Movies and series returned from the OMDb API are displayed in a **responsive grid layout**.
- Each item is rendered as a reusable React component.
- Clicking on a movie opens a **detail view** with full information.
- Results are paginated by the API (**10 items per page**).

---

### ✔️ Infinite Scroll
- The app implements **infinite scrolling** instead of a “Load More” button.
- When the user scrolls near the bottom, the next page of results is automatically fetched.
- New results are appended to the existing list using React state.

---

### ✔️ Search Filters
- Users can search for both **movies and series**.  
- Automatic search triggers after **typing at least 3 characters**.
- Search input is controlled via React state.

---

### ✔️ Movie / Series Detail View
- Clicking on a result opens a detailed view showing information such as:
  - Poster  
  - Director  
  - Actors  
  - Plot / Synopsis  
  - Year  
  - Ratings from all available sources  
- Navigation back to the results list **preserves scroll position and search state**.
- Implemented using conditional rendering.

---

### ⌛ Favorites System
- Users can **mark movies as favorites** by clicking on a heart icon overlaying each poster.  
- Favorited movies are **stored in `localStorage`**, so they persist even after refreshing the page.  
- Users can **add or remove movies from favorites** dynamically from both the search results and the favorites page.  
- The **Favorites page** displays all saved movies in a grid layout, with the ability to un-favorite them.  
- Favorites are synchronized with the heart icons, so previously saved movies appear with a **filled heart** in search results.


---

## 🛠️ Technologies Used

- **React (Hooks & Functional Components)**  
- **JavaScript (ES6+)**  
- **HTML5**  
- **CSS3**  
- **Fetch API**  
- **REST API consumption (OMDb)**  
- **localStorage for persistence**