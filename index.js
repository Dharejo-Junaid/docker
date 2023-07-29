const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    return res.json([
        {
            user1: "Junaid",
            email: "junaid@gmail.com"
        },
        {
            user2: "Ali",
            email: "Ali@gmail.com"
        },
        {
            user3: "Alice",
            email: "Alice@yahoo.com"
        },
        {
            user4: "Umrani",
            email: "Umrani@hotmail.com"
        }
    ]);
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});