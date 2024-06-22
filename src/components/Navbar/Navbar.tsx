import { auth } from '@/auth';
import { ServerAction } from '@/ServerActions/ServerAction';
import { login, logout } from '@/ServerActions/authActions';

export const Navbar = async () => {
  const session = await auth();

  if (!session) {
    console.log('[Navbar] no session');
    return (
      <div className="container my-2 flex gap-2">
        <ServerAction action={login} copy={'LOGIN'} />
      </div>
    );
  }

  console.log('[Navbar] session: ', session.user?.name);

  return (
    <div className="container my-2 flex items-center gap-2">
      <span>Logged as: {session.user?.email}</span>
      <ServerAction action={logout} copy={'LOGOUT'} />
    </div>
  );
};
