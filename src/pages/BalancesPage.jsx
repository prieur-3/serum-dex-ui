import React from 'react';
import { Tabs } from 'antd';
import {
  useWalletBalancesForAllMarkets,
  useOpenOrderAccountBalancesForAllMarkets,
} from '../utils/markets';
import FloatingElement from '../components/layout/FloatingElement';
import WalletBalancesTable from '../components/UserInfoTable/WalletBalancesTable';
import AccountsTable from '../components/UserInfoTable/AccountsTable';

const { TabPane } = Tabs;

export default function BalancesPage() {
  const [
    walletBalances,
    loadedWalletBalances,
  ] = useWalletBalancesForAllMarkets();
  const [
    accountBalances,
    accountBalancesLoaded,
  ] = useOpenOrderAccountBalancesForAllMarkets();

  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <Tabs defaultActiveKey="walletBalances">
        <TabPane tab="Wallet Balances" key="walletBalances">
          <WalletBalancesTable
            loaded={loadedWalletBalances}
            walletBalances={walletBalances}
          />
        </TabPane>
        <TabPane tab="Market balances" key="marketBalances">
          <AccountsTable
            loaded={accountBalancesLoaded}
            accountBalances={accountBalances}
          />
        </TabPane>
      </Tabs>
    </FloatingElement>
  );
}
