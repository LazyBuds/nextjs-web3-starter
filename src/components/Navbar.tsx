import ConnectButton from "@/components/ConnectButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="min-h-[10vh] md:p-8 py-8 px-2 flex justify-between w-full ">
      <Link className="font-bold text-lg" href="/">
        Web3UI
      </Link>
      <ConnectButton />
    </nav>
  );
};

export default Navbar;
