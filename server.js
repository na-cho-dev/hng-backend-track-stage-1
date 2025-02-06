import express, { response } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req, res) => {});

app.get('/api/classify-number', async (req, res) => {
  const { number } = req.query;
  const num = parseInt(number);

  if (isNaN(num)) {
    return res.status(400).json({
      number,
      error: true,
    });
  }

  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    const fun_fact = response.data;

    const is_prime = checkPrime(num);
    const is_perfect = checkPerfect(num);
    const is_armstrong = checkArmstrong(num);
    const digit_sum = sumDigits(num);
    const is_odd = num % 2 !== 0;

    const properties = [];
    if (is_armstrong) properties.push('armstrong');
    if (is_odd) properties.push('odd');
    else properties.push('even');

    const result = {
      number: num,
      is_prime,
      is_perfect,
      properties,
      digit_sum,
      fun_fact,
    };

    res.status(200).json(result);
  } catch (error) {
    console.log('Error Fetching Data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const checkPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const checkPerfect = (n) => {
  let sum = 1;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n && n !== 1;
};

const checkArmstrong = (n) => {
  const digits = n.toString().split('');
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), power),
    0
  );
  return sum === n;
};

const sumDigits = (n) => {
  return n
    .toString()
    .split('')
    .reduce((acc, digit) => acc + parseInt(digit), 0);
};

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
