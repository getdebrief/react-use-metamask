import * as React from 'react';

type MetaMaskInitializing = {
  account: null;
  chainId: null;
  status: 'initializing';
};

type MetaMaskUnavailable = {
  account: null;
  chainId: null;
  status: 'unavailable';
};

type MetaMaskNotConnected = {
  account: null;
  chainId: string;
  status: 'notConnected';
};

type MetaMaskConnecting = {
  account: null;
  chainId: string;
  status: 'connecting';
};

export type MetaMaskConnected = {
  account: string;
  chainId: string;
  status: 'connected';
};

export type MetaMaskState =
  | MetaMaskInitializing
  | MetaMaskUnavailable
  | MetaMaskNotConnected
  | MetaMaskConnecting
  | MetaMaskConnected;

export type IMetaMaskContext = MetaMaskState & {
  connect: () => Promise<string[] | null>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ethereum: any;
};

export const MetamaskContext = React.createContext<
  IMetaMaskContext | undefined
>(undefined);
