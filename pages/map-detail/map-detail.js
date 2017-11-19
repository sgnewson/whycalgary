Page({

  data: {
    phoneNumber: '+1 (403) 955-7211',
    address: '2888 Shaganappi Trail NW'
  },

  onLoad: function (options) {
  },

  phonetap: function () {
    console.log("phoned");
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber,
    })
  }
})