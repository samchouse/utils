import Link from 'next/link';

const FourOhFour = () => (
  <div>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-brand text-5xl font-bold">404</h1>
      <p className="mt-5 text-gray-50 text-xl font-bold">
        Sorry, the page you are looking for doesn&apos;t exist.
      </p>
      <Link href="/" passHref>
        <a>
          <p className="mt-1 text-gray-50 underline text-lg font-bold">
            &#60;- Go Home
          </p>
        </a>
      </Link>
    </div>
  </div>
);

export default FourOhFour;
