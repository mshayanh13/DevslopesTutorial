var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With", "Content-Type", "Accpet");
    res.header("Access-Control-Allow-Methods", "POST", "GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var tutorials = [
    {
        id: 1,
        title: "Android Studio Tutorial For Beginners",
        desription: "Learn how to install Android Studio and go through this tutorial to build your very first app.",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F-k5gwz_91o?list=PLpZBns8dFbgxntBABs3IBaAcV-DIuGsbU" frameborder="0" allowfullscreen></iframe>',
        thumbnail: "https://static.andigital.com/wp-content/uploads/2016/08/04204059/android-white.png"
    },
    {
        id: 2,
        title: "iOS App Icon Design in Photoshop",
        desription: "Learn how to install Android Studio and go through this tutorial to build your very first app.",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F-k5gwz_91o?list=PLpZBns8dFbgxntBABs3IBaAcV-DIuGsbU" frameborder="0" allowfullscreen></iframe>',
        thumbnail: "https://static.andigital.com/wp-content/uploads/2016/08/04204059/android-white.png"
    }
];

app.get('/tutorials', function(req, res) {
    console.log("GET from server");
    res.send(tutorials);
});

app.listen(6069);