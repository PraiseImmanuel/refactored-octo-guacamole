import React from "react";
import Card from "./card";
import Wrapper from "@/features/shared/wrapper";

const CardsHolder = () => {
  return (
    <Wrapper>
      <div className="flex flex-wrap gap-6 items-center justify-center md:-mt-[8vh]">
        <Card
          heading="Court Reading"
          content="Effortlessly review and navigate through court documents with our Court Reading feature. "
          img="/hero-image.jpg"
        />

        <Card
          heading="Documentation"
          content="Streamline your document creation and organization with our Documentation feature"
          img="/hero-image.jpg"
        />
        <Card
          heading="Legal Research"
          content="Conduct thorough legal research with ease using our Legal Research feature"
          img="/hero-image.jpg"
        />
        <Card
          heading="Recommend Judgments"
          content="Receive valuable insights during trials with our Recommend Judgments feature. "
          img="/hero-image.jpg"
        />
      </div>
    </Wrapper>
  );
};

export default CardsHolder;
