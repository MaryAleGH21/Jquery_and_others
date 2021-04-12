// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import jQuery from "jquery"
global.$ = global.jQuery = jQuery
window.$ = window.jQuery = jQuery

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import Chartkick from 'chartkick'
import Highcharts from 'highcharts'
window.Highcharts = Highcharts



/* jQuery(function(){
  console.log('Ya esta instalado jQuery, y funciona!!')
  console.log(jQuery)
  console.log($)
})

console.log($(document.body))

$(document).on('turbolinks:load', function(){
  /*$('body').css('background', 'tomato')
  $('body').css('color', 'white')*/
  /* $('body').css({background: 'tomato', color:'white'})
  const colors = ['tomato', 'navy', 'mediumseagreen', 'orange', 'skyblue', 'crimson', 'chucknorris'] 
  $('.alert').click(function(){
    alert('ALERTA, me han hecho click!')
  })
  $('select').change(function(){
    $('.result').text($(this).val())
  })
  $('h1').hover(function(){
    console.log('Me rosaste!!, Me siento ofendido!!')
  })
  $('input.nombre').focus(function(){
    console.log('recuerde de poner su nombre, no me venga a poner el apellido!')
  })
  $('input.nombre').blur(function(){
    const txt = $(this).val()
    if(txt){ */
     /*  $('.text span').html(`<i>${$(this).val()}: </i>`)
      console.log('Bien escribiste tu nombre!')
    } else {
      console.log('Ya pues, y el nombre?')
    }
  })
  $('input.nombre').on('keyup', function(){
    $('.result').html("<strong>" + $(this).val() + "</strong>")
  })
  $('.hide').click(function(){
    $('.text').hide('slow', function(){
      $('body').css('background', 'navy')
    })
   })
   $('.show').click(function(){
     $('.text').show(5000, function(){
       $('body').css('background', 'tomato')
     })
    })
    $('.toggle').click(function(){
     $('.text').toggle(500, function(){
      $('body').css('background', colors[Math.floor(Math.random() * colors.length)])
     })
    })
    $('.fadeout').on('click hover', function(){
     $('.himage').fadeOut().css('width', '10px')
    })
    $('.fadein').on('click hover', function(){
      $('.himage').fadeIn().css('width', '500px')
     })
    $('.fadetoggle').on('click', function(){
      $('.himage').fadeToggle()
    })
    colors.forEach(function(color){
      $('.colors').append(`<li>${color}</li>`)
    })
}) */ 