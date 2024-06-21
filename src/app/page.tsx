import { sql } from '@vercel/postgres';
import React from 'react';

export default async function Cart(): Promise<React.JSX.Element> {
  const { rows } = await sql`SELECT *
                             FROM CARTS`;

  return (
    <>
      <div>TEST</div>
      <div>
        {rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.quantity}
          </div>
        ))}
      </div>
    </>
  );
}
