import { sql } from "@vercel/postgres";

export default function ssrWithDatabase({ text, data }) {
  return (
    <div>
      <p>{text}</p>
      <pre>{JSON.stringify(data, "", 3)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const text = "ssr with database";

  const {rowCount} = await sql`SELECT * from Email`;

  // console.log(data.rowCount);

  return {
    props: {
      text,
      data : rowCount,
    },
  };
}
