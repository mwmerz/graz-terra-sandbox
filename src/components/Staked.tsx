import { useBalanceStaked } from "graz";

export const Staked = () => {
  const { data: balanceStaked, isLoading } = useBalanceStaked();

  return (
    <div>
      <h1>Staked</h1>
      {isLoading ? (
        "Fetching staked balance..."
      ) : (
        <p>
          {balanceStaked?.amount} {balanceStaked?.denom}
        </p>
      )}
    </div>
  );
};
