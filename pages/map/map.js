const app = getApp()

Page({
  data: {
    motto: 'Show map',
    markers: [{
      iconPath: "../../image/hospital_icon.png",
      id: 0,
      latitude: 40.002607,
      longitude: 116.487847,
      width: 35,
      height: 45
    }],
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
