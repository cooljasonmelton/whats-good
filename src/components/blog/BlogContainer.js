import React from 'react';

// styling
import './BlogContainer.css';

// data
import data from './data.json'

// components
import Blog from './Blog'

const BlogContainer = () => {
  return (
    <div className="BlogContainer cont-a">
      {data.blogs.map(blog=> {
        return (
          <Blog key={blog.id} blog={blog} />
        )
      })}


    </div>
  );
}

export default BlogContainer;
