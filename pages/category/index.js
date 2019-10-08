// pages/category/index.js
import {request} from '../../requst/index'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    menulist:[],
   goodlist:[],
   current:0
  },
  times:'',//时间对象
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.times=new Date()//设置一个全局的时间对象
    // this.fenlei(this.data.current)//发送请求并将获取的数据设置全局对象,获取数据并将其设置到data中渲染页面的一条函数.
    this.localCate()//判断本地存储中是否有数据,是否过期的一条函数,优化页面加载效率

   

  },
  localCate(){
    let localget=wx.getStorageSync("shopdata");
    console.log(localget)
    if(localget){//判断本地存储中是否有数据如果有将其获取下来
      console.log(111)
      let times=this.times.getTime()//获取当前时间
     if(times-localget.times<1000*10){//判断如果当前时间减去存储时间是否小于10秒
      this.Cates=localget.data
      this.setData({
        goodlist:this.Cates[this.data.current].children
        
      })
      this.setData({
        menulist:this.Cates.map(v=>v.cat_name)//筛选出字符串数据
      })
     }else{
      this.fenlei(this.data.current) 
     }
     
    }else{
      console.log(111)
      this.fenlei(this.data.current)
    }
      
  },
  Cates:[],
  hand(e){
    console.log(e)
   this.setData({
     current:e.target.dataset.index
   })
console.log(this.data.current)
   this.setData({
     goodlist:this.Cates[this.data.current].children
   })
  },
  fenlei(index){
    request({
      url:'categories'
    }).then(res=>{
      console.log(res)
      this.Cates=res.data.message//回来的左侧tab栏数据
      this.setData({
        menulist:this.Cates.map(v=>v.cat_name)//筛选出字符串数据
      })
      let arr=this.Cates[index].children//根据索引变动数组
      this.setData({
        goodlist:arr//设置回data中渲染页面的数组
      })
   
      let times=this.times.getTime()
      wx.setStorageSync("shopdata",{
        data:this.Cates,
        times
      })
      
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.leftlist);
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})