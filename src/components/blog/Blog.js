import React from 'react';

// styling
import './BlogContainer.css';

const Blog = props => {
  const { blog } = props
  return (
    <div className="Blog cont-b">
      <h4>{blog.date}</h4>
      {blog.title ?  
        <h4>{blog.title}</h4>
          : ""
      }
      <p>{blog.content}</p>
      

    </div>
  );
}

export default Blog;
