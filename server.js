var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require("pg").Pool;
var config = {
    user:'balajiyadhav0',
    database:'balajiyadhav0',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD,
};
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
app.get('/ui/articleone.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleone.js'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var pool = new Pool(config);
app.get('/test-db/:article_id', function(req,res){
    pool.query('SELECT comments FROM comments WHERE article-id = $1',[req.params.article_id], function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows))
        }
    });
});
var names=[];
app.get('/submit-name', function (req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
})
var comments=[];
app.get('/commenta1', function (req,res){
    var comment = req.query.comment;
    comments.push(comment);
    res.send(JSON.stringify(comments));
})

function createTemplate(data){
    var content = data.content;
    var date = data.date;
    var title = data.title;
    var id = data.id;
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
        <div>${date.toDateString()}</div>
        <div>
        ${content}
        </div>
        <div class="bottom">
        <h3>Comments</h3>
        <hr/>
        <input type="text" id = "a1name" placeholder="name">
            </input>
        <input type="submit" value="submit" id = "a1submit_btn">
            </input>
        <ul id="namelist">
                <li>1</li>
                <li>2</li>
            </ul>
            </div>
            <script type="text/javascript" src="/ui/articleone.js">
            </script>        
            
        </body>

    </html>`;
    return htmlTemplate;
}

app.get('/articles/:articleName', function (req, res) {
 //   var articleName = req.params.articleName; 
    pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            if (result.rows.length === 0){
                res.status(404).send('Article not found');
            }
            else{
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
    
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
