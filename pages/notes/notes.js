Page({

  data: {
    src: ''
  },

  onLoad: function () {
  },

  takephoto: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          src: res.tempFilePaths[0]
        })
      }
    })
  }
})