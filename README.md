# News Explorer: Back End

NewsExplorer is a web application that allows users to search for news articles, read them, and save their favorite ones for later. Whether you're looking for the latest headlines or deep-diving into specific topics, NewsExplorer provides a clean and intuitive interface for discovering and managing news content.

The backend for this project can be found at [News  Explorer Backend Repository](https://github.com/NeysonAdams/news-explorer-backend).

## Features
 1. ### User Authentication and Identification:
    - Secure user registration with email and password.
    - User login with email and password.
    - Persistent user sessions using JWT (JSON Web Tokens) to keep users logged in across visits.
    - Auto-identification of users on subsequent visits using stored JWT tokens
    - Logout functionality to securely end user sessions.
 2. ### News Data Integration:
    - Integration with the [News API](https://newsapi.org/) to fetch new accoring the toppic.
    - Easily search for news articles by keywords across various categories and sources
### Profile Management:
    - Users can  remove stored articles from the list

### Installation
 1. Clone the repository:
    ```bash
        git clone https://github.com/NeysonAdams/newx-explorer--frontend.git
    ```
 2. Navigate to the project directory:
    ```bash
        cd newx-explorer--frontend
    ```
 3. Install the dependencies:
    ```bash
        npm install
    ```
 4. Running the Application
    To start the development server, run:
    ```bash
        npm start
    ```
    runing in Dev Mode
    ```bash
        npm run dev
    ```
    The application will be available at http://localhost:5173/.

## Usage
After starting the application, you can:
- Register a new user or log in with existing credentials.
- Search for news articles by keywords across various categories and sources.
- Browse and read full articles directly within the application.
- Save articles you find interesting or important to your personal collection for easy access later.

## Links

- [Figma Design](https://www.figma.com/design/3ottwMEhlBt95Dbn8dw1NH/Your-Final-Project?node-id=22618-133&t=VMIA24Z6tQU2QsVN-0)
- [Lin ](https://www.marconi.cow.strangled.net/)