import Link from 'next/link';

const Navbar = () => {
    return (
      <div className="py-4 px-4 flex justify-between items-center border-b">
        <div>
          <Link href="/">
            <a className="text-2xl font-bold tracking-tight">Hashnode Blog</a>
          </Link>
        </div>
        <div className="flex justify-start items-center space-x-6">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </div>
    );
}

export { Navbar };