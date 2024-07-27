# NewsCross - Top Headlines Website

## Overview
NewsCross is a web application that provides users with the latest top headlines from various topics such as general news, technology, sports, and more. The application is built using React, Bootstrap, and fetches news data from the NewsAPI.org.

## Features
- Display top headlines for various categories.
- Infinite scrolling to load more news articles as the user scrolls.
- Category selection to filter news by topic.
- Responsive design using Bootstrap.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for developing responsive and mobile-first websites.
- **NewsAPI.org**: A simple HTTP REST API for searching and retrieving live articles from all over the web.

## Setup and Installation

### Prerequisites
- Node.js and npm installed on your machine.
- A NewsAPI.org API key. You can get one by signing up at [NewsAPI.org](https://newsapi.org/register).

### Steps to Run the Project

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/newscross.git
    cd newscross
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Create Environment Variables File**
    - Create a `.env` file in the root directory of the project.
    - Add your NewsAPI.org API key in the `.env` file:
      ```env
      VITE_NEWS_API_KEY=your_actual_news_api_key
      ```

4. **Start the Development Server**
    ```bash
    npm run dev
    ```

5. **Build for Production**
    ```bash
    npm run build
    ```

6. **Preview the Production Build**
    ```bash
    npm run serve
    ```

### Project Structure
```
newscross/
├── public/
├── src/
│   ├── components/
│   │   ├── News.jsx
│   │   ├── Newsitem.jsx
│   │   └── Spinner.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## Component Overview

### `News.jsx`
The main component responsible for fetching and displaying news articles. It uses the NewsAPI.org to fetch top headlines and handles pagination and infinite scrolling.

### `Newsitem.jsx`
A component to display individual news articles including the title, description, and image.

### `Spinner.jsx`
A simple spinner component to show a loading indicator while news articles are being fetched.

