import { motion } from "framer-motion";
import React from "react";

import { SesamoLogo } from "@/assets/logos/SesamoLogo";
import { OutpetLogo } from "@/assets/logos/OutpetLogo";
import { MasseriaLogo } from "@/assets/logos/MasseriaLogo";
import { HVMLogo } from "@/assets/logos/HVMLogo";
import { AlvoradaLogo } from "@/assets/logos/AlvoradaLogo";
import { UCDBLogo } from "@/assets/logos/UCDBLogo";

export const Brands = () => (
  <section className=" bg-theme-light dark:bg-darkmode-theme-light py-12 sm:py-14">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 md:w-4/5 lg:w-[820px] xl:w-[1020px] 2xl:w-[1200px]">
        <div className="-mx-4 flex flex-col items-center justify-center text-center lg:flex-row lg:text-left">
          <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
            <div className="flex flex-col">
              <h2 className="mb-2 text-3xl font-bold tracking-normal  sm:text-4xl 2xl:text-5xl">
                Empresas que
              </h2>
              <h2 className=" text-darkmode-primary dark:text-darkmode-primary  text-3xl  font-bold tracking-normal sm:text-4xl 2xl:text-5xl">
                confiam na gente
              </h2>
            </div>
          </div>
          <div className="mx-auto w-2/3 sm:w-[620px] lg:mx-0 lg:w-1/2 lg:pl-10">
            <div className="-m-4 flex flex-wrap">
              <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                <UCDBLogo />
              </div>

              <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                <HVMLogo />
              </div>

              <div className="flex w-1/2 justify-center py-6  sm:w-1/3">
                <SesamoLogo />
              </div>

              <div className="flex w-1/2  justify-center py-6  sm:w-1/3">
                <MasseriaLogo />
              </div>

              <div className="flex w-1/2 justify-center py-6  sm:w-1/3">
                <OutpetLogo />
              </div>

              <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                <AlvoradaLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
