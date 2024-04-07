import { getCustomerOrders } from "@/services/shopify/graphql/customer";

type OrderType = {
  name: string;
  orderNumber: number;
  statusUrl: string;
  lineItems: {
    edges: Array<{
      node: {
        currentQuantity: number;
        title: 2;
      };
    }>;
  };
};

export const runtime = "edge";

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();
  return (
    <div className='rounded-lg border-2 border-solid border-gray-800 p-4'>
      <h2>Your orders</h2>
      <section>
        {ordersInfo.orders?.map((order: OrderType) => (
          <a
            href={order.statusUrl}
            key={order.orderNumber}
            className='mb-4 block rounded-lg bg-gray-900 p-3 font-light no-underline'
          >
            <h3 className='font-bold'>Order {order.name}</h3>
            {order.lineItems.edges.map(({ node }) => (
              <div key={node.title}>
                <span>{node.title}</span>
                <span className='font-bold text-pink-600'>
                  {" "}
                  x{node.currentQuantity}
                </span>
              </div>
            ))}
          </a>
        ))}
      </section>
    </div>
  );
}

// import { getCustomerOrders } from "@/services/shopify/graphql/customer";

// export default async function MyAccountPage() {
//   const ordersInfo = await getCustomerOrders();
//   return (
//     <div className='rounded-lg border-2 border-solid border-gray-800 p-4'>
//       <section>
//         <h2 className='mb-4 text-2xl'>Orders</h2>
//         {ordersInfo.orders?.map((order) => (
//           <p key={order.orderNumber}>{order.orderNumber}</p>
//         ))}
//       </section>
//     </div>
//   );
// }
