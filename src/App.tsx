import { useAccount } from "graz";
import { Connect, Balances, Staked } from "./components";

function App() {
  const { data: account } = useAccount();
  return (
    <div className="App">
      <Connect />
      {account && (
        <div>
          <Balances />
          <Staked />
        </div>
      )}
    </div>
  );
}

export default App;
