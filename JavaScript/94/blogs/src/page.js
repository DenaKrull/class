import $ from 'jquery';

const subtitleElem = $('#subtitle');
const contentElem = $('#content');

export default function setPage(page){
subtitleElem.text(page.subtitle);
contentElem.html(page.content);
}




 