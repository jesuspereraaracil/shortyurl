import { sql } from '@vercel/postgres';
import React from 'react';

export default async function Cart({ params }: { params: { user: string } }): Promise<React.JSX.Element> {
  const { rows } = await sql`SELECT *
                             from CARTS
                             where user_id = ${params.user}`;

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
