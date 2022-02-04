import setPage from "./page.js";
import './posts.css';
import $ from 'jquery';
import LoadComments from "./comments.js";


function createPostEntry(postInfo) {
  const postElement = $(`
  <div class ="post">
      <div class="title">${postInfo.title}</div>
      <div >${postInfo.body}</div>
      <div class="comments-area">
          <div class="comments"></div>
          <button>show comments </button>
      </div>
  </div>`);

  const button = postElement.find('button');
  const commentElem = postElement.find('.comments');
  let ShowComments = false;
  let comments;
  button.click(async () => {
    if (!ShowComments) {
      if (!comments) {
        comments = await LoadComments(postInfo.id);
        commentElem.html(comments);
      }
      button.text('hide comments');
      commentElem.slideDown();
    }
    else {
      commentElem.slideUp();
    }
    ShowComments = !ShowComments;
    button.text(`${ShowComments ? 'hide comments' : 'show comments'}`);
  });
  return postElement;
}

export default async function LoadPosts(blog) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`);
    if (!response.ok) {
      throw new Error(` ${response.statusText}`);
    }
    const posts = await response.json();
    setPage({
      subtitle: 'Blog List',
      content: posts.map(post => createPostEntry(post))
    });
  } catch (e) {
    console.log(e);
  }
}
