import { useAccount } from "wagmi";
import { AiTwotoneCheckCircle } from "react-icons/ai";
const Status = () => {
  const { isConnecting, isConnected, isDisconnected, isReconnecting, status } =
    useAccount();
  return (
    <div className="font-bold">
      {(isConnecting || isReconnecting) && (
        <p className="flex gap-2 items-center hover:cursor-pointer hover:bg-yellow-300  text-yellow-500 border p-4 rounded-md border-yellow-500">
          <AiTwotoneCheckCircle size={20} />
          Connecting...
        </p>
      )}
      {isConnected && (
        <p className="flex gap-2 items-center hover:cursor-pointer hover:bg-green-300  text-green-500 border p-4 rounded-md border-green-500">
          <AiTwotoneCheckCircle size={20} />
          Connected.
        </p>
      )}
      {isDisconnected && (
        <p className="flex gap-2 items-center hover:cursor-pointer hover:bg-red-300  text-red-500 border p-4 rounded-md border-red-500">
          <AiTwotoneCheckCircle size={20} />
          Disconnected.
        </p>
      )}
    </div>
  );
};

export default Status;
