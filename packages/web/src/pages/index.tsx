import type { NextPage } from 'next';

import Button from '../components/Button';
import GitHubButton from '../components/GitHubButton';

const Index: NextPage = () => {
  return (
    <>
      <GitHubButton />
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-mb-4 w-52 h-52 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-brand text-5xl font-bold">Utils</h1>
          <div className="flex flex-col mt-3 lg:flex-row">
            <Button disabled href="#" className="opacity-60 cursor-not-allowed">
              Latest iOS
            </Button>
            <Button href="/api/builds/android/latest">Lastest Android</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
