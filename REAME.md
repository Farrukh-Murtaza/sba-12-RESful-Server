# Movie Finder API

A Node.js and Express REST API that uses the [OMDb API](http://www.omdbapi.com/) to search for movies and retrieve detailed information about a specific movie.

The application follows a simple separation of concerns using **routes**, **controllers**, and an **Axios API client**.

## Features

* Search for movies by title
* Get detailed information about a specific movie using its IMDb ID
* Uses the OMDb API for movie data
* Uses Axios for HTTP requests
* Uses environment variables to securely store the OMDb API key
* Includes input validation
* Includes `try...catch` error handling
* Uses Express Router for API routes
* Keeps the API key out of version control

---

## Technologies Used

* **Node.js**
* **Express.js**
* **Axios**
* **dotenv**
* **OMDb API**

---

## Project Structure

```text
movie-finder-api/
│
├── client/
│   └── omdbClient.js
│
├── controllers/
│   └── movieController.js
│
├── routes/
│   └── movieRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

### Folder Responsibilities

**`server.js`**

The main entry point of the application. It:

* Loads environment variables
* Creates the Express application
* Configures middleware
* Mounts the movie routes
* Starts the server

**`routes/movieRoutes.js`**

Defines the API endpoints and connects them to the appropriate controller functions.

**`controllers/movieController.js`**

Contains the application logic for:

* Searching movies
* Fetching movie details
* Validating request parameters
* Handling API errors

**`client/omdbClient.js`**

Contains the Axios configuration used to communicate with the OMDb API.

---

## Getting Started

### 1. Clone the Repository

Clone the GitHub repository to your local machine:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Then navigate into the project:

```bash
cd movie-finder-api
```

---

### 2. Initialize the Project

If you are creating the project from scratch:

```bash
npm init -y
```

---

### 3. Install Dependencies

Install the required packages:

```bash
npm install express axios dotenv
```

---

## OMDb API Key

This project requires an API key from the OMDb API.

Visit:

http://www.omdbapi.com/apikey.aspx

Select the **FREE** plan and request an API key using your email address.

After receiving your API key, create a `.env` file in the root directory.

### `.env`

```env
OMDB_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual OMDb API key.

### Important

**Never commit your `.env` file to GitHub.**

The `.gitignore` file should contain:

```gitignore
node_modules/
.env
```

This prevents your API key and installed dependencies from being uploaded to the repository.

---

## Running the Server

Start the application with:

```bash
node server.js
```

You should see a message similar to:

```text
Server is running on http://localhost:3001
```

The server uses port `3001` by default.

---

## API Endpoints

All movie routes are prefixed with:

```text
/api
```

### 1. Search Movies

Search for movies using a title.

**Endpoint:**

```http
GET /api/search?title=<movie-title>
```

**Example:**

```text
http://localhost:3001/api/search?title=batman
```

**Example using `curl`:**

```bash
curl "http://localhost:3001/api/search?title=batman"
```

The request is sent to the OMDb API using the `s` parameter.

---

### 2. Get Movie Details

Retrieve information about a specific movie using its IMDb ID.

**Endpoint:**

```http
GET /api/movies/:id
```

**Example:**

```text
http://localhost:3001/api/movies/tt0372784
```

**Example using `curl`:**

```bash
curl "http://localhost:3001/api/movies/tt0372784"
```

The request uses the OMDb API's `i` parameter.

---

## Validation

The movie search endpoint requires a `title` query parameter.

If the parameter is missing:

```text
GET /api/search
```

the API returns:

```json
{
  "error": "Title query parameter is required"
}
```

with an HTTP status of:

```text
400 Bad Request
```

---

## Error Handling

The application uses `try...catch` blocks when communicating with the OMDb API.

If an error occurs while communicating with OMDb, the API returns an appropriate HTTP error response instead of leaving the request unresolved.

Example:

```json
{
  "error": "Failed to fetch movies from OMDb"
}
```

---

## Testing

You can test the API using:

* A web browser
* Postman
* cURL

### Test Movie Search

Open:

```text
http://localhost:3001/api/search?title=batman
```

### Test Movie Details

Open:

```text
http://localhost:3001/api/movies/tt0372784
```

### Test Validation

Open:

```text
http://localhost:3001/api/search
```

Expected response:

```json
{
  "error": "Title query parameter is required"
}
```

---

## Security

The OMDb API key is stored in an environment variable:

```env
OMDB_API_KEY=your_api_key_here
```

The `.env` file is excluded from Git using `.gitignore`.

Before submitting the project, verify that `.env` is **not** tracked by Git:

```bash
git status
```

If `.env` appears as a tracked file, remove it from Git tracking before pushing the repository.

---

## GitHub Submission

Before submitting:

1. Make sure the application runs successfully.
2. Test both required endpoints.
3. Test the missing `title` validation.
4. Confirm `.env` is not included in the repository.
5. Push the completed project to GitHub.
6. Submit the GitHub repository URL.

Example:

```text
https://github.com/your-username/movie-finder-api
```

---

## API Summary

| Method | Endpoint                   | Description                  |
| ------ | -------------------------- | ---------------------------- |
| GET    | `/api/search?title=batman` | Search movies by title       |
| GET    | `/api/movies/:id`          | Get movie details by IMDb ID |

---

## Author

**Farrukh Murtaza**

Built as part of a Node.js / Express API assessment.
