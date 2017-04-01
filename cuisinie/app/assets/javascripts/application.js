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
    $('.restContainer').hide();
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
      console.log(value)

    })
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

    marker.addListener('mouseover', function() {
      infoWindow.open(infoWindow.setContent("Hi"), marker);
    });
    marker.addListener('mouseout', function() {
      infoWindow.close(infoWindow.setContent("By"), marker);
    });
  }
  initMap();

}); //end of document ready
