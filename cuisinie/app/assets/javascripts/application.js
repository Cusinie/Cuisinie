// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree



//start of document ready

$(document).on('turbolinks:load' , function() {

  console.log("ready!");

  arr = []

  const appender = (sRes) => {
    // hide the previous search
    $('.restContainer').hide();
    // creating elements to append to the DOM
    $.each(sRes, (ind, val) => {
      const $container = $('<div class=\"restContainer\"></div>');
      const $name = $('<h1 class=\"resName\"></h1>').text(val.name);
      const $image = $('<img class=\"resImg\" src=\"' + val.img_url + '\">');
      const $addr = $('<p class=\"resAddr\"></p>').text(val.address);
      const $cost = $('<p class=\"resCost\"></p>').text("Avg cost for 2: " + val.cost);
      const $rating = $('<p class=\"resRate\"></p>').text("Avg user rating: " + val.user_rating);
      const $id = $('<a href=\"/restaurants/' + val.restaurant_id + '\" />').val(val.restaurant_id);
      $id.appendTo($container);
      $name.appendTo($id);
      $image.appendTo($id);
      $addr.appendTo($container);
      $cost.appendTo($container);
      $rating.appendTo($container);
      $('<br><br>').appendTo($container);
      $container.appendTo('body');
      // console.log(container,name,image,addr,cost,rating);
      console.log(val);
      arr.push({
        "lat": val.lat,
        "lon": val.lon
      })
    });
    $.each(arr, (index, value) => {
      console.log(value);

    });
  };

  console.log("hi");
  $(".click").click(() => {

    console.log("hi");

    let click = $("#cuisine_id").val();

    console.log(click);

    $.ajax({
      method: 'POST',
      data: {
        cuisine: {
          "id": click
        }
      },
      url: '/apis',
      success: (data) => {
        // console.log(data)
        appender(data);
      },
      error: (jqx, error) => {
        console.log(error)
      }

    }); // end of ajax call



  }); // end of click function


  //   coordinates = [{lat:40.8182972222, lng: -73.9607083333, name: "Jamal"},
  //   {lat: 40.7422410000, lng: -73.9838080000, name: "Jam"},
  //   {lat: 40.7570500000, lng: -73.9847805556, name: "Jal"},
  //   {lat: 40.7197444444, lng: -74.0084527778, name: "Jmal"},
  //   {lat: 40.7443111111, lng: -73.9904027778, name: "amal"},
  //   {lat: 40.7141680000, lng: -73.9566570000, name: "mal"},
  //   {lat: 40.7634055556, lng: -73.9968111111, name: "Jl"},
  //   {lat: 40.7431722222, lng: -73.9894472222, name: "Jul"},
  //   {lat: 40.7275277778, lng: -73.9885944444, name: "asfas"},
  //   {lat: 40.7473020000, lng: -73.9862220000, name: "Jamasfasal"},
  //   {lat: 40.7559861111, lng: -73.9701833333, name: "Jafasfasmal"},
  //   {lat: 40.6870194444, lng: -73.9755333333, name: "Jamasfasal"},
  //   {lat: 40.7501055556, lng: -73.9864583333, name: "Jafasfasmal"},
  //   {lat: 40.7565500000, lng: -73.9891361111, name: "Jaasfsamal"},
  //   {lat: 40.7605638889, lng: -73.9911944444, name: "Jaasfsamal"},
  //   {lat: 40.7337638889, lng: -74.0063083333, name: "Jaasfasfmal"},
  //   {lat: 40.7625361111, lng: -73.9872138889, name: "Jamfasfsafal"},
  //   {lat: 40.6903277778, lng: -73.9870750000, name: "Jasafsafmal"},
  //   {lat: 40.7678698000, lng: -73.9206002000, name: "Jaasfasmal"},
  //   {lat: 40.7723527778, lng: -73.9557027778, name: "Jaasfsafmal"}]
  //
  //         function initMap() {
  //           console.log("hey");
  //           var uluru = {lat: 40.74009, lng: -73.98981};
  //           var map = new google.maps.Map(document.getElementById('this'), {
  //             zoom: 11,
  //             center: uluru
  //           });
  //
  //           coordinates.forEach((coordinate)=>{
  //             console.log("coordinate", coordinate);
  //                         console.log("coordinate", coordinate.lat);
  //                                     console.log("coordinate", coordinate.lng);
  //           let latitude = parseFloat(coordinate.lat);
  //           let longitude = parseFloat(coordinate.lng);
  //           let restaurantLocation = {lat: latitude, lng: longitude};
  //           console.log(restaurantLocation);
  //           var marker = new google.maps.Marker({
  //             position: restaurantLocation,
  //             map: map
  //           });
  //           var infoWindow = new google.maps.InfoWindow({map: map});
  //               //         var pos = {
  //               //   lat: coordinate.lat,
  //               //   lng: coordinate.lng
  //               // };
  //               // console.log(pos)
  //               // infoWindow.setPosition(pos);
  //           marker.addListener('mouseover', function () {
  //           infoWindow.open(infoWindow.setContent(coordinate.name),marker);
  //           });
  //           marker.addListener('mouseout', function () {
  //           infoWindow.close(infoWindow.setContent(coordinate.name), marker);
  //           });
  //           // Try HTML5 geolocation.
  //         //   if (navigator.geolocation) {
  //         //     navigator.geolocation.getCurrentPosition(function(position) {
  //               // var pos = {
  //               //   lat: coordinate.lat,
  //               //   lng: coordinate.lng
  //               // };
  //               // console.log(pos)
  //               // infoWindow.setPosition(pos);
  //               // infoWindow.setContent(coordinate.name);
  //         //       map.setCenter(pos);
  //         //     }, function() {
  //         //       handleLocationError(true, infoWindow, map.getCenter());
  //         //     });
  //         //   } else {
  //         //     // Browser doesn't support Geolocation
  //         //     handleLocationError(false, infoWindow, map.getCenter());
  //         //   }
  //         // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //         //   infoWindow.setPosition(pos);
  //         //   infoWindow.setContent(browserHasGeolocation ?
  //         //                         'Error: The Geolocation service failed.' :
  //         //                         'Error: Your browser doesn\'t support geolocation.');
  //         // }
  //           })
  //         }
  //

  function initMap() {
    console.log("hey");
    console.log(document.getElementById('lat').textContent)
    var uluru = {
      lat: parseFloat(document.getElementById('lat').textContent),
      lng: parseFloat(document.getElementById('lon').textContent)
    };
    var map = new google.maps.Map(document.getElementById('this'), {
      zoom: 11,
      center: uluru
    });
    console.log(uluru)
    let latitude = parseFloat(uluru.lat);
    let longitude = parseFloat(uluru.lng);
    let restaurantLocation = {
      lat: latitude,
      lng: longitude
    };
    console.log(restaurantLocation);
    var marker = new google.maps.Marker({
      position: restaurantLocation,
      map: map
    });
    var infoWindow = new google.maps.InfoWindow({
      map: map
    });
    //         var pos = {
    //   lat: coordinate.lat,
    //   lng: coordinate.lng
    // };
    // console.log(pos)
    // infoWindow.setPosition(pos);
    marker.addListener('mouseover', function() {
      infoWindow.open(infoWindow.setContent("Hi"), marker);
    });
    marker.addListener('mouseout', function() {
      infoWindow.close(infoWindow.setContent("By"), marker);
    });
  }
  initMap();

}); //end of document ready
