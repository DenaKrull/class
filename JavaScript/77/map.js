/*global google */
(function() {
    'use strict';

    const drawings = JSON.parse(localStorage.getItem("drawings")) || [];

    const map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 41.15115690170682,
            lng: -74.08001268842538
        },
        zoom: 18

    });

    const options = {
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            draggable: true
        },
        circleOptions: {
            fillColor: '#FF0000',
            fillOpacity: 1,
            strokeWeight: 5,
            editable: true
        }

    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);

    function handleMarkerEdit(marker, markerData) {
        marker.addListener('dragend', () => {
            markerData.position = marker.getPosition();
            localStorage.setItem('drawings', JSON.stringify(drawings));
        });
    }



    google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
        const markerData = {
            type: 'marker',
            position: marker.getPosition()
        };
        drawings.push(markerData);
        localStorage.setItem('drawings', JSON.stringify(drawings));
        handleMarkerEdit(marker, markerData);

    });

    google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
        drawings.push({
            type: 'circle',
            center: circle.getCenter(),
            radius: circle.getRadius()
        });
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });
    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
        drawings.push({
            type: 'rectangle',
            bounds: rectangle.getBounds()
        });
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });
    google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
        drawings.push({
            type: 'polygon',
            path: polygon.getPath().getArray()
        });
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });
    google.maps.event.addListener(drawingManager, 'polylinecomplete', polyline => {
        drawings.push({
            type: 'polyline',
            path: polyline.getPath().getArray()
        });
        localStorage.setItem('drawings', JSON.stringify(drawings));
    });

    drawings.forEach(drawingData => {
        switch (drawingData.type) {
            case 'marker':
                const marker = new google.maps.Marker({
                    position: drawingData.position,
                    map: map,
                    icon: options.markerOptions.icon,
                    draggable: true
                });
                handleMarkerEdit(marker, drawingData);
                break;
            case 'circle':
                new google.maps.Circle({
                    center: drawingData.center,
                    radius: drawingData.radius,
                    fillColor: options.circleOptions.fillColor,
                    fillOpacity: options.circleOptions.fillOpacity,
                    strokeWeight: options.circleOptions.strokeWeight,
                    map: map,
                    editable: true
                });
                break;
            case 'rectangle':
                new google.maps.Rectangle({
                    bounds: drawingData.bounds,
                    map: map
                });
                break;
            case 'polygon':
                new google.maps.Polygon({
                    path: drawingData.path,
                    map: map
                });
                break;
            case 'polyline':
                new google.maps.Polyline({
                    path: drawingData.path,
                    map: map
                });
                break;
            default:
                console.error('Unknown drawing type ', drawingData.type);

        }
    });



}());