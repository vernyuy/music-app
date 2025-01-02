import React from "react";
import { useNavigate } from "react-router-dom";
// import Stripe from "stripe";

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

  const navigate = useNavigate();

  // const stripePayment = async () => {
  //   console.log("card-clicked", card);

  //   const stripe = new Stripe(
  //     "sk_test_51NVJ4RECpTjJRRCodmsyMIK613vbK0ElhyUwMReszzx6qs8FzZQDdi8VtZ5DjYkn5gNQryjTDMNkf01QLKVwxwTP00DT8HavNL",
  //     {
  //       typescript: true,
  //     }
  //   );

  //   const items = [
  //     {
  //       quantity: 1,
  //       price_data: {
  //         currency: "usd",
  //         unit_amount: card.amount * 100,
  //         product_data: {
  //           name: card.title,
  //           description: card.description,
  //           images: [card.image],
  //         },
  //       },
  //     },
  //   ];

  //   const session = await stripe.checkout.sessions.create({
  //     payment_method_types: ["card"],
  //     line_items: items,
  //     mode: "payment",
  //     success_url: "http://localhost:5173",
  //   });

  //   if (session.url) {
  //     console.log("Success");
  //     window.open(session.url, "_blank");
  //   } else {
  //     console.log("Failed");
  //   }
  // };

  const openChat = (): void => {
    localStorage.setItem( 'artistId', card.title)
    navigate(`/artist/${card.title}`, { state: { openChat: false } });
  };
  return (
    <div
      className={`flex-shrink-0 p-4 snap-center rounded-xl hover:cursor-pointer ${
        isFullWidth
          ? "w-full"
          : "sm:w-1/2 md:w-[calc((100%-32px)/2.5)] lg:w-[calc((100%-32px)/3.5)]"
      }`}
      style={{ background: gradient }}
      // onClick={stripePayment}
      onClick={openChat}
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
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
