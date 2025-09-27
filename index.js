const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Shafay'Thinking Backend is running ✅" });
});

app.listen(4000, () => console.log('Backend running on port 4000'));
