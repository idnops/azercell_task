import { TransactionType } from "../model/types";

class TransactionRepository {
  getTransactionList = async (): Promise<TransactionType[]> => {
    const res = await fetch(
      "https://mocki.io/v1/be7c4bc8-75c0-4122-baf9-1cd1fdded4cb",
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };
}

export const transactionRepository = new TransactionRepository();
