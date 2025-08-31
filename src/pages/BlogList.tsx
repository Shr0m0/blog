import PostCard from "../components/PostCard";
import posts from "../posts/posts.json";

export default function BlogList() {
  return (
    <div>
      <h1 className="bloglist-title">All Blogs</h1>
      <div className="bloglist-container">
        {posts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
