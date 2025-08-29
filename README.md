# BFHL REST API

A simple REST API built with **Node.js + Express** that fulfills the BFHL assignment requirements.  
The API processes an array of input values and returns categorized results.

---

## 📌 Features
- **POST /bfhl**
  - Returns:
    - `is_success` → operation status
    - `user_id` → in the format `{full_name_ddmmyyyy}`
    - `email`
    - `roll_number`
    - `odd_numbers` → numbers classified as odd (strings)
    - `even_numbers` → numbers classified as even (strings)
    - `alphabets` → alphabets converted to uppercase
    - `special_characters`
    - `sum` → sum of numbers (as a string)
    - `concat_string` → concatenation of alphabets in reverse order with alternating caps

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- Hosting: (Vercel / Railway / Render)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
