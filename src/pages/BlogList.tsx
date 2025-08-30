import { Link } from 'react-router-dom';
import posts from '../posts/posts.json';

export default function BlogList() {
  return (
    <div>
      <h1>All Blogs</h1>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/blogs/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
