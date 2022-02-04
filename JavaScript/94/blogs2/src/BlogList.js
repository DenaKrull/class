import React, { useEffect, useState } from 'react';
import './BlogList.css';

export default function BlogList() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    (async () => {
      try {
        if (!blogs.length) {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            throw new Error(` ${response.statusText}`);
          }
          const theBlogs = await response.json();
          setBlogs(theBlogs);
        }

      } catch (e) {
        console.log(e);
      }
    })();
  }, [blogs]);


  return (
    
    blogs.map(blogInfo => {
      return (
        <div className="blog">
          <div className="title">{blogInfo.name}</div>
          <div className="website">{blogInfo.website}</div>
          <div className="company">{blogInfo.company.name}</div>
          <div >{blogInfo.company.catchPhrase}</div>
          <div >{blogInfo.company.bs}</div>
        </div>
      )
    }
    )
  );
    
}
