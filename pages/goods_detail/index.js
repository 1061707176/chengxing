import {request} from '../../requst/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:[],
    deta:[],
    collect:false,
  },
  car:{},
  num:0,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:"goods/detail",
      data:{goods_id:options.goods_id}

    }).then(res=>{
      let {pics}=res.data.message
      console.log(res)
      this.setData({
        swiper:pics,
        deta:res.data.message
      })
    })
  },
  coll(){
    console.log(111)
   let flag=!this.data.collect
    this.setData({
      collect:flag
    })
  },
  cart(){
    this.car={
      id:this.data.deta.goods_id,
      name:this.data.deta.goods_name,
      image:this.data.deta.goods_big_logo,
      num:++this.num,
      price:this.data.deta.goods_price

      
    }
    wx.showToast({
      title: '添加成功',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: false,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
    wx.setStorageSync("cart", this.car);
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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