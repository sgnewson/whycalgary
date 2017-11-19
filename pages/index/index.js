const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindViewTap: function() {
    // Removed logs, but keep this for reference
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  textTap: function() {
    console.log("textTap")
    wx.openLocation({
      latitude: 51.0745598803388, // Latitude, floating number, between 90 and -90
      longitude: -114.147957615112, // Longitude, floating number, between 180 and -180
      name: "Alberta Children's Hospital", // Location name
      address: '2888 Shaganappi Trail NW', // Detailed description of address
      scale: 15, // Map scale level, integer value, between 1 and 28. It is the maximum value by default.
      infoUrl: 'childrenshospital.ab.ca' // Hyperlink displayed at the bottom of the location viewing interface, which can be clicked to view the URL
    });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
