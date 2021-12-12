/*global google */
(async function() {
    'use strict';
    const searchInput = $('#search input');
    const searchButton = $('#search button');
    const home = {
        lat: 41.15115690170682,
        lng: -74.08001268842538
    };

    async function fetchGeonames(query) {
        try {
            const url = `https://secure.geonames.org/wikipediaSearch?q=${query}&maxRows=10&username=dkrull&type=json`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }


    const map = new google.maps.Map(document.getElementById('map'), {
        center: home,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    });


    function createMarker(place) {
        const bounds = new google.maps.LatLngBounds();

        const marker = new google.maps.Marker({
            position: {
                lat: place.lat,
                lng: place.lng
            },
            map: map,
            icon: place.thumbnailImg ? {
                url: place.thumbnailImg,
                scaledSize: new google.maps.Size(50, 50)
            } : undefined,
            Animation: google.maps.Animation.DROP,
            title: place.title
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(`${place.summary}<br>
            <a target ="_blank" href ="http://${place.wikipediaUrl}">more info</a>`);
            infoWindow.open(map, marker);
        });
        bounds.extend(marker.getPosition());
        map.fitBounds(bounds);
    }
    let selectedPlace;
    searchButton.click(async() => {
        $("#places").empty();

        const places = await fetchGeonames(searchInput.val());
        places.geonames.forEach(place => {
            $(`<li> <img id ="img" src="${place.thumbnailImg}" alt="${place.title}  ">
            <h4>${place.title}</h4>
            <div class="summary">${place.summary}</div>
         </li>`)
                .appendTo($('#places'))
                .click(function() {
                    if (selectedPlace === place) {
                        $('.summary').slideUp('slow');
                        selectedPlace = undefined;
                        return;
                    }
                    selectedPlace = place;
                    $('.summary').slideUp('slow');
                    $('.summary').slideDown('slow');
                    const position = {
                        lat: place.lat,
                        lng: place.lng
                    };
                    // createMarker(place);
                    map.setCenter(position);
                    map.setZoom(18);
                });
            createMarker(place);
        });

    });

    //////

    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });

    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', e => {
        console.log(e.overlay.position.lat(), e.overlay.position.lng());
        localStorage.setItem('marker', JSON.stringify({ lat: e.overlay.position.lat(), lng: e.overlay.position.lng() }));
    });


    const markerData = localStorage.getItem('marker');
    if (markerData) {
        const marker = JSON.parse(localStorage.getItem('marker'));
        new google.maps.Marker({
            position: {
                lat: marker.lat,
                lng: marker.lng
            },
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Your marker',
            icon: {
                url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                scaledSize: new google.maps.Size(50, 50)
            }
        });
    }
}());