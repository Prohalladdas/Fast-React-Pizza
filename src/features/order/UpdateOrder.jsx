import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

export default function UpdateOrder({ order }) {
  const fether = useFetcher();
  console.log(order); //delete this

  return (
    <fether.Form method="PATCH" className="text-right">
      <Button type="primary">Take priority</Button>;
    </fether.Form>
  );
}

export async function action({ request, params }) {
  console.log(request); //delete this

  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
