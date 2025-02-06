# Number Classification API
## Overview
The Number Classification API is a simple RESTful service that takes a number as input and returns mathematical properties about it, along with a fun fact. The API supports classification of numbers into prime, perfect, Armstrong, even, or odd.

**Example Usage:**
```bash
GET /api/classify-number?number=371
```
**Example JSON Response:**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Features
- Accepts a number as input via a GET request.
- Determines if the number is prime, perfect, Armstrong, even, or odd.
- Calculates the sum of its digits.
- Fetches a fun fact about the number from Numbers API.
- Returns responses in JSON format.
- CORS enabled for cross-origin requests.

## Tech Stack
- **Language:** Node JS (Javascript)
- **Framework:** Express JS (for HTTP routing)
- **Hosting:** Render

## Installation & Setup
### Clone the Repository
```bash
git clone https://github.com/nhzi/number-classifier.git
cd number-classifier
```
### Install Dependencies
```bash
npm install
```
### Run the API Locally
```bash
npm run dev
```
### Test the API
**Visit:**
```bash
http://localhost:3300/api/classify-number?number=371
```

## API Endpoints
### ➤ Classify a Number
```
POST /api/classify-number?number=<number>
```

## Query Parameters

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| `number`  | Number | The number to classify. |

## Example Request

```
POST /api/classify-number?number=371
```

## Successful Response

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Error Response (Invalid Input)

### Example Request

```
POST /api/classify-number?number=alphabet
```

### Response

```json
{
    "number": "alphabet",
    "error": true
}
```

## Status Codes

| Status Code | Description               |
| ----------- | ------------------------- |
| 200         | Successful classification |
| 400         | Invalid input provided    |
| 500         | Internal server error     |

## Notes

- Ensure the `number` query parameter is a valid integer.
- The API uses [Numbers API](http://numbersapi.com/) to fetch fun facts about the number.

***
🌟 **Developed by NachoDev; HNG Internship 🚀**