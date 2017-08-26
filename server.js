var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString())
    });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var names=[];
app.get('/submit-name', function (req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
})
var articleOne = {
    title: 'Article One | Balaji S',
    heading: 'Article One',
    date:'Aug 22 2017',
    content:` <p> This is article two</p>
            <p> This is article two</p>
            <p> This is article two</p>
            <p> This is article two</p>`,
};
function createTemplate(data){
    var content = data.content;
    var date = data.date;
    var title = data.title;
    var heading = data.heading;
    var htmlTemplate = `
    <html>
        <head>
            <title>${title}</title>
        
        <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class = "container">
            <div><a href="/">Home</a></div>
            <div><h1>${heading}</h1></div>
        <div>${date}</div>
        <div>
        ${content}
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
app.get('/:articleName', function (req, res) {
 //   var articleName = req.params.articleName; 
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString())
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
