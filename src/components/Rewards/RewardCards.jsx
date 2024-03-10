// import { cmsCards } from "@/constants/data"
import Card from "./RewardCard"

const RewardCards = () => {
  return (
    <section className="card bg-background">      
      <div className="flex-wrap p-8 card-container gap-6 grid grid-cols-3">
       {
        Array(9).fill().map((_, i) => (
          <Card key={i} />
        ))
       }
      </div>
    </section>
  );
};

export default RewardCards;
