Page({

  data: {
    name: "default",
    description: "default",
    hours: "default",
    specialty: "default",
    waiting_time: "default",
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
      waiting_time: options.waiting_time,
      longitude: options.longitude,
      latitude: options.latitude
    })
  },

  phonetap: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.tel_number,
    })
  },

  addresstap: function () {
    wx.openLocation({
      latitude: parseFloat(this.data.latitude),
      longitude: parseFloat(this.data.longitude),
      scale: this.data.scale,
      name: this.data.name, // Location name
      address: this.data.address, // Detailed description of address
      infoUrl: 'http://www.childrenshospital.ab.ca/site/PageServer?pagename=home_template' // Hyperlink displayed at the bottom of the location viewing interface, which can be clicked to view the URL
    })
  }
})