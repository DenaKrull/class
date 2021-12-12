(function() {
    'use strict';
    const parts = $('#parts');
    const NUM_PARTS = 5;
    const PART_MARGIN = 10;
    const max_width = parts.innerWidth() - 100;
    let x = 0;
    let y = 0;
    let maxzIndex = 0;
    for (let i = 1; i <= NUM_PARTS; i++) {
        $(`<img class = "part potato" src="images/${i}.png">`)
            .appendTo(parts)
            .css({
                top: y,
                left: x

            });
        x += PART_MARGIN;
        if (x >= max_width) {
            x = 0;
            y += PART_MARGIN;
        }
    }
    const parts2 = $('.part');


    function saveState() {
        const partsInfo = [];
        parts.each((i, part) => {
            partsInfo.push({
                src: part.attr('src'),
                top: part.css('top'),
                left: part.css('left'),
                zIndex: part.css('zIndex')
            });
        });
        localStorage.setItem('potato', JSON.stringify(partsInfo));

    }

    let dragging = false;
    let offset;


    $(document).on('mousedown', '.part', e => {
        dragging = $(e.target);
        offset = { x: e.offsetX, y: e.offsetY };
        // dragging.css({ position: 'absolute' });
        dragging.css({ zIndex: ++maxzIndex });
    }).mousemove((e) => {
        if (dragging) {
            e.preventDefault();

            dragging.css({
                top: e.pageY - offset.y,
                left: e.pageX - offset.x
            });
        }
    }).mouseup(() => {
        if (dragging) {

            dragging = null;
            saveState();
        }

    });
    if (localStorage.potato) {
        const partsInfo = JSON.parse(localStorage.potato);
        partsInfo.forEach(partInfo => {
            $(`imf[src="${partInfo}"]`).css({
                top: partInfo.top,
                left: partInfo.left,
                zIndex: partInfo.zIndex
            });
        });
    }
}());