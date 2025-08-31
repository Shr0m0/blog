import { useParams } from "react-router-dom";
import posts from "../posts/posts.json";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return <p className="not-found">Post not found.</p>;
  }

  return (
    <div className="blog-post">
      <h1 className="blog-title">{post.title}</h1>
      <p className="blog-date">{post.date}</p>
      <div className="blog-content">
        {post.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
