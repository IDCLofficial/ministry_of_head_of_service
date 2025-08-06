'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutCommisionerProps {
    imgSrc: string;
    title: string;
}

export default function AboutCommisioner({imgSrc, title}: AboutCommisionerProps) {
  return (
    <section className="w-full bg-[#f3f8fa] py-12 md:py-20 flex justify-center">
        <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="flex flex-col lg:flex-row items-center gap-8 md:gap-18 w-full px-4 lg:px-[3rem]"
        >
            {/* Left: Commissioner Image */}
            <div className="bg-white rounded-xl shadow-lg flex-shrink-0 w-full md:w-auto flex justify-center">
                <div className="relative w-full h-[320px] sm:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[450px]">
                    <Image
                    src={imgSrc}
                    alt="Commissioner"
                    fill
                    className="object-fill object-center rounded-xl"
                    sizes="(max-width: 768px) 220px, 320px"
                    />
                </div>
            </div>
            {/* Right: Text Content */}
            <div className="flex-1 w-full md:w-auto mt-6 md:mt-0">
                <h2 className="text-xl sm:text-2xl lg:text-[43px] font-bold text-dark-primary mb-4">{title}</h2>
                <p className="text-dark-primary-body text-base mb-4">
                Mrs. Chikodi Emenalom currently serves as the Acting Head of Service of Imo State, bringing over three decades of experience and leadership to the helm of the state’s civil service. Appointed in October 2024 by His Excellency, Senator Hope Uzodimma, Mrs. Emenalom is a distinguished public servant known for her administrative excellence, integrity, and commitment to public sector reforms.
                A passionate advocate for civil service professionalism and women in leadership, Mrs. Emenalom is widely respected within the public sector for her forward-thinking approach, collaborative leadership style, and unwavering dedication to good governance.
                Under her stewardship, the Imo State Civil Service continues to strive toward greater efficiency, transparency, and people-centered service delivery in alignment with the vision of the State Government.
                </p>
                {/* <p className="text-dark-primary-body text-base mb-6 text-justify">
                    His vision for the Ministry of Budget, Economic Planning & Statistics is rooted in transparency, inclusivity, and innovation. Dr. Osuala is committed to making Imo State’s budgeting process open and accessible, exemplified by his introduction 
                    of the state’s first Citizens’ Budget—also translated into Igbo to ensure no one is left behind. He believes in participatory governance, regularly engaging all 655 autonomous communities, civil society, and youth groups to shape budget priorities that reflect the true needs of Imo people.
                    Under his leadership, the ministry has achieved unprecedented budget transparency, earning international recognition and securing significant World Bank grants that have fueled capital projects and improved revenue generation.
                    Dr. Osuala’s goal is to institutionalize citizen-driven budgeting, foster sustainable economic growth, and ensure that Imo State’s development is both inclusive and measurable. His unwavering dedication continues to position the ministry as a model for fiscal responsibility and community empowerment in Nigeria.
                </p> */}
                {/* <AppLink href="/about-us/team/#team" label="Our Team" variant="primary" className="border border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] font-medium hover:bg-white hover:text-black transition-all duration-300"/> */}
            </div>
        </motion.div>
    </section>
  );
} 