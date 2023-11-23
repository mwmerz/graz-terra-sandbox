import React from "react";
import ReactDOM from "react-dom/client";
import { ChainInfo } from "@keplr-wallet/types";
import { GrazProvider, WalletType } from "graz";
import App from "./App.tsx";

const terraInfo: ChainInfo = {
  chainId: "phoenix-1",
  chainName: "Terra",
  chainSymbolImageUrl: "https://station-assets.terra.dev/img/coins/Luna.svg",
  rpc: "https://terra-rpc.publicnode.com",
  rest: "https://phoenix-lcd.terra.dev",
  bip44: {
    coinType: 330,
  },
  alternativeBIP44s: [
    {
      coinType: 118,
    },
  ],
  bech32Config: {
    bech32PrefixAccAddr: "terra",
    bech32PrefixAccPub: "terrapub",
    bech32PrefixValAddr: "terravaloper",
    bech32PrefixValPub: "terravaloperpub",
    bech32PrefixConsAddr: "terravalcons",
    bech32PrefixConsPub: "terravalconspub",
  },
  currencies: [
    {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/phoenix/uluna.png",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2",
      coinImageUrl: "https://station-assets.terra.dev/img/coins/Luna.svg",
      gasPriceStep: {
        low: 0.015,
        average: 0.025,
        high: 0.04,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: "LUNA",
    coinMinimalDenom: "uluna",
    coinDecimals: 6,
    coinGeckoId: "terra-luna-2",
    coinImageUrl: "https://station-assets.terra.dev/img/coins/Luna.svg",
  },
  walletUrlForStaking: "https://station.money/staking",
  features: ["cosmwasm"],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GrazProvider
      grazOptions={{
        chains: [terraInfo],
        defaultWallet: WalletType.STATION,
      }}
    >
      <App />
    </GrazProvider>
  </React.StrictMode>
);
