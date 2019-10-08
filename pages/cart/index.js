// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userSite: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let storageInfo = wx.getStorageSync("userSite");
      
    this.setData({
      userSite:storageInfo
    })
      

  },
  getuserSite(e) {

    
    
    wx.chooseAddress({
      success: (res) => {
        this.setData({
          userSite: res
        })
        wx.setStorageSync('userSite', this.data.userSite);
      },
      fail: (err) => { 
        wx.showModal({
          title: '是否授权通讯地址',
          content: '需要获取您的通讯地址，请确认授权，否则地址功能将无法使用',
          showCancel: true,
          cancelText: '取消',
          cancelColor: '#000000',
          confirmText: '确定',
          confirmColor: '#3CC51F',
          success: (res) => {
            if (res.confirm) {
              wx.openSetting({
                success: (data) => {
                  console.log(data)
                  if (data.authSetting["scope.address"]) {
                    wx.chooseAddress({
                      success: (res) => {
                        console.log(res)
                        this.setData({
                          userSite: res
                        })
                        wx.setStorageSync('userSite', this.data.userSite);
                          
                      },
                    });
                  }
                },
                fail: () => { }

              });

            }
          },
          fail: () => { },
        });
      },
      complete: () => { }
    });





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

  },

})