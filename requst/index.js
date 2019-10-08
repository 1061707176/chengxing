let requestTimes=0
export const request=(params)=>{
    requestTimes++
    wx.showLoading({
        title: "加载中",
        // 遮罩层  true-> 用户无法再次点击 屏幕 
        mask: true
      });
    const baseUrl='https://api.zbztb.cn/api/public/v1/'
    return new Promise((resolve,reject)=>{
        wx.request({
           ...params,
           url:baseUrl+params.url,
        
          
          
      
         
            success: (result) => {
                resolve(result);
                wx.hideLoading();
                  

            },
            fail: (err) => {
                reject(err);
            },
          
        });
          
    })
}
