export type CustomerType = {
  CustomerID: string;
  Name: string;
  Surname: string;
  BirthDate: string;
  GSMNumber: string;
  CardNumber?: string;
};

export type CreateCustomerType = {
  Name: string;
  Surname: string;
  BirthDate: string;
  GSMNumber: string;
  CardNumber: string;
};
