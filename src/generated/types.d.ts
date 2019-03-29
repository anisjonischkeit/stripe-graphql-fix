/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */

import * as t from "../typeDefs"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  CARD_FUNDING_TYPE: "credit" | "debit" | "prepaid" | "unknown"
  COUNTRY: "US"
  CURRENCY: "eur" | "gbp" | "usd"
  LEGAL_ENTITY_TYPE: "company" | "individual"
}

export interface NexusGenRootTypes {
  Account: t.Account;
  AccountVerification: { // root type
    disabled_reason?: string | null; // String
    due_by?: number | null; // Int
    fields_needed?: Array<string | null> | null; // [String]
  }
  AccountVerificationFields: { // root type
    company: NexusGenRootTypes['VerificationFields']; // VerificationFields!
    individual: NexusGenRootTypes['VerificationFields']; // VerificationFields!
  }
  AdditionalOwner: { // root type
    address?: NexusGenRootTypes['Address'] | null; // Address
    dob?: NexusGenRootTypes['Dob'] | null; // Dob
    first_name?: string | null; // String
    last_name?: string | null; // String
    maiden_name?: string | null; // String
    personal_id_number_provided: boolean; // Boolean!
  }
  Address: { // root type
    city?: string | null; // String
    country?: string | null; // String
    line1?: string | null; // String
    line2?: string | null; // String
    postal_code?: string | null; // String
    state?: string | null; // String
  }
  Balance: { // root type
    available: NexusGenRootTypes['BalanceItem'][]; // [BalanceItem!]!
    livemode: boolean; // Boolean!
    object: string; // String!
    pending: NexusGenRootTypes['BalanceItem'][]; // [BalanceItem!]!
  }
  BalanceItem: { // root type
    amount: number; // Int!
    currency: string; // String!
  }
  BalanceTransaction: t.BalanceTransaction;
  BankAccount: { // root type
    account_holder_name?: string | null; // String
    account_holder_type?: NexusGenEnums['LEGAL_ENTITY_TYPE'] | null; // LEGAL_ENTITY_TYPE
    bank_name?: string | null; // String
    country?: string | null; // String
    currency?: string | null; // String
    customer?: string | null; // String
    fingerprint?: string | null; // String
    id: string; // ID!
    last4?: string | null; // String
    routing_number?: string | null; // String
    status?: string | null; // String
  }
  Card: t.Card;
  Charge: t.Charge;
  CountrySpec: { // root type
    default_currency?: string | null; // String
    id?: string | null; // String
    object?: string | null; // String
    verification_fields: NexusGenRootTypes['AccountVerificationFields']; // AccountVerificationFields!
  }
  Customer: t.Customer;
  Dob: { // root type
    day?: number | null; // Int
    month?: number | null; // Int
    year?: number | null; // Int
  }
  FeeDetails: { // root type
    amount?: number | null; // Int
    application?: string | null; // String
    currency?: string | null; // String
    description?: string | null; // String
    id?: string | null; // String
    type?: string | null; // String
  }
  Invoice: t.Invoice;
  InvoiceLineItem: t.InvoiceLineItem;
  LegalEntity: { // root type
    additional_owners: NexusGenRootTypes['AdditionalOwner'][]; // [AdditionalOwner!]!
    address?: NexusGenRootTypes['Address'] | null; // Address
    dob?: NexusGenRootTypes['Dob'] | null; // Dob
    first_name?: string | null; // String
    last_name?: string | null; // String
    maiden_name?: string | null; // String
    personal_address?: NexusGenRootTypes['Address'] | null; // Address
    personal_id_number_provided?: boolean | null; // Boolean
    type?: NexusGenEnums['LEGAL_ENTITY_TYPE'] | null; // LEGAL_ENTITY_TYPE
  }
  Plan: t.Plan;
  Product: t.Product;
  Query: {};
  VerificationFields: { // root type
    additional?: Array<string | null> | null; // [String]
    minimum?: Array<string | null> | null; // [String]
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CARD_FUNDING_TYPE: NexusGenEnums['CARD_FUNDING_TYPE'];
  COUNTRY: NexusGenEnums['COUNTRY'];
  CURRENCY: NexusGenEnums['CURRENCY'];
  LEGAL_ENTITY_TYPE: NexusGenEnums['LEGAL_ENTITY_TYPE'];
}

export interface NexusGenFieldTypes {
  Account: { // field return type
    balance: NexusGenRootTypes['Balance']; // Balance!
    balanceTransactions: NexusGenRootTypes['BalanceTransaction'][]; // [BalanceTransaction!]!
    bankAccounts: NexusGenRootTypes['BankAccount'][]; // [BankAccount!]!
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    country: string; // String!
    id: string; // ID!
    legal_entity: NexusGenRootTypes['LegalEntity'] | null; // LegalEntity
    verification: NexusGenRootTypes['AccountVerification']; // AccountVerification!
  }
  AccountVerification: { // field return type
    disabled_reason: string | null; // String
    due_by: number | null; // Int
    fields_needed: Array<string | null> | null; // [String]
  }
  AccountVerificationFields: { // field return type
    company: NexusGenRootTypes['VerificationFields']; // VerificationFields!
    individual: NexusGenRootTypes['VerificationFields']; // VerificationFields!
  }
  AdditionalOwner: { // field return type
    address: NexusGenRootTypes['Address'] | null; // Address
    dob: NexusGenRootTypes['Dob'] | null; // Dob
    first_name: string | null; // String
    last_name: string | null; // String
    maiden_name: string | null; // String
    personal_id_number_provided: boolean; // Boolean!
  }
  Address: { // field return type
    city: string | null; // String
    country: string | null; // String
    line1: string | null; // String
    line2: string | null; // String
    postal_code: string | null; // String
    state: string | null; // String
  }
  Balance: { // field return type
    available: NexusGenRootTypes['BalanceItem'][]; // [BalanceItem!]!
    livemode: boolean; // Boolean!
    object: string; // String!
    pending: NexusGenRootTypes['BalanceItem'][]; // [BalanceItem!]!
  }
  BalanceItem: { // field return type
    amount: number; // Int!
    currency: string; // String!
  }
  BalanceTransaction: { // field return type
    amount: number | null; // Int
    available_on: number | null; // Int
    created: number | null; // Int
    currency: string | null; // String
    description: string | null; // String
    exchange_rate: number | null; // Float
    fee: number | null; // Int
    fee_details: NexusGenRootTypes['FeeDetails'][]; // [FeeDetails!]!
    id: string; // String!
    net: number | null; // Int
    object: string; // String!
    source: string | null; // String
    status: string | null; // String
    type: string | null; // String
  }
  BankAccount: { // field return type
    account_holder_name: string | null; // String
    account_holder_type: NexusGenEnums['LEGAL_ENTITY_TYPE'] | null; // LEGAL_ENTITY_TYPE
    bank_name: string | null; // String
    country: string | null; // String
    currency: string | null; // String
    customer: string | null; // String
    fingerprint: string | null; // String
    id: string; // ID!
    last4: string | null; // String
    routing_number: string | null; // String
    status: string | null; // String
  }
  Card: { // field return type
    address_city: string | null; // String
    address_country: string | null; // String
    address_line1: string | null; // String
    address_line1_check: string | null; // String
    address_line2: string | null; // String
    address_state: string | null; // String
    address_zip: string | null; // String
    address_zip_check: string | null; // String
    brand: string | null; // String
    country: string | null; // String
    customer: string | null; // String
    cvc_check: string | null; // String
    default_for_currency: boolean | null; // Boolean
    dynamic_last4: string | null; // String
    exp_month: number | null; // Int
    exp_year: number | null; // Int
    fingerprint: string | null; // String
    funding: NexusGenEnums['CARD_FUNDING_TYPE']; // CARD_FUNDING_TYPE!
    id: string; // ID!
    last4: string | null; // String
    name: string | null; // String
    tokenization_method: string | null; // String
  }
  Charge: { // field return type
    amount: number | null; // Int
    currency: string | null; // String
    id: string; // String!
    status: string; // String!
  }
  CountrySpec: { // field return type
    default_currency: string | null; // String
    id: string | null; // String
    object: string | null; // String
    verification_fields: NexusGenRootTypes['AccountVerificationFields']; // AccountVerificationFields!
  }
  Customer: { // field return type
    bankAccounts: NexusGenRootTypes['BankAccount'][]; // [BankAccount!]!
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    charges: NexusGenRootTypes['Charge'][]; // [Charge!]!
    email: string | null; // String
    id: string; // ID!
  }
  Dob: { // field return type
    day: number | null; // Int
    month: number | null; // Int
    year: number | null; // Int
  }
  FeeDetails: { // field return type
    amount: number | null; // Int
    application: string | null; // String
    currency: string | null; // String
    description: string | null; // String
    id: string | null; // String
    type: string | null; // String
  }
  Invoice: { // field return type
    amount_due: number; // Int!
    amount_paid: number; // Int!
    id: string | null; // ID
    lines: NexusGenRootTypes['InvoiceLineItem'][]; // [InvoiceLineItem!]!
  }
  InvoiceLineItem: { // field return type
    amount: number; // Int!
    currency: string; // String!
    id: string; // ID!
    quantity: number; // Int!
  }
  LegalEntity: { // field return type
    additional_owners: NexusGenRootTypes['AdditionalOwner'][]; // [AdditionalOwner!]!
    address: NexusGenRootTypes['Address'] | null; // Address
    dob: NexusGenRootTypes['Dob'] | null; // Dob
    first_name: string | null; // String
    last_name: string | null; // String
    maiden_name: string | null; // String
    personal_address: NexusGenRootTypes['Address'] | null; // Address
    personal_id_number_provided: boolean | null; // Boolean
    type: NexusGenEnums['LEGAL_ENTITY_TYPE'] | null; // LEGAL_ENTITY_TYPE
  }
  Plan: { // field return type
    amount: number; // Int!
    currency: string; // String!
    formattedAmount: string; // String!
    id: string; // ID!
    product: NexusGenRootTypes['Product']; // Product!
  }
  Product: { // field return type
    id: string; // ID!
    name: string; // String!
    plans: NexusGenRootTypes['Plan'][]; // [Plan!]!
    type: string; // String!
  }
  Query: { // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    charge: NexusGenRootTypes['Charge'] | null; // Charge
    charges: NexusGenRootTypes['Charge'][]; // [Charge!]!
    countrySpecs: NexusGenRootTypes['CountrySpec'] | null; // CountrySpec
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    customers: NexusGenRootTypes['Customer'][]; // [Customer!]!
    invoice: NexusGenRootTypes['Invoice'] | null; // Invoice
    invoices: NexusGenRootTypes['Invoice'][]; // [Invoice!]!
    plan: NexusGenRootTypes['Plan'] | null; // Plan
    plans: NexusGenRootTypes['Plan'][]; // [Plan!]!
    platform: NexusGenRootTypes['Account']; // Account!
    product: NexusGenRootTypes['Product'] | null; // Product
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    upcomingInvoice: NexusGenRootTypes['Invoice'] | null; // Invoice
  }
  VerificationFields: { // field return type
    additional: Array<string | null> | null; // [String]
    minimum: Array<string | null> | null; // [String]
  }
}

export interface NexusGenArgTypes {
  Query: {
    account: { // args
      id: string; // ID!
    }
    charge: { // args
      id: string; // ID!
    }
    countrySpecs: { // args
      country: string; // String!
    }
    customer: { // args
      id: string; // ID!
    }
    invoice: { // args
      id: string; // ID!
    }
    plan: { // args
      id: string; // ID!
    }
    product: { // args
      id: string; // ID!
    }
    upcomingInvoice: { // args
      customerId: string; // ID!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Account" | "AccountVerification" | "AccountVerificationFields" | "AdditionalOwner" | "Address" | "Balance" | "BalanceItem" | "BalanceTransaction" | "BankAccount" | "Card" | "Charge" | "CountrySpec" | "Customer" | "Dob" | "FeeDetails" | "Invoice" | "InvoiceLineItem" | "LegalEntity" | "Plan" | "Product" | "Query" | "VerificationFields";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "CARD_FUNDING_TYPE" | "COUNTRY" | "CURRENCY" | "LEGAL_ENTITY_TYPE";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: t.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}