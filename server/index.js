const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('css', express.static(path.join(__dirname, 'public/css')));
app.use('js', express.static(path.join(__dirname, 'public/js')));

app.set('views', path.join(__dirname, 'public/views'));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render("home");
})

app.use((req, res, next) => {
    res.render("home");
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})