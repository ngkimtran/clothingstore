/**
 * order controller
 */

import { factories } from "@strapi/strapi";
import { UserCartPropsType } from "../../../types/DataTypes";

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY);

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async create(ctx: any) {
      const { products } = ctx.request.body;

      const lineItems = await Promise.all(
        products.map(async (product: UserCartPropsType) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "eur",
              product_data: {
                name: item.title,
              },
              unit_amount: item.newPrice * 100, //unit amount is in cent by default
            },
            quantity: product.quantity,
          };
        })
      );

      try {
        const session = await stripe.checkout.sessions.create({
          line_items: lineItems,
          mode: "payment",
          success_url: `${process.env.CLIENT_URL}?success=true`,
          cancel_url: `${process.env.CLIENT_URL}?success=false`,
          payment_method_types: ["card", "paypal"],
        });

        await strapi.service("api::order.order").create({
          data: {
            products,
            stripe_id: session.id,
          },
        });

        return { stripeSession: session };
      } catch (err) {
        ctx.response.status = 500;
        return err;
      }
    },
  })
);
