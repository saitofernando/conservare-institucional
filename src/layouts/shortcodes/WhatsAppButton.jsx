import React from "react";

import { useEffect, useState } from "react";
import { WhatsappIcon } from "@/assets/icons/WhatsappIcon";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1500) {
      setIsVisible(true);
    } else if (scrolled <= 1500) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <a
          className="custom-border-gray fixed bottom-6 left-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-[#1e9d4f] transition hover:bg-[#24D366]"
          target="_blank"
          href="https://wa.me/message/LV47IM4YP4KEA1"
        >
          <WhatsappIcon />
          <div className="fixed bottom-6 left-6 z-50 flex h-12 w-12 animate-ping  items-center justify-center rounded-xl bg-[#1e9d4f] transition hover:bg-[#24D366]"></div>
        </a>
      )}
    </>
  );
};
