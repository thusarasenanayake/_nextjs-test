export default function ssgWithApi({ post }) {
  return (
    <div>
      <pre>{JSON.stringify(post, "", 4)}</pre>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
