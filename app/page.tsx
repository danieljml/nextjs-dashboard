import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="text-gray-800">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
              Welcome to Acme.
            </h2>
            <p className="mb-4 text-xl leading-normal md:text-2xl">
              This application is designed for Invoice Management.
            </p>
            <div className="space-y-4">
              <p className="font-semibold">
                Please use the following credentials to log in:
              </p>
              <ul className="list-disc pl-4">
                <li>
                  <span className="font-semibold">Email: </span>
                  user@nextmail.com
                </li>
                <li>
                  <span className="font-semibold">Password:</span> 123456
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            alt="desktop image"
            width={1000}
            height={750}
          />
        </div>
      </div>
    </main>
  );
}
