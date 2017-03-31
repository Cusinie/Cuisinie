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
$(document).ready(function() {
  console.log("ready!");

  const appender = (sRes) => {
    $('.restContainer').hide();
    $.each(sRes, (ind, val) => {
      const $container = $('<div class=\"restContainer\"></div>');
      const $name = $('<h1 class=\"resName\"></h1>').text(val.name);
      const $image = $('<img class=\"resImg\" src=\"' + val.img_url + '\">');
      const $addr = $('<p class=\"resAddr\"></p>').text(val.address);
      const $cost = $('<p class=\"resCost\"></p>').text("Avg cost for 2: " + val.cost);
      const $rating = $('<p class=\"resRate\"></p>').text("Avg user rating: " + val.user_rating);
      const $id = $('<p type=\"hidden\"  class=\"resid\"></p>').val(val.restaurant_id);
      $name.appendTo($container);
      $image.appendTo($container);
      $addr.appendTo($container);
      $cost.appendTo($container);
      $rating.appendTo($container);
      $id.appendTo($container);
      $('<br><br>').appendTo($container);
      $container.appendTo('body');
      // console.log(container,name,image,addr,cost,rating);
      console.log(val);
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







}); //end of document ready
