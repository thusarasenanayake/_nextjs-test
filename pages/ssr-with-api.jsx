export default function ssrWithApi({ post }) {
  return (
    <div>
      <pre>{JSON.stringify(post, "", 4)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
