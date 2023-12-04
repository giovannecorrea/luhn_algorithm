const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Serve API routes
app.get("/api/validate/:cardnumber", (req, res) => {
  const cardNumber = req.params.cardnumber;

  // Convert the card number to an array of digits and reverse it
  const digits = cardNumber.toString().split("").map(Number);

  let sum = 0;
  let double = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  // The card number is valid if the sum is a multiple of 10
  const isValid = sum % 10 === 0;

  res.json({ isValid: isValid });
});

// Catchall handler to send React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
