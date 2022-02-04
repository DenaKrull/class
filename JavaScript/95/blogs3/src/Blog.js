import React, { useEffect, useState } from 'react';
import Post from './Post';
import { useParams } from 'react-router-dom';

export default function Blog() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [posts, setPosts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        const posts = await r.json();
        setPosts(posts);
        setError(null);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return (
    <>
      {posts.map(post => (<Post key={post.id} post={post} />))}
    </>
  )
}