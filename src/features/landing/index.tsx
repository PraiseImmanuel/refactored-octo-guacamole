"use client";
import React, { useState } from "react";
import Navbar from "../layout/navbar";
import Hero from "./component/hero";
import CardsHolder from "./component/card/cards-holder";
import Footer from "../layout/components/footer";
import Modal from "../layout/components/modal";
import { AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="font-poppins">
      <Navbar setModalOpen={setModalOpen} />
      <main className="pb-14">
        <Hero setModalOpen={setModalOpen} />
        <CardsHolder />
      </main>
      <Footer />
      <AnimatePresence>
        {isModalOpen && <Modal setModalOpen={setModalOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
