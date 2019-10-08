import { request } from '../../requst/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tab: [{ value: '综合', id: 0 },
    { value: '销量', id: 1 },
    { value: '价格', id: 2 }
    ],
    current: 0,
    datalist: []

  },
  pagenum: 1,
  query: '',
  cid: '',
  tab(e) {
    this.setData({
      current: e.target.dataset.index
    })
    console.log(e)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let { query, cid } = options
    this.query = query
    this.cid = cid
    request({
      url: 'goods/search',
      data: {
        query, cid,
        pagenum: this.pagenum,
        pagesize: 10,
        error:''
        
      }
    }).then(res => {
      console.log(res)
      this.setData({
        datalist: res.data.message.goods
      })
    })

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
  goodspush() {
    this.pagenum++
    request({
      url: 'goods/search',
      data: {
        query: this.query, cid: this.cid,
        pagenum: this.pagenum,
        pagesize: 10
      }
    }).then(res => {
      if (res.data.message.goods.length > 0) {
        console.log(res)
        let datalist = this.data.datalist
        res.data.message.goods.forEach(v => {

          datalist.push(v)
        })
        this.setData({
          datalist
        })
      }else{
        this.setData({
          error:'到底了不要再拉了'
        })
      }
    })
  },
  onReachBottom: function () {
    if(!this.data.error){
      this.goodspush()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})