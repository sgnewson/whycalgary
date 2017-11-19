const app = getApp()

Page({
  data: {
  },
  textTap: function() {
    console.log("textTap")
    wx.openLocation({
      latitude: 51.0745598803388, // Latitude, floating number, between 90 and -90
      longitude: -114.147957615112, // Longitude, floating number, between 180 and -180
      name: "Alberta Children's Hospital", // Location name
      address: '2888 Shaganappi Trail NW', // Detailed description of address
      scale: 15, // Map scale level, integer value, between 1 and 28. It is the maximum value by default.
      infoUrl: 'childrenshospital.ab.ca' // Hyperlink displayed at the bottom of the location viewing interface, which can be clicked to view the URL
    });
  },
  onLoad: function () {
  }
})
