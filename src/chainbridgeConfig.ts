import ETHIcon from "./media/tokens/eth.svg";
import WETHIcon from "./media/tokens/weth.svg";
import DAIIcon from "./media/tokens/dai.png";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
  deployedBlockNumber?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Rinkeby-Fuji Bridge
  chains: [
    {
      chainId: 0,
      networkId: 4,
      name: "Rinkeby",
      bridgeAddress: "0xE7E06DbDE4B53916B082EF2cD3e4dA7726f35AfF",
      erc20HandlerAddress: "0x59Cf02A02bfbD7e0F04Af886d63a033E0823ff5c",
      rpcUrl: "https://rinkeby-light.eth.linkpool.io",
      type: "Ethereum",
      blockExplorer: "https://rinkeby.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      deployedBlockNumber: 3554182,
      tokens: [
        {
          address: "0xe116a4cf94754856586d19e3eb741c09ceaa81de",
          name: "Pyros",
          symbol: "PYRO",
          imageUri: DAIIcon,
          resourceId:
            "0x0000000000000000000000e116a4cf94754856586d19e3eb741c09ceaa81de01",
        },
        {
          address: "0x735B895bCb37cBba5812154f4F34480EcE1B672C",
          name: "Wrapped ETC",
          symbol: "wETC",
          imageUri: WETHIcon,
          resourceId:
            "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
        },
        {
          address: "0x14dD060dB55c0E7cc072BD3ab4709d55583119c0",
          name: "An ERC20",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000014dD060dB55c0E7cc072BD3ab4709d55583119c001",
        },
      ],
    },
    {
      chainId: 1,
      networkId: 43113,
      name: "Fuji",
      bridgeAddress: "0xe3aDD2c1Ab996cfd1A6186DA47a9D330350C62FF",
      erc20HandlerAddress: "0x597483123A7A9c2Fe9e25c51500b9Bc0b4679b86",
      rpcUrl: "https://avalanche--fuji--rpc.datahub.figment.io/apikey/c863bd667354ebe021eaaf5f8908f8ef/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://cchain.explorer.avax-test.network/tx",
      nativeTokenSymbol: "AVAX",
      deployedBlockNumber: 0,
      tokens: [
        {
          address: "0x23A9FD05ef0c5fb9dDE964C4d4191A169Fd221f8",
          name: "wrapped ETC",
          symbol: "xPYRO",
          imageUri: DAIIcon,
          resourceId:
            "0x0000000000000000000000e116a4cf94754856586d19e3eb741c09ceaa81de01",
          isNativeWrappedToken: true,
        },
        {
          address: "0x23A9FD05ef0c5fb9dDE964C4d4191A169Fd221f8",
          name: "Wrapped ETC",
          symbol: "wETC",
          imageUri: WETHIcon,
          resourceId:
            "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
          isNativeWrappedToken: true,
        },
        {
          address: "0x14dD060dB55c0E7cc072BD3ab4709d55583119c0",
          name: "An ERC20",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000014dD060dB55c0E7cc072BD3ab4709d55583119c001",
        },
      ],
    },
  ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
};

