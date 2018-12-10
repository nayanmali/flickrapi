$(function () {
    'use strict';

    // Load demo images from flickr:
    $.ajax({
        // Flickr API is SSL only:
        // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
        url: 'https://api.flickr.com/services/rest/',
        data: {            
            user_id: '158137359@N04',
            format: 'json',
            method: 'flickr.people.getPublicPhotos',
            api_key: 'e685c8d129ed348a38169f35da93ede9', // jshint ignore:line
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {

        var linksContainer = $('#links'),
            baseUrl;      

        console.log(result);
        $.each(result.photos.photo, function (index, photo) {
            
            baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;

            $('<a/>')
                .append($('<img style=width:400px; margin:20px;>').prop('src', baseUrl + '_b.jpg'))
                .prop('href', baseUrl + '_b.jpg')
                .prop('title', photo.title)                 
                .attr('data-gallery', '')
                .appendTo(linksContainer);
        });
    });

});
