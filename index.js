const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = []; // Array to store blog posts

// Home route
app.get('/', (req, res) => {
    res.render('index.ejs', { posts });
});

// New post route
app.get('/new', (req, res) => {
    res.render('new');
});

// Create post route
app.post('/create', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});

// View post route
app.get('/post/:id', (req, res) => {
    const id = req.params.id;
    const post = posts[id];
    res.render('post.ejs', { post });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
