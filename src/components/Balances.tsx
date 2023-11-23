import { useBalances } from "graz";

export const Balances = () => {
  const { data: balances, isLoading } = useBalances();

  return (
    <div>
      <h1>Balances</h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {balances?.map((balance) => (
            <li key={balance.denom}>
              {balance.denom}: {balance.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
