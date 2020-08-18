# chentong
## 测试发布到Heroku，主要是验证heroku的github发布模式
1. [参考地址](https://github.com/alsotang/node-lessons/tree/master/lesson12)
2. [github地址](https://github.com/chentong106140/chentong.git)
3. [爬虫测试地址](https://chentong.herokuapp.com/)
4. [mongoDB查询地址](https://chentong.herokuapp.com/mongo/findAll)

``` javascript

//npm init 这个命令的作用就是帮我们互动式地生成一份最简单的 package.json 文件，init 是 initialize 的意思，初始化。
cnpm init

cnpm install express superagent cheerio mongodb  --save

 touch index.js

//复制代码进入
vi index.js

//浏览器访问：http://localhost:3000/
//你会得到cnode爬虫抓取后生成的json文件，响应数据可查看response.json文件
node index.js



```