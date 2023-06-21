import pg from "pg";

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

  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  });

  pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
  });

  const client = await pool.connect();

  const query = {
    text: "SELECT * from User",
  };
  const res = await client.query(query);
  const data = res.rows;

  return {
    props: {
      text,
      data,
    },
  };
}
