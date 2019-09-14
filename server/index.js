require('dotenv').config({path: ".env"});
const server = require("./server");
const port = process.argv[2] || process.env.PORT;

server.listen(port, () => {
    console.log(`Server started on ${port}`);
});