export default function ssr({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      text: "ssr",
    },
  };
}
