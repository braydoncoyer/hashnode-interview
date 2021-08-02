import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const activePageStyles = () => {
    return router.asPath === '/' ? 'font-bold' : null
  }
    return (
      <div className="px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="py-10">
            <Link href="/">
              <a className="text-2xl font-bold tracking-tight">
                Braydon's Blog
              </a>
            </Link>
          </div>
          <div className={`flex justify-start items-center space-x-6 mb-2 ${activePageStyles()}`}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        </div>
      </div>
    );
}

export { Navbar };