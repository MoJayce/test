Page({
  data: {
    tab_Lid: 1,
    tab_left: [{ "id": "1", "name": "上衣" }, { "id": "2", "name": "裤子" }, { "id": "3", "name": "裙子" }],
    // tab_left: [],
    tab_right: [],
    clothes: [
      { "type":"上衣","src": "http://sujiefs.com/upload/images/20170816/201708161803198792334_thumbnail.jpg", "title": "T恤" },
      { "type": "上衣", "src": "http://sujiefs.com/upload/images/20171006/201710061145211681060_thumbnail.jpg", "title": "风衣" },
      { "type": "上衣", "src": "http://sujiefs.com/upload/images/20170816/201708161804083693788_thumbnail.jpg", "title": "衬衫" },
      { "type": "上衣", "src": "http://sujiefs.com/upload/images/20170819/201708192132126698260_thumbnail.jpg", "title": "针织衫" },
      { "type": "上衣", "src": "http://sujiefs.com/upload/images/20170816/201708161803492303325_thumbnail.jpg", "title": "时尚套装" },
      { "type": "上衣", "src": "http://sujiefs.com/upload/images/20170816/201708161803592817820_thumbnail.jpg", "title": "背心吊带" },
      { "type": "上衣", "src": "http://sujiefs.com/upload/images/20170821/201708211039363440762_thumbnail.jpg", "title": "外套/毛呢外套" },
      { "type": "上衣", "src": "http://sujiefs.com/upload/images/20171021/201710211711048036279_thumbnail.jpg", "title": "卫衣/绒衫" },
      { "type": "裤子", "src": "http://sujiefs.com/upload/images/20170816/201708161848366922164_thumbnail.jpg", "title": "短裤" },
      { "type": "裤子", "src": "http://sujiefs.com/upload/images/20170816/201708161849396808035_thumbnail.jpg", "title": "九分裤" },
      { "type": "裤子", "src": "http://sujiefs.com/upload/images/20170816/201708161849490916198_thumbnail.jpg", "title": "休闲裤" },
      { "type": "裤子", "src": "http://sujiefs.com/upload/images/20170816/201708161850000609324_thumbnail.jpg", "title": "打底裤" },
      { "type": "裤子", "src": "http://sujiefs.com/upload/images/20170816/201708161850080246133_thumbnail.jpg", "title": "阔腿裤" },
      { "type": "裤子", "src": "http://sujiefs.com/upload/images/20170816/201708161850156988339_thumbnail.jpg", "title": "小脚裤" },
      { "type": "裙子", "src": "http://sujiefs.com/upload/images/20170816/201708161904263180558_thumbnail.jpg", "title": "连衣裙" },
      { "type": "裙子", "src": "http://sujiefs.com/upload/images/20170816/201708161906298645469_thumbnail.jpg", "title": "半身裙" }
    ],
    jacket: [
      { "src": "http://sujiefs.com/upload/images/20170816/201708161803198792334_thumbnail.jpg", "title": "T恤" },
      { "src": "http://sujiefs.com/upload/images/20171006/201710061145211681060_thumbnail.jpg", "title": "风衣" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161804083693788_thumbnail.jpg", "title": "衬衫" },
      { "src": "http://sujiefs.com/upload/images/20170819/201708192132126698260_thumbnail.jpg", "title": "针织衫" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161803492303325_thumbnail.jpg", "title": "时尚套装" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161803592817820_thumbnail.jpg", "title": "背心吊带" },
      { "src": "http://sujiefs.com/upload/images/20170821/201708211039363440762_thumbnail.jpg", "title": "外套/毛呢外套" },
      { "src": "http://sujiefs.com/upload/images/20171021/201710211711048036279_thumbnail.jpg", "title": "卫衣/绒衫" },
    ],
    pants: [
      { "src": "http://sujiefs.com/upload/images/20170816/201708161848366922164_thumbnail.jpg", "title": "短裤" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161849396808035_thumbnail.jpg", "title": "九分裤" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161849490916198_thumbnail.jpg", "title": "休闲裤" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161850000609324_thumbnail.jpg", "title": "打底裤" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161850080246133_thumbnail.jpg", "title": "阔腿裤" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161850156988339_thumbnail.jpg", "title": "小脚裤" }
    ],
    skirt:[
      { "src": "http://sujiefs.com/upload/images/20170816/201708161904263180558_thumbnail.jpg", "title": "连衣裙" },
      { "src": "http://sujiefs.com/upload/images/20170816/201708161906298645469_thumbnail.jpg", "title": "半身裙" }
    ],
    searchInput:'',

  },
  toSearch: function () {
    console.log("搜索")
    console.log(this.data.searchInput);
    this.getGoodsList(this.data.searchInput);
    // console.log()
  },
  listenerSearchInput:function(e){
    var that = this
    // console.log(e.detail.value)
    this.setData({
      searchInput: e.detail.value
    })
  },
  tabClick: function (e) {
    var that = this
    this.setData({
      tab_Lid: e.currentTarget.id
    })
    this.getGoodsList(this.data.tab_Lid);
    // console.log(that.data.clothes)
    var tab_right = []
    // if (e.currentTarget.id == 0) {
    //   for (var i = 0; i < that.data.clothes.length; i++) {
    //     tab_right.push(that.data.clothes[i])
    //   }
    // }
    if (e.currentTarget.id == 1) {
      for (var i = 0; i < that.data.jacket.length; i++) {
        tab_right.push(that.data.jacket[i])
      }
    }
    if (e.currentTarget.id == 2) {
      for (var i = 0; i < that.data.pants.length; i++) {
        tab_right.push(that.data.pants[i])
      }
    }
    if (e.currentTarget.id == 3) {
      for (var i = 0; i < that.data.skirt.length; i++) {
        tab_right.push(that.data.skirt[i])
      }
    }
    that.setData({
      tab_right: tab_right,//还需赋值
    });
    // console.log(tab_right)
  },
  goods_lists:function(e){
    // console.log(e.currentTarget.dataset.text)
    let detail_word = e.currentTarget.dataset.text
    console.log(detail_word)
    wx.navigateTo({
      url: '../goods_lists/goods_lists?type='+detail_word,
    })
  },
  getGoodsList: function (searchInput){
    var that = this
    var tab_right = []
    // 模糊搜索
    for (var i = 0; i < that.data.clothes.length; i++) {
      if (searchInput == that.data.clothes[i].type) {
        // console.log(that.data.clothes[i].type)
        tab_right.push(that.data.clothes[i])
      }
    }
    // 单个搜索
    for (var i = 0; i < that.data.clothes.length; i++) {
      if (searchInput == that.data.clothes[i].title){
        // console.log(that.data.clothes[i].title)
        tab_right.push(that.data.clothes[i])
      }
    }
    that.setData({
      tab_right: tab_right,//还需赋值
    });
  },

  // 初始化
  onLoad: function () {
    var that = this
    that.setData({
      tab_right: that.data.tab_left[0].name
    })
    var tab_right = []
    for (var i = 0; i < that.data.jacket.length; i++) {
      tab_right.push(that.data.jacket[i])
    }
    that.setData({
      tab_right: tab_right,
    });
    
  // 商品列表
  wx.request({
    url:"https://www.apiopen.top/weatherApi",
    method:"GET",
    data: {
      // "start": 0,
      // "count": 20,
      // "type":1, 
      // "page":1
    }, 
    dataType: "json",
    contentType: "application/json",
    success(res){
        console.log(res)
      }
    })
  }
})