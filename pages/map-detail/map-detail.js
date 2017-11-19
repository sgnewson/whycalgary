Page({

  data: {
    name: "default",
    description: "default",
    address: "default",
    tel_number: "default",
    hours: "default",
    specialty: "default",
    waiting_time: "default"
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

  onReady: function () {
  },

  onShow: function () {
  },

  onHide: function () {
  },

  onUnload: function () {
  },

  onPullDownRefresh: function () {  
  },

  onReachBottom: function () {
  },

  onShareAppMessage: function () {
  }
})