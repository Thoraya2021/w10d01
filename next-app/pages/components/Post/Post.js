import Link from "next/link";

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const post = await res.json();

  return {
    props: { post}, 
  };
}
const Posts = ({ post }) => {
  return (
    <div>
      {post.map((item) => (
        <Link href={`posts/${item.id}`} key={item.id}>
          <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        </Link>
      ))}{" "}
    </div>
  );
};

export default Posts;