import { Image } from '@nextui-org/react';

const Home = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <Image
        isBlurred
        width={240}
        src="/logo.svg"
        alt=""
        className="mx-auto"
      />
      <h1 className="text-9xl">Chat Bite</h1>
    </div>
  );
};

export default Home;
