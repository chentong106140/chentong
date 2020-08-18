// 引入依赖
var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

// 建立 express 实例
var app = express();

var mongo = require("./mongo")






app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  superagent.get('https://cnodejs.org/').end(function (err, sres) {
        // 常规的错误处理
        if (err) {
          return next(err);
        }
        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
        // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
        // 剩下就都是 jquery 的内容了
        var $ = cheerio.load(sres.text);
        var items = [];
        
        $('#topic_list .cell').each(function (idx, element) {
              var $element = $(element);
              var item = {};
              item["author"] = $element.children(".user_avatar").attr('href');
              item["title"] =  $element.children(".topic_title_wrapper").children(".topic_title").attr('title');
              item["href"] =  $element.children(".topic_title_wrapper").children(".topic_title").attr('href');
              items.push(item);
        });

        res.send(items);
      });
});

app.get('/mongo/findAll', function (req, res, next) {
    mongo.findAll((arr)=>{
        
        


        res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('X-Powered-By', ' 3.2.1');
        res.header('Content-Type', 'application/json;charset=utf-8');
        /*if (req.method === 'OPTIONS') {
            res.send(arr);
        } else {
            next();
        }*/
        res.send(arr);
    })
});

app.listen(process.env.PORT || 5000, function (req, res) {
  console.log('app is running at port '+(process.env.PORT || 5000));
});
