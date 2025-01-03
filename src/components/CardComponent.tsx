import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Stripe from "stripe";

interface CardProps {
  card: {
    image: string;
    title: string;
    description: string;
    amount: number;
  };
  gradient: string;
  isFullWidth: boolean;
}

const CardComponent: React.FC<CardProps> = ({
  card,
  gradient,
  isFullWidth,
}) => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const stripePayment = async () => {
    setLoading(true);
    console.log("card-clicked", card);

    const stripe = new Stripe(
      "sk_test_51NVJ4RECpTjJRRCodmsyMIK613vbK0ElhyUwMReszzx6qs8FzZQDdi8VtZ5DjYkn5gNQryjTDMNkf01QLKVwxwTP00DT8HavNL",
      {
        typescript: true,
      }
    );

    const items = [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: card.amount * 100,
          product_data: {
            name: card.title,
            description: card.description,
            images: [card.image],
          },
        },
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items,
      mode: "payment",
      success_url: "http://localhost:5173",
    });

    if (session.url) {
      console.log("Success");
      window.open(session.url, "_blank");
    } else {
      console.log("Failed");
    }

    setLoading(false);
  };

  // const openChat = (): void => {
  //   localStorage.setItem("artistId", card.title);
  //   navigate(`/artist/${card.title}`, { state: { openChat: false } });
  // };
  return (
    <div
      data-aos="zoom-in-up"
      className={`flex-shrink-0 p-4 snap-center rounded-xl hover:cursor-pointer ${
        isFullWidth
          ? "w-full"
          : "sm:w-1/2 md:w-[calc((100%-32px)/2.5)] lg:w-[calc((100%-32px)/3.5)]"
      }`}
      style={{ background: gradient }}
      // onClick={stripePayment}
      // onClick={openChat}
    >
      <div className="shadow-lg overflow-hidden">
        <img
          src={card.image}
          alt="Card"
          className="w-full h-80 rounded-xl object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center font-bold card-title uppercase text-2xl md:text-3xl pb-2 pt-4">
            <h3>{card.title}</h3>
            <span className="text-xl md:text-2xl">${card.amount}</span>
          </div>
          <p>{card.description}</p>

          {/* Pay Now Button */}
          <button
            onClick={stripePayment}
            disabled={loading}
            className="mt-5  w-full py-2 px-4 bg-[#131313] text-white text-lg  rounded-full hover:bg-[#444] transition"
          >
            {loading ? (
              <div className="flex justify-center items-center py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5"
                >
                  <g>
                    <circle
                      cx="12"
                      cy="2.5"
                      r="1.5"
                      fill="currentColor"
                      opacity=".14"
                    />
                    <circle
                      cx="16.75"
                      cy="3.77"
                      r="1.5"
                      fill="currentColor"
                      opacity=".29"
                    />
                    <circle
                      cx="20.23"
                      cy="7.25"
                      r="1.5"
                      fill="currentColor"
                      opacity=".43"
                    />
                    <circle
                      cx="21.5"
                      cy="12"
                      r="1.5"
                      fill="currentColor"
                      opacity=".57"
                    />
                    <circle
                      cx="20.23"
                      cy="16.75"
                      r="1.5"
                      fill="currentColor"
                      opacity=".71"
                    />
                    <circle
                      cx="16.75"
                      cy="20.23"
                      r="1.5"
                      fill="currentColor"
                      opacity=".86"
                    />
                    <circle cx="12" cy="21.5" r="1.5" fill="currentColor" />
                    <animateTransform
                      attributeName="transform"
                      calcMode="discrete"
                      dur="0.75s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
                    />
                  </g>
                </svg>
                <span className="pl-2 text-sm font-semibold">
                  Please wait...
                </span>
              </div>
            ) : (
              <span className="heading font-bold text-sm">BUY NOW</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
