const express = require('express');
const bodyParser = require('body-parser');
const { authenticateToken } = require('./middlewares/authenticate');  
const adminRoutes = require('./routes/route');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/admin/refresh-token', authenticateToken);

app.use('/admin', adminRoutes);

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
