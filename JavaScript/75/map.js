/*global google */
(function() {
    'use strict';
    const bmgloc = new google.maps.LatLng({ lat: 40.09572118344493, lng: -74.22206599308187 });
    const pcs = { lat: 40.108847085561855, lng: -74.21764970472604 };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: bmgloc,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const infoWindow = new google.maps.InfoWindow({

        // content: '<h1>BMG</h1>'
    });

    const marker = new google.maps.Marker({
        position: bmgloc,
        map: map,
        Animation: google.maps.Animation.DROP,
        icon: {
            url: 'https://media-exp1.licdn.com/dms/image/C560BAQHeo1T77FjcCw/company-logo_200_200/0/1519906416652?e=2159024400&v=beta&t=NJaKReb9PuQDF1_aAt7O9mJ09zo1ijrivt-9PQWOKvk',
            scaledSize: new google.maps.Size(50, 50)
        },
        title: "BMG",
    });

    marker.addListener('click', () => {
        infoWindow.setContent(`Beth Medrash Govoha (Hebrew: בית מדרש גבוה‎, Sephardi pronunciation: Beth Midrash Gavoha. lit: "High House of Learning"; also known as Lakewood Yeshiva or BMG) is a Haredi Jewish Lithuanian yeshiva in Lakewood Township, New Jersey. It was founded by Rabbi Aaron Kotler in 1943 and is the second-largest yeshiva in the world, after Mir Yeshiva in Jerusalem.[1][2] As of 2019, it had 6,715 students, 2,748 regular and 3,967 in Kollel status.[3] The principal Rosh yeshiva since 1982 is Rabbi Malkiel Kotler. Talmud and halakha studies in the institution are carried in the form of over 200 small groups, Chaburos, which consist of several students mentored by a veteran, each pursuing its own specific curriculum with an emphasis on individual learning.[4]
        <br>
        <a target ="_blank" href = "https://en.wikipedia.org/wiki/Beth_Medrash_Govoha/" >more info </a>`);
        infoWindow.open(map, marker);
    });
    const marker2 = new google.maps.Marker({
        position: pcs,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: {

        },
        title: "PCS",
    });

    marker2.addListener('click', () => {
        infoWindow.setContent(`pcs is a great place 
        <br>
        <a target ="_blank" href = "https://pcsnynj.org/" >more info </a>`);
        infoWindow.open(map, marker2);
    });

    const panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
        position: bmgloc
            // pov: {
            //     heading: 180,
            //     pitch: 20
            // }
    });

    map.addListener('center_changed', () => {

        const center = map.getCenter();
        console.log('center changed', center.lat(), center.lng());
        panorama.setPosition(center);

    });

    const bounds = new google.maps.LatLngBounds();
    bounds.extend(bmgloc);
    bounds.extend(pcs);
    map.fitBounds(bounds);

    setTimeout(() => {
        map.panTo(pcs);
    }, 10000);
}());