import { Button, CardFooter, Image, Link } from '@nextui-org/react';
import { Card, CardBody } from '@nextui-org/react';
import NextImage from 'next/image';

import { getServerAuthSession } from '@/server/auth';

export default async function User() {
  const session = await getServerAuthSession()!;
  return (
    <div className="container grid h-[100svh] place-content-center px-3">
      <Card isBlurred>
        <CardBody>
          <Image
            as={NextImage}
            src={`https://robohash.org/${session?.user.name}?set=set3&size=240x240`}
            width="240"
            height="240"
            isBlurred
            alt={`${session?.user.name} profile photo`}
            className="mx-auto"
          />
        </CardBody>
        <CardFooter>
          <h1 className="mx-auto text-center text-[2.5rem] font-black text-primary-200">
            {session?.user.name}
          </h1>
        </CardFooter>
      </Card>
      <div className="mt-5 max-w-[50ch] text-center">
        <p className="text-xl">
          Welcome to <strong className="text-primary-400">Chat Bite</strong>
        </p>
        <p>
          Your secure, instant connection hub. Enjoy seamless communication with
          end-to-end encryption.
        </p>
        <Button
          href={'/user/' + session?.user.id}
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
          className="mx-auto mt-4 w-1/2"
        >
          Open Chat
        </Button>
      </div>
    </div>
  );
}
