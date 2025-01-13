import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [cart, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  //  creating client secret from sever

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // store in state
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  //  what will happened onSubmit()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card === null) return;

    // creating payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      return console.log("[error]", error);
    } else if (paymentMethod) {
      // confirm card payment

      const { paymentIntent, error: err } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
            },
          },
        }
      );
      if (err) {
        console.log("con err");
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        //   if payment confirm then

        const paymentInfo = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        // send  data to Data base
        const res = await axiosSecure.post("/payments", paymentInfo);
        if (res.data.success) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your payment successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/history");
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#ffffff",
              padding: "2rem",

              "::placeholder": {
                color: "#ffffff",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn bg-orange-500 text-white mt-10"
        disabled={!stripe || !clientSecret || totalPrice === 0}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutFrom;
