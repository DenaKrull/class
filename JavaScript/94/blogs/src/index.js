import './index.css';
import LoadBlogs from './blogList.js';
import $ from 'jquery';


LoadBlogs();

$('#home').click((e) => {
  e.preventDefault();
  LoadBlogs();
});