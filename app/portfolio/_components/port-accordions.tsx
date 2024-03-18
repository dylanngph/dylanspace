"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PORT_SKILLS } from "@/lib/constants/port-skills";

const PortAccordions = () => {
  return (
    <Accordion defaultExpandedKeys={["0"]}>
      {PORT_SKILLS.map((skill, index) => (
        <AccordionItem key={index} aria-label={skill.title} title={skill.title}>
          <p className="text-muted-foreground">{skill.description}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PortAccordions;
