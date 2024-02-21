import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const services = [
  {
    heading: "Court Reading",
    content: "Effortlessly review and read court documents.",
    img: "/mic.jpg",
    route: "/court-reading",
  },
  {
    heading: "Documentation",
    content: "Streamline your document creation and organization.",
    img: "/doc.jpeg",
    route: "/documentation",
  },
  {
    heading: "Legal Research",
    content: "Conduct thorough legal research with ease",
    img: "/legal-r.jpeg",
    route: "/legal-research",
  },
  {
    heading: "Recommend Judgments",
    content: "Receive valuable insights about trials verdicts",
    img: "/recom.jpeg",
    route: "/recommend-judgments",
  },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((item, index) => (
        <ServiceCard
          heading={item.heading}
          content={item.content}
          img={item.img}
          key={index}
          route={item.route}
        />
      ))}
    </div>
  );
};

interface ServiceCardProps {
  heading: string;
  content: string;
  route: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  heading,
  content,
  img,
  route,
}) => {
  const router = useRouter();
  return (
    <div
      className="bg-white hover:opacity-85 h-fit rounded-xl p-6 max-w-[500px] flex gap-4
    items-center border border-black/10 transition-all duration-200 hover:scale-[0.98] cursor-pointer"
      onClick={() => router.push(route)}
    >
      <div className="min-w-[80px] md:min-w-[100px] min-h-[80px] md:h-[100px] bg-black/30 rounded-full">
        <Image
          src={img}
          alt=""
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="text-[#333]">
        <h3 className="text-lg font-[600]">{heading}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCards;
