// import { core } from "nexus";
import * as Stripe from "stripe";

export interface Account extends Stripe.accounts.IAccount {}

export interface BankAccount extends Stripe.bankAccounts.IBankAccount {}

export interface BalanceTransaction
  extends Stripe.balance.IBalanceTransaction {}

export interface Card extends Stripe.cards.ICard {}

export interface Charge extends Stripe.charges.ICharge {}

export interface CountrySpec extends Stripe.countrySpecs.ICountrySpec {}

export interface Customer extends Stripe.customers.ICustomer {}

// export interface Customer
//   extends core.Omit<Stripe.customers.ICustomer, "cards"> {
//   cards: Card[];
// }

export interface Invoice extends Stripe.invoices.IInvoice {}

export interface InvoiceLineItem extends Stripe.invoices.IInvoiceLineItem {}

interface MetadataField extends Stripe.IMetadata {}
export interface Metadata {
  metadata: MetadataField;
}

export interface MetadataType {
  key: string;
  value: string;
}

export interface Plan extends Stripe.plans.IPlan {}

export interface Product extends Stripe.products.IProduct {}

export interface StripeSubscription
  extends Stripe.subscriptions.ISubscription {}

export interface Context {
  stripe: Stripe;
}
