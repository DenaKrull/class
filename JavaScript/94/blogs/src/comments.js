
import './comments.css';



function createComment(comment) {
  return `
  <div class ="comments">
      <div class="body">${comment.body}</div>
      <div class="author">${comment.email}</div>
  </div>`;


}

export default async function LoadComments(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if (!response.ok) {
      throw new Error(` ${response.statusText}`);
    }
    const comments = await response.json();
    return comments.map(comment => createComment(comment));
  } catch (e) {
    console.log(e);
  }
}
