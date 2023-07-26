const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.json([
        {
            user1: "Junaid",
            email: "junaid@gmail.com"
        },
        {
            user2: "Ali",
            email: "Ali@gmail.com"
        }
    ]);
});

app.listen(5000, () => {
    console.log("App is running on port 5000");
})