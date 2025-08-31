import { Link } from "react-router-dom";

type PostCardProps = {
  id: number;
  title: string;
  excerpt: string;
};

export default function PostCard({ id, title, excerpt }: PostCardProps) {
  return (
    <Link to={`/blogs/${id}`} className="post-card-link">
      <div className="post-card">
        <h2 className="post-card-title">{title}</h2>
        <p className="post-card-excerpt">{excerpt}</p>
      </div>
    </Link>
  );
}
