import type { NextPage } from 'next';
import Image from 'next/image';

import Button from '../components/Button';

const Index: NextPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src="/logo.png"
          alt="Utils logo"
          width={204}
          height={160}
          draggable={false}
        />
        <h1 className="mt-5 text-brand text-5xl font-bold">Utils</h1>
        <div className="flex flex-col mt-3 lg:flex-row">
          <Button disabled href="#" className="opacity-60 cursor-not-allowed">
            Latest iOS
          </Button>
          <Button href="/api/builds/android/latest">Lastest Android</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
