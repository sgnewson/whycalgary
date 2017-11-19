Page({

  data: {
    phoneNumber: '+1 (403) 955-7211',
    address: '2888 Shaganappi Trail NW',
    longitude: 51.07455988,
    latitude: -114.1479576,
    scale: 15
  },

  onLoad: function (options) {
  },

  phonetap: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber,
    })
  },

  addresstap: function () {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      scale: this.data.scale
    })
  }
})