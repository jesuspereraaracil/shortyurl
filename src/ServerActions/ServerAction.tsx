import { Button } from '@/components/ui/button';
import React from 'react';

type ServerActionProps = {
  action: () => void;
  copy: string;
};

export const ServerAction = ({ action, copy }: ServerActionProps): React.JSX.Element => {
  return (
    <form action={action}>
      <Button type="submit">{copy}</Button>
    </form>
  );
};
