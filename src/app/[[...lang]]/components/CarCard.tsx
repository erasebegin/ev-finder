import { CarDetails } from "@/types";

type Props = {
  carData: CarDetails;
};

const CarCard: React.FC<Props> = ({ carData }) => {
  const { Title } = carData ?? {};
  console.log({ carData });
  return (
    <div className="flex flex-col items-center">
      <h3>{Title}</h3>
    </div>
  );
};

export default CarCard;
