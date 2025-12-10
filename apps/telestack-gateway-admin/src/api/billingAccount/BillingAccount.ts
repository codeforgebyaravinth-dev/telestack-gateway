import { Invoice } from "../invoice/Invoice";
import { User } from "../user/User";

export type BillingAccount = {
  createdAt: Date;
  currentPeriodEnd: Date | null;
  id: string;
  invoices?: Array<Invoice>;
  isActive: boolean | null;
  stripeCustomerId: string | null;
  updatedAt: Date;
  user?: User | null;
};
