"use strict";

const app = require("./src/server");

console.log("LISTENING PORT 3000");
app.listen(process.env.PORT || 3000);
