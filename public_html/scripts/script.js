"use strict";
$('#slider').carousel({
  interval: 10000
});

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

$( document ).ready( function() {
  $('.responsive-calendar').responsiveCalendar();
});

var $star = $("#star-rate a");
$star.click(function(e){
    e.preventDefault();
    $star.css('color','yellow');
});