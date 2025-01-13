import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);

const Payment = () => {
  return (
    <section>
      <SectionTitle heading={"Payment"} subheading={"Place your order"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutFrom />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
