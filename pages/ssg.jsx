export default function ssg({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      text: "ssg",
    },
  };
}
