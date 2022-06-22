import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KLBXvBIyqlWCJdrmWfOIduIIallknvqaaJhX7WzlXPyYdYDvfkYenbw24tLH2QT4qJNRFkqFJ71Vi7b3dAxh5ko009g990ZNV"
);

export const PaymentMethod = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
