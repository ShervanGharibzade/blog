import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="my-2">{post.body}...</p>
      <p className="postCredit">
        <Link
          className="mr-2 border-2 border-yellow-200 rounded-lg p-1 text-yellow-200"
          to={`post/${post.id}`}>
          View Post
        </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
export default PostsExcerpt;
