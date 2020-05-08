const express = require('express');
const app = express();

require('dotenv').config();

import routes from "./routes";

app.use('/',routes);
app.listen(process.env.PORT || 4000);
console.log("Listening on port:", process.env.PORT);
