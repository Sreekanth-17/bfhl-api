import express from "express";
const app = express();
app.use(express.json());

const FULL_NAME = "sreekanth_s_nair";
const DOB = "25022001";
const EMAIL = "sreepattola@gmail.com";
const ROLL_NUMBER = "22BHI10015";

function altCapsReverse(str) {
  let reversed = str.split("").reverse();
  return reversed
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

app.post("/bfhl", (req, res) => {
  try {
    const arr = req.body.data || [];
    let odd = [], even = [], alpha = [], special = [], concat = "", sum = 0;

    for (let item of arr) {
      if (/^-?\d+$/.test(item)) {            
        let n = parseInt(item);
        (n % 2 === 0 ? even : odd).push(item);
        sum += n;
      } else if (/^[a-zA-Z]+$/.test(item)) { 
        let upperItem = item.toUpperCase();
        alpha.push(upperItem);
        concat += upperItem;
      } else {                               
        special.push(item);
      }
    }

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alpha,
      special_characters: special,
      sum: sum.toString(),
      concat_string: altCapsReverse(concat)
    });
  } catch (err) {
    res.status(400).json({
      is_success: false,
      error: err.message || "Something went wrong"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
