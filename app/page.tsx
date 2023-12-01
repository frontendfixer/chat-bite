import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa6';

import { getServerAuthSession } from '@/server/auth';

const Home = async () => {
  const session = await getServerAuthSession();

  return (
    <main className="grid h-[100svh] place-content-center">
      <Card
        className="w-[96vw] max-w-[412px]"
        isBlurred
      >
        <CardHeader className="flex items-center justify-between bg-slate-400/30 shadow backdrop-blur-sm">
          <Avatar
            isBordered
            showFallback
            radius="full"
            size="md"
            src={`https://robohash.org/${
              session?.user.name && 'chat-bite'
            }?set=set3&size=64x64`}
          />
          {session ? (
            <Button
              as={Link}
              href={`/user/${session?.user.id}`}
            >
              Open Chat
            </Button>
          ) : (
            <Button
              as={Link}
              href="/auth?type=signup"
            >
              Sign up
            </Button>
          )}
        </CardHeader>
        <CardBody className="my-16 flex flex-col items-center gap-4">
          <Image
            isBlurred
            width={96}
            src="/logo.svg"
            alt=""
            className="mx-auto"
          />
          <h1 className="text-5xl font-extrabold">Chat Bite</h1>
        </CardBody>
        <CardFooter className="justify-center gap-1 bg-slate-400/30 text-center text-sm font-bold text-slate-500">
          <FaLock /> All messages are end to end encrypted and secure
        </CardFooter>
      </Card>
    </main>
  );
};

export default Home;
