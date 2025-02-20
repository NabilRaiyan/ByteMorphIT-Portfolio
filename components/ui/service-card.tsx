import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-gradient-to-r from-amber-400 to-orange-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-64 h-64">
      <div className="w-16 h-16">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={64}
          height={64}
          className="object-contain mb-14"
        />
      </div>
      <h1 className="text-xl font-bold mt-4">{title}</h1>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
