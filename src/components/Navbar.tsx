import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <nav className="min-h-[10vh] p-8 flex justify-between w-full ">
      <h3 className="font-bold text-lg">Web3UI</h3>
      <ConnectButton />
    </nav>
  );
};

export default Navbar;
