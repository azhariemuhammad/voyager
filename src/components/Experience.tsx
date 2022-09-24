import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const ExperienceList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const experiences = [
    {
      id: "1",
      jobTitle: "Software Engineer",
      company: "Tokopedia",
      contract: "Full-time",
      startDate: "Oct 2019",
      endDate: "Present",
    },
    {
      id: "2",
      jobTitle: "Frontend Developer",
      company: "Gramedia Digital Nusantara",
      contract: "Full-time",
      startDate: "Mar 2017",
      endDate: "Sep 2019",
    },
  ];

  const handleClickCard = (id: string) => {
    if (selectedId !== null) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };
  return (
    <>
      <motion.div layout className="mt-20 mb-20 cursor-pointer">
        {experiences.map((item) => (
          <>
            <motion.div
              layout
              key={item.id}
              onClick={() => handleClickCard(item.id)}
              className="rounded-md m-2  bg-slate-50 p-4"
            >
              <motion.div layout className="text-xl">
                {item.jobTitle}
              </motion.div>
              <motion.div layout>
                <p className="text-sm">
                  <span>{item.company}</span> <span>{item.contract}</span>
                </p>
                <p className="text-xs">
                  <span>{item.startDate}</span> - <span>{item.endDate}</span>{" "}
                </p>
              </motion.div>
              <AnimatePresence>
                {selectedId === item.id && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-2"
                  >
                    <p>
                      Develop and maintain merchant site for over 10 million
                      sellers in Indonesia
                    </p>
                    <p>
                      {" "}
                      Develop Tokopedia Seller API client site. Tokopedia Seller
                      API is an integrated API platform. I build the interfaces
                      to help our partners manage multiple sellers.
                    </p>
                    <p>
                      Working on CMS to support our team in updating categories,
                      showcases, and Products
                    </p>
                    <p>
                      I work in a workgroup to improve and maintain our page
                      performance. We are focusing to achieve above 60 PSI score
                      on mobile and desktop environment
                    </p>
                    <p>Mentoring new joiners in our team</p>
                    <p>
                      Working closely and collaboratively with PM, QA, and
                      Back-end in every project
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        ))}
      </motion.div>
    </>
  );
};

export default ExperienceList;
