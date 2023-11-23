'use client';

import { Button } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

const UserPage = ({ params }: { params: { username: string } }) => {
  const { status } = useSession();
  if (status === 'unauthenticated') {
    return redirect('/auth');
  } else {
    return (
      <div>
        <h1>User page {params.username}</h1>
        <Button onPress={() => signOut()}>Logout</Button>
      </div>
    );
  }
};

export default UserPage;
