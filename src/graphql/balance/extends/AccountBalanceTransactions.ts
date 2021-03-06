import { extendType } from "nexus";

export const AccountBalanceTransactions = extendType({
  type: "Account",
  definition(t) {
    t.list.field("balanceTransactions", {
      type: "BalanceTransaction",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.balanceTransactions.list({
          stripe_account: id
        });
        return data;
      }
    });
  }
});
