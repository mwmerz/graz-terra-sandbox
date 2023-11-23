import { useAccount, useConnect, useDisconnect, WalletType } from "graz";

export const Connect = () => {
  const { connect } = useConnect();
  const { data: account, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  console.log({ account });

  function handleConnect() {
    return isConnected
      ? disconnect()
      : connect({ chainId: "phoenix-1", walletType: WalletType.STATION });
  }

  return (
    <div>
      {account && `Connected to ${account.bech32Address}`}
      <button onClick={handleConnect}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};
