const app = getApp()

Page({
  data: {
    motto: 'Show map',
    longitude: '-114.3543437',
    latitude: '51.013214',
    markers: [{
      iconPath: "../../image/hospital_icon.png",
      id: 0,
      latitude: 51.07455988,
      longitude: -114.1479576,
      width: 35,
      height: 45,
      location_detail: {
        name: "Alberta Children's Hospital",
        description: "hospital_desc",
        address: "2888 Shaganappi Trail NW",
        tel_number: "123456789",
        hours: "9AM - 5PM",
        specialty: "teeth",
        waiting_time: "15 mins"
      }
    }],
  },
  maptap: function() {
    console.log("Aloha");
    wx.navigateTo({
      url: '../map-detail/map-detail',
    })
  },
  markertap: function(e) {
    console.log(this.data.markers[e.markerId].location_detail)
    var l_detail = this.data.markers[e.markerId].location_detail
    wx.navigateTo({
      url: '../map-detail/map-detail?name=' + l_detail.name
        + '&description=' + l_detail.description
        + '&address=' + l_detail.address
        + '&tel_number=' + l_detail.tel_number
        + '&hours=' + l_detail.hours
        + '&specialty=' + l_detail.specialty
        + '&waiting_time=' + l_detail.waiting_time
    })
    // wx.showToast({
    //   // title: this.data.markers[e.markerId].location_detail
    // });
  },
  onLoad: function () {
  }
})
