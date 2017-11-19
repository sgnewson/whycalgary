const app = getApp()
const icon_width = 35
const icon_height = 45

Page({
  data: {
    motto: 'Show map',
    longitude: -114.095556,
    latitude: 51.065213,
    markers: [{
      iconPath: "../../image/hospital_icon.png",
      id: 0,
      latitude: 51.07455988,
      longitude: -114.1479576,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "Alberta Children's Hospital",
        description: "Alberta Children's Hospital is the largest public hospital for sick children in the prairie provinces, and is located in Calgary, Alberta, Canada. It is operated by Alberta Health Services - Calgary Health Region",
        address: "2888 Shaganappi Trail NW",
        tel_number: "403-555-1234",
        hours: "9AM - 5PM",
        specialty: "Pediatric hospital (儿童医院)",
        waiting_time: "30 minutes"
      }
    }, {
      iconPath: "../../image/hospital_icon.png",
      id: 1,
      latitude: 50.99182889,
      longitude: -114.0963207,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "Rockyview General Hospital",
        description: "Description: TODO",
        address: "7007 - 14 ST SW",
        tel_number: "403-555-1234",
        hours: "9AM - 9PM",
        specialty: "General Hospital",
        waiting_time: "30 minutes"
      }
    }, {
      iconPath: "../../image/hospital_icon.png",
      id: 2,
      latitude: 51.06418294,
      longitude: -114.1321766,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "Foothills Hospital",
        description: "Description: TODO",
        address: "1403 - 29 ST NW",
        tel_number: "123-456-7890",
        hours: "9AM - 5PM",
        specialty: "Research Hospital",
        waiting_time: "1 hour"
      }
    }, {
      iconPath: "../../image/hospital_icon.png",
      id: 3,
      latitude: 50.88210185,
      longitude: -113.9517038,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "South Health Campus",
        description: "Description: TODO",
        address: "4448 FRONT ST SE",
        tel_number: "123-456-7890",
        hours: "6AM - 5PM",
        specialty: "Most Southern Hospital",
        waiting_time: "1.5 hour"
      }
    }, {
      iconPath: "../../image/hospital_icon.png",
      id: 4,
      latitude: 51.07901635,
      longitude: -113.9839435,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "Peter Lougheed Medical Centre",
        description: "Description: TODO",
        address: "3500 - 26 AV NE",
        tel_number: "123-456-7890",
        hours: "6AM - 11PM",
        specialty: "General Hospital",
        waiting_time: "2 hours"
      }
    }, {
      iconPath: "../../image/clinic_icon.png",
      id: 5,
      latitude: 51.04116344,
      longitude: -114.0721296,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "Sheldon M. Chumir Health Centre",
        description: "Description: TODO",
        address: "1213 - 4 ST SW",
        tel_number: "123-456-7890",
        hours: "9AM - 5PM",
        specialty: "Health Clinic",
        waiting_time: "15 minutes"
      }
    }, {
      iconPath: "../../image/clinic_icon.png",
      id: 6,
      latitude: 51.04488712,
      longitude: -114.1368419,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "Shaganappi Complex Health Centre",
        description: "Description: TODO",
        address: "3415 - 8 AV SW",
        tel_number: "123-456-7890",
        hours: "9AM - 5PM",
        specialty: "Health Clinic",
        waiting_time: "15 minutes"
      }
    }, {
      iconPath: "../../image/clinic_icon.png",
      id: 7,
      latitude: 51.07553893,
      longitude: -113.9535557,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "Village Square Community Health Centre",
        description: "Description: TODO",
        address: "2623 - 56 ST NE",
        tel_number: "123-456-7890",
        hours: "9AM - 5PM",
        specialty: "Health Clinic",
        waiting_time: "15 minutes"
      }
    }, {
      iconPath: "../../image/clinic_icon.png",
      id: 8,
      latitude: 50.97507203,
      longitude: -114.0709401,
      width: icon_width,
      height: icon_height,
      location_detail: {
        name: "Acadia Community Health Centre",
        description: "Description: TODO",
        address: "151 - 86 AV SE",
        tel_number: "123-456-7890",
        hours: "9AM - 5PM",
        specialty: "Health Clinic",
        waiting_time: "15 minutes"
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
