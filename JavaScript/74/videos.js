(async function() {
    'use strict';

    async function loadVideos() {
        try {


            const response = await fetch('videos.json');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return await response.json();

        } catch (e) {
            console.error(e);
        }
    }

    function populateVideoList(videos) {
        const videoList = $('#sidebar ul');
        const videoElem = $('#video');
        // let activeVideo;
        videos.forEach(video => {
            $(`
            <li>
            <span>${video.title}</span>
            <img src="${video.image}" alt="${video.title}">
            </li>`)
                .appendTo(videoList)
                .click(function() {
                    videoElem.attr('src', video.url);
                    videoElem.attr('controls', true);
                    // this.style = 'color: green';
                    // $(this).css({
                    //     color: 'gray',
                    //     fontStyle: 'italic'
                    // });


                    // this.className = 'watched';
                    $('.active').removeClass('active');
                    $(this).addClass('watched active');

                    // if (activeVideo) {
                    //     activeVideo.style = 'background-color: white';
                    // }
                    // this.style = 'background-color: yellow';

                });
        });
    }
    const videos = await loadVideos();
    populateVideoList(videos);
}());