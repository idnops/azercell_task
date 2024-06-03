import { customerRepository } from "@/entities/customer/api/repository";
import { transactionRepository } from "@/entities/transaction/api/repository";
import { CustomerManagement } from "@/widgets/customer-management";
import { ConsoleLogger } from "./logger/logger";

export default async function Home() {
  const logger = new ConsoleLogger();
  logger.log("app started at", new Date().toLocaleTimeString());
  const customerList = await customerRepository.getCustomerList();
  const transactionsList = await transactionRepository.getTransactionList();

  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="container mx-auto">
        <CustomerManagement
          customerList={customerList}
          transactionList={transactionsList}
        />
      </div>
    </main>
  );
}
