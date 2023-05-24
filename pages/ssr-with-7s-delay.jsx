export default function ssrWith7sDelay({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const text = "ssr with 7s delay";

  await new Promise((resolve) => {
    setTimeout(resolve, 7000);
  });

  return {
    props: {
      text,
    },
  };
}
