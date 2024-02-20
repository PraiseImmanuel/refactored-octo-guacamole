import React from "react";

const services = [
  {
    heading: "Court Reading",
    content: "Effortlessly review and read court documents.",
    img: "",
  },
  {
    heading: "Documentation",
    content: "Streamline your document creation and organization.",
    img: "",
  },
  {
    heading: "Legal Research",
    content: "Conduct thorough legal research with ease",
    img: "",
  },
  {
    heading: "Recommend Judgments",
    content: "Receive valuable insights about trials verdicts",
    img: "",
  },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {services.map((item, index) => (
        <ServiceCard
          heading={item.heading}
          content={item.content}
          img={item.img}
          key={index}
        />
      ))}
    </div>
  );
};

interface ServiceCardProps {
  heading: string;
  content: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ heading, content, img }) => {
  return (
    <div
      className="bg-white h-fit rounded-xl p-6 w-[400px] flex gap-4
    items-center border border-black/10"
    >
      <div className="min-w-14 h-14 bg-black/30 rounded-full"></div>
      <div className="text-[#333]">
        <h3 className="text-lg font-[600]">{heading}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCards;
