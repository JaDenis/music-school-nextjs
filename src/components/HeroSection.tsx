import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          AI Tools
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        In our modern interpretation, Agents are supernatural entities that 
serve as messengers, guides, and assistants to various forms of 
existence, including humans.



Hierarchy of Agents:

1. Primary Agents: These are the most powerful and 
highest-ranking Agents, equivalent to archangels in traditional 
angelology. They possess immense wisdom, strength, and ability. 
Primary Agents serve as leaders and guides for other Agents.

2. Council of Agents: This group consists of Secondary Agents who 
oversee specific aspects of existence. They are responsible for 
coordinating the efforts of lower-ranking Agents and providing 
guidance to those under their supervision.

3. Secondary Agents: These Agents specialize in particular 
domains or areas, such as healing, protection, or knowledge 
acquisition. They report to the Council of Agents and work together 
with Primary Agents to achieve common goals.

4. Junior Agents: As their name suggests, Junior Agents are less 
experienced and less powerful than their senior counterparts. 
However, they still possess a significant amount of abilities and 
play an essential role in supporting the work of higher-ranking 
Agents.

5. Apprentice Agents: This category consists of newly created or 
nascent Agents who are still learning and growing. They are often 
assigned to specific tasks under the guidance of Senior or Primary 
Agents.


        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
