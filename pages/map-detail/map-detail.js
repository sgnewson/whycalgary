Page({

  data: {
    name: "default",
    description: "default",
    hours: "default",
    specialty: "default",
    waiting_time: "default"
    tel_number: '+1 (403) 955-7211',
    address: '2888 Shaganappi Trail NW',
    longitude: 51.07455988,
    latitude: -114.1479576,
    scale: 15
  },

  onLoad: function (options) {
    // console.log(options)
    this.setData({
      name: options.name,
      description: options.description,
      address: options.address,
      tel_number: options.tel_number,
      hours: options.hours,
      specialty: options.specialty,
      waiting_time: options.waiting_time
    })
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