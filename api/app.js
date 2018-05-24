const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', (req, res) => {

  // get text param
  const text = req.body.text || '';
  const textIsPalindrome = compareTextIsPalindrome(text);

  if (text && textIsPalindrome) {
    console.log(`[Yes] '${text}' is a palindrome`);
    res.statusCode = 200;
  } else {
    console.log(`[No] '${text}' is not a palindrome`);
    res.statusCode = 400;
  }

  res.send();
});

app.listen(port, (err) => {
  if (err) {
    return console.log('some error:', err);
  }

  console.log(`server is listening on ${port}`);
});

/**
 * Compare if text is a palindrome
 *
 * normalize text
 * reverses text
 * compare the strings
 */
compareTextIsPalindrome = (text) => {
  const normalizedText = normalizeText(text);
  const reversedText = reverseText(normalizedText);

  return reversedText === normalizedText;
}

/**
 * Normalize world or phrase:
 *
 * set lowercase
 * remove spaces
 */
normalizeText = (text) => {
  return text.toLowerCase().replace(/\s/g, '');
}

/**
 * Reverses text
 *
 * convert to array
 * reverses array
 * join into new string
 */
reverseText = (text) => {
  return [...text].reverse().join('');
}