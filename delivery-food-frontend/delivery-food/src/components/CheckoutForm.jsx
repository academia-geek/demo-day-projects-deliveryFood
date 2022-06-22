import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "../context/CartContext";
import axios from "axios";
import Swal from "sweetalert2";

export const CheckoutForm = () => {
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { total, cart } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  console.log(total);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      setId(id);

      const { data } = await axios.post(
        "https://backend-appguajolotas.herokuapp.com/checkout",
        {
          id,
          amount: total,
        }
      );
      if (data.confirmacion) {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Pago realizado",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          window.location.reload(true);
        });
      }
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <label className="text-lg">
            Ingresa el número de tu tarjeta de credito:
          </label>
          <CardElement
            className="p-3 border-2 text-lg border-[color:var(--dark-blue)]
           rounded-md"
          />
        </div>
        <h3 className="text-left font-medium text-xl mt-3">
          Total a pagar: ${total}
        </h3>
        <button
          className="mt-5 bg-[color:var(--dark-blue)] p-2 text-[color:var(--white)]
            text-lg w-full rounded-md hover:bg-slate-700"
        >
          Pagar
        </button>
        {id && loading && (
          <div className="flex flex-col justify-center items-center">
            <span className="text-lg">Realizando pago...</span>
          </div>
        )}
      </form>
    </div>
  );
};
