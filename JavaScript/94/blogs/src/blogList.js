import setPage from "./page.js";
import './blogList.css';
import $ from 'jquery';
import LoadPosts from "./posts.js";


function createBlogEntry(blogInfo) {
  return $(`<div class ="blog">
  <div class="title">${blogInfo.name}</div>
  <div class="website">${blogInfo.website}</div>
  <div class="company">${blogInfo.company.name}</div>
  <div >${blogInfo.company.catchPhrase}</div>
  <div >${blogInfo.company.bs}</div>
  </div>`).click(() => LoadPosts(blogInfo));
}
let blogs;
export default async function LoadBlogs() {
  try {
    if(!blogs){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(` ${response.statusText}`);
    }
     blogs = await response.json();
  }
    setPage({
      subtitle: 'Blog List',
      content: blogs.map(blog => createBlogEntry(blog))
    });
  } catch (e) {
    console.log(e);
  }
}
