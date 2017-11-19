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
        description: "Alberta Children's Hospital is the largest public hospital for sick children in the prairie provinces, and is located in Calgary, Alberta, Canada. It is operated by Alberta Health Services - Calgary Health Region",
        address: "2888 Shaganappi Trail NW",
        tel_number: "123456789",
        hours: "9AM - 5PM",
        specialty: "Pediatric hospital (儿童医院)",
        waiting_time: "30 minutes"
      }
    }],
  },
  maptap: function() {
    wx.navigateTo({
      url: '../map-detail/map-detail',
    })
  },
  markertap: function(e) {
    console.log(this.data.markers[e.markerId].location_detail)
    var marker_data = this.data.markers[e.markerId]
    var l_detail = marker_data.location_detail
    wx.navigateTo({
      url: '../map-detail/map-detail?name=' + l_detail.name
        + '&description=' + l_detail.description
        + '&address=' + l_detail.address
        + '&tel_number=' + l_detail.tel_number
        + '&hours=' + l_detail.hours
        + '&specialty=' + l_detail.specialty
        + '&waiting_time=' + l_detail.waiting_time
        + '&longitude=' + marker_data.longitude
        + '&latitude=' + marker_data.latitude
    })
    // wx.showToast({
    //   // title: this.data.markers[e.markerId].location_detail
    // });
  },
  onLoad: function () {
  }
})
