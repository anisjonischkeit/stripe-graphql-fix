const { extendType, idArg } = require("nexus");

const AccountQueries = extendType({
  type: "Query",
  definition(t) {
    t.field("platform", {
      type: "Account",
      resolve() {
        return {};
      }
    });

    t.list.field("accounts", {
      type: "Account",
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.accounts.list();
        return data;
      }
    });

    t.field("account", {
      type: "Account",
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.accounts.retrieve(id);
      }
    });
  }
});

module.exports = { AccountQueries };
