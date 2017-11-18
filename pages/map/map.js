const app = getApp()

Page({
  data: {
    motto: 'Show map',
  },
  maptap: function() {
    console.log("Aloha");
    wx.navigateTo({
      url: '../map-detail/map-detail',
    })
  },
  onLoad: function () {
  }
})
