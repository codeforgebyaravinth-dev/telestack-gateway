import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "stripeInvoiceId";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.stripeInvoiceId?.toString() || String(record.id);
};
