var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var articleOne = {
    title: 'Article One | Balaji S',
    heading: 'Article One',
    date:'Aug 22 2017',
    content:` <p> This is article two</p>
            <p> This is article two</p>
            <p> This is article two</p>
            <p> This is article two</p>`,
};
function createTemplate(){
    
    var htmlTemplate = `
    <html>
        <head>
            <title>Title</title>
        
        <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class = "container">
            <div><a href="/">Home</a></div>
            <div><h1>heading</h1></div>
        <div>Aug 23 2017</div>
        <div>
        content
        </div>
        </body>
    </html>`;
    return htmlTemplate;
}
var articleOne = {
        title: 'Article One | Balaji S',
        heading: 'Article One',
        date:'Aug 22 2017',
        content:` <p> This is article one</p>
            <p> This is article one</p>
            <p> This is article one</p>
            <p> This is article one</p>`,
        
        };
var articles = {
    'article-one':{
        title: 'Article One | Balaji S',
        heading: 'Article One',
        date:'Aug 22 2017',
        content:` <p> This is article one</p>
            <p> This is article one</p>
            <p> This is article one</p>
            <p> This is article one</p>`,
        
        },
    'article-two':{
        title: 'Article Two | Balaji S',
        heading: 'Article Two',
        date:'Aug 23 2017',
        content:` <p> This is article two</p>
                <p> This is article two</p>
                <p> This is article two</p>
                <p> This is article two</p>`,
    },
    'article-three':{
        title: 'Article Three | Balaji S',
        heading: 'Article Three',
        date:'Aug 24 2017',
        content:` <p> This is article three</p>
                <p> This is article three</p>
                <p> This is article three</p>
                <p> This is article three</p>`,
    },
};
app.get('/article-one', function (req, res) {
 //   var articleName = req.params.articleName; 
    res.send(createTemplate());
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
