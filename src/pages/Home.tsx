import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import posts from "../posts/posts.json";

export default function Home() {
  const recentPosts = [...posts].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div>
      <h1 className="home-title">Welcome to My Blog</h1>
      <p className="home-description">
        This is my personal blog where I share my thoughts, learning journey, and experiences. 
        Have a look at the latest posts below!
      </p>

      <h2 className="recent-posts-heading">Recent Posts</h2>
      {recentPosts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          excerpt={post.excerpt}
        />
      ))}

      <div className="view-all-container">
        <Link to="/blogs" className="view-all-link">
          View All Blogs →
        </Link>
      </div>
    </div>
  );
}
