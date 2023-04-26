import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import "./style.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { AccordionTrigger } from "@radix-ui/react-accordion";

const Radix = () => {
  return (
    <div className="h-[100vh] bg-blue-400 flex items-center justify-center">
      <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item className="AccordionItem" value="item-1">
          <AccordionTrigger className="AccordionTrigger">
            Is it accessible?
            <ChevronDownIcon className="AccordionChevron" />
          </AccordionTrigger>
          <Accordion.AccordionContent className="AccordionContent">
            <div className="AccordionContentText">
              Yes! You can animate the Accordion with CSS or JavaScript.
            </div>
          </Accordion.AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
          <AccordionTrigger className="AccordionTrigger">
            Is it possible?
            <ChevronDownIcon className="AccordionChevron" />
        </AccordionTrigger>
          <Accordion.AccordionContent className="AccordionContent">
            <div className="AccordionContentText">
              Yes! You can animate the Accordion with CSS or JavaScript.
            </div>
          </Accordion.AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem w-full" value="item-3">
          <AccordionTrigger className="AccordionTrigger">
            Can it be animated?
            <ChevronDownIcon className="AccordionChevron" />
        </AccordionTrigger>
          <Accordion.AccordionContent className="AccordionContent">
            <div className="AccordionContentText">
              Yes! You can animate the Accordion with CSS or JavaScript.
            </div>
          </Accordion.AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default Radix;
