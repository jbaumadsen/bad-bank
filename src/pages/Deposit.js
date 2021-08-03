
import TransactionContextProvider from "../contexts/TransactionContext";
import TransactionForm from "../components/Transaction/TransactionForm";

const Deposit = () => {
  return (
    <TransactionContextProvider transactionType="Deposit">
      <TransactionForm transactionType="Deposit" />
    </TransactionContextProvider>
  );
}

export default Deposit;