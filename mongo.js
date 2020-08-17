var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/chentong";
var url = "mongodb+srv://chentong:chentong@cluster0.nmba5.mongodb.net/chentong?retryWrites=true&w=majority";

/*
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    var dbase = db.db("chentong");
    //先执行创建集合
    /!*dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });*!/

    //插入单个数据
    /!*var myobj = { name: "菜鸟教程", url: "www.runoob.com" };
    dbase.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });*!/
    
    //插入多条数据
    /!*var myobj =  [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
    ];
    dbase.collection("site").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });*!/
    
    //查询数据
    /!*dbase.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });*!/
    
    //查询指定条件的数据
    /!*var whereStr = {"name":'菜鸟教程'};  // 查询条件
    dbase.collection("site").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });*!/
    
    //更新数据
    /!*var whereStr = {"name":'菜鸟教程'};  // 查询条件
    var updateStr = {$set: { "url" : "https://www.runoob" }};
    dbase.collection("site").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("文档更新成功");
        db.close();
    });*!/
    
    //更新多条数据
    /!*var whereStr = {"type":'en'};  // 查询条件
    var updateStr = {$set: { "url" : "https://www.runoob.com" }};
    dbase.collection("site").updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " 条文档被更新");
        db.close();
    });*!/
    
    //删除一条数据
    /!*var whereStr = {"name":'菜鸟教程'};  // 查询条件
    dbase.collection("site").deleteOne(whereStr, function(err, obj) {
        if (err) throw err;
        console.log("文档删除成功");
        db.close();
    });*!/
    
    //删除多条数据
    /!*var whereStr = {  };  // 查询条件,删除所有
    dbase.collection("site").deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " 条文档被删除");
        db.close();
    });*!/

    //插入多条模拟数据
    /!*var myobj =  [
        { name: '菜鸟1', url: 'https://c.runoob.com', type: 'en',num:1},
        { name: '菜鸟2', url: 'https://c.runoob.com', type: 'cn',num:2},
        { name: '菜鸟3', url: 'https://c.runoob.com', type: 'cn',num:3},
        { name: '菜鸟4', url: 'https://c.runoob.com', type: 'en',num:4},
        { name: '菜鸟5', url: 'https://c.runoob.com', type: 'cn',num:5},
        { name: '菜鸟6', url: 'https://c.runoob.com', type: 'cn',num:6},
        { name: '菜鸟7', url: 'https://c.runoob.com', type: 'cn',num:7},
        { name: '菜鸟8', url: 'https://c.runoob.com', type: 'en',num:8},
        { name: '菜鸟9', url: 'https://c.runoob.com', type: 'cn',num:9},
        { name: '菜鸟10', url: 'https://c.runoob.com', type: 'cn',num:10},
    ];
    dbase.collection("site").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });*!/
    
    //按num降序排序
    /!*var mysort = { num: -1 };
    dbase.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });*!/
    
    //limit()：读取两条数据
    /!*dbase.collection("site").find().limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });*!/
    
    //skip():改变读取数据的索引,从索引2开始读取2条数据
    /!*dbase.collection("site").find().skip(2).limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });*!/
    
    //实现左连接,新建模拟数据
    /!*!//创建orders集合
    /!*dbase.createCollection('orders', function (err, res) {
        if (err) throw err;
        console.log("创建orders集合成功!");
        db.close();
    });*!/
    //创建products集合
    /!*dbase.createCollection('products', function (err, res) {
        if (err) throw err;
        console.log("创建products集合成功!");
        db.close();
    });*!/
    //添加模拟数据
    /!*var myobj1 =  [
        { _id: 1, product_id: 154, status: 1 }
    ];
    var myobj2 =  [
        { _id: 154, name: '笔记本电脑' },
        { _id: 155, name: '耳机' },
        { _id: 156, name: '台式电脑' }
    ];
    dbase.collection("orders").insertMany(myobj1, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });

    dbase.collection("products").insertMany(myobj2, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });*!/!*!/

    //$lookup 实现左连接
    /!*dbase.collection('orders').aggregate([
        { 
            $lookup:
                {
                    from: 'products',            // 右集合 left join products as B
                    localField: 'product_id',    // 左集合 join 字段 on A.product_id = B._id
                    foreignField: '_id',         // 右集合 join 字段
                    as: 'orderdetails'           // 新生成字段（类型array）
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        //[{"_id":1,"product_id":154,"status":1,"orderdetails":[{"_id":154,"name":"笔记本电脑"}]}]
        db.close();
    });*!/
    
    //删除集合
    /!*dbo.collection("test").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        if (delOK) console.log("集合已删除");
        db.close();
    });*!/
});*/

Date.prototype.Format = function(fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o){
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return fmt;
};


module.exports = {
  findAll:function (callback) {
      MongoClient.connect(url, { useNewUrlParser: true }).then((conn) => {
          console.log("数据库已连接");
          
          const test = conn.db("chentong").collection("site");
          
          var objs = [];
          for(var i = 0;i<100;i++){
              objs.push({_id:i,name:i,time:(new Date()).Format("yyyy-MM-dd hh:mm:ss")});
          }
          
          test.deleteMany({}).then(() =>{
              return test.insertMany(objs).then((res) => {
                  console.log("插入的文档数量为: " + res.insertedCount);
              });
          }).then(() =>{
              return test.find().toArray().then((arr) => {
                  callback && callback(arr);
              });
          }).catch((err) => {
              console.log("数据操作失败" + err.message);
          }).finally(() => {
              conn.close();
          });
          
          
      }).catch((err) => {
          console.log("数据库连接失败");
      });
  }
};