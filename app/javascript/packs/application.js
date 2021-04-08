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

jQuery(function() {
    console.log('Ya está instalado jQuery, y funciona!')
    console.log(jQuery)
    console.log($)
})
console.log($(document.body))

$(document).on('turbolinks:load', function(){  
    $('body').css('background','tomato') // Selecciona todo los titles existentes en el index
    $('.alert').click(function(){
        alert('ALERTA, me han hecho click!')
    }) 
    $('select').change(function(){
        $('.result').text($(this).val())
    })
    $('h1').hover(function(){
        console.log('Me rosaste!, me siento ofendido!')
    })
    $('input.nombre').focus(function(){
        console.log('Recuerde poner su nombre, no me venga a poner el apellido! ')
    })
    $('input.nombre').blur(function(){
        const txt = $(this).val()
        if(txt){
            console.log('Bien escribiste tu nombre!')
        } else {
            console.log('Ya pues, y el nombre?')
        }
    })
    $('.hide').click(function(){
        $('.text').hide('slow')
       })
    $('.show').click(function(){
        $('.text').show(5000)
    })   
})

