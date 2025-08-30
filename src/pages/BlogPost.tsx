import { useParams } from 'react-router-dom';
import posts from '../posts/posts.json';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p><em>{post.date}</em></p>
      <p>{post.content}</p>
    </div>
  );
}
