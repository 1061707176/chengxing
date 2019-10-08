// pages/index/index.js
import {request} from '../../requst/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:[],
    navlist:[],
    commodity:[],
    fenlei:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(request())
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    request({
      url:'home/swiperdata'
    }).then(res=>{
      console.log(res)
      this.setData({
        swiper:res.data.message
      })
    })
  
  
  
  wx.request({
    url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
    data: {},
    header: {'content-type':'application/json'},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (res) => {
      this.setData({
        navlist:res.data.message
      })

      this.setData({
        fenlei:'../..'+res.data.message[0].navigator_url
      })
     
    },
   
  });
  wx.request({
    url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
    data: {},
    header: {'content-type':'application/json'},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (res) => {
      this.setData({
        commodity:res.data.message
      })

    },
    fail: () => {},
    complete: () => {}
  });
    
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