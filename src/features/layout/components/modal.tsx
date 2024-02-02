"use client";
import React from "react";
import { motion } from "framer-motion";
import AuthCard from "../../landing/component/authcard";

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ setModalOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`bg-black/[0.4] min-h-screen z-10 fixed top-0 left-0 w-full justify-center items-center flex`}
    >
      <AuthCard setModalOpen={setModalOpen} />
    </motion.div>
  );
};

export default Modal;
