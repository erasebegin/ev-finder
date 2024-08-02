import { CarDetails } from "@/types";

type Props = {
  carData: CarDetails;
};

const CarCard: React.FC<Props> = ({ carData }) => {
  const { make, model } = carData;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>{make}</h3>
      <h3>{model}</h3>
    </div>
  );
};

export default CarCard;
