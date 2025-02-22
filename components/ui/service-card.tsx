import Image from "next/image";


// Card props
interface CardProps {
  title: string;
  description: string;
  icon: string;
}

// service card
const ServiceCard = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-gradient-to-r from-black to-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-64 h-64 drop-shadow-lg hover:shadow-custom">
      <div className="w-16 h-16">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={64}
          height={64}
          className="object-contain mb-14 relative bottom-14"
        />
      </div>
      <div className="relative bottom-12">
        <h1 className="text-xl font-bold mt-0 text-center font-space bg-gradient-to-r bg-clip-text text-transparent from-orange-500 via-amber-500 to-orange-600">{title}</h1>
        <p className="text-sm mt-4 font-manrope text-left text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
