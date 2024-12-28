import CardComponent from "../components/CardComponent";
import { cards, gradients } from "../assets/constants";

function Explore() {
  return (
    <div className="w-full px-8 pt-12 md:pt-32">
      <div className="w-full">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <h1 className="heading text-3xl md:text-4xl lg:text-6xl uppercase">
              Explore
            </h1>
            <p className="text-xl pt-7">
              Discover the hottest music releases of the year!
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center pt-14 md:pt-20">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
            {cards.map((card, index) => (
              <CardComponent
                key={index}
                card={card}
                gradient={gradients[index]}
                isFullWidth={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;