const path = require('path');
const express = require('express');
const favicon = require('express-favicon');

const port = process.env.PORT || 3000;
const app = express();



// app.use(favicon(`${__dirname} /build/favicon.ico`));
app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.listen(port, () => {
   console.log('Server is up!');
});

// const express = require('express');
// const path = require('path');

// const port = process.env.PORT || 8080;
// const app = express();

// app.use(express.static(`${__dirname}/dist`));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist/index.html'));
// });

// app.listen(port);