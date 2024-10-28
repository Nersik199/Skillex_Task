# Skillex Task

## Description

`skillex-task` is a Node.js application that generates combinations based on user input. It utilizes Express for the server framework, MySQL for data storage, and dotenv for environment variable management. This application is designed to handle tasks related to generating combinations and storing the results in a MySQL database.

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript code.
- **Express**: Web framework for building web applications and APIs.
- **MySQL**: Relational database management system for data storage.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **Nodemon**: Tool for automatically restarting the application when file changes are detected.

## API Endpoints

### Generate Combinations

- **POST** `/api/generate`

  This endpoint generates combinations based on the provided items and length.

  **Request URL: http://localhost:3000/api/generate**

  **Request Method:** `POST`

**Request Body:** (Content-Type: application/json)

```json
{
	"items": ["A1", "B1", "B2", "C1"],
	"length": 2
}
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following content:

```bash
# Server configuration
PORT=3000

# Database configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_DATABASE=tasks
```

4. **Start the server**

```bash
npm run dev
```

OR

```
yarn dev
```
