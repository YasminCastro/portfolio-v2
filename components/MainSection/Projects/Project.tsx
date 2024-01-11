"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Project() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Image src="/mockup.png" alt="" width={310} height={300} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <DrawerTitle>Cervejometro</DrawerTitle>
            <DrawerDescription>Calcular a conta da cerveja</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 flex gap-4">
            <div className="w-1/2">
              <Image src="/mockup.png" alt="" width={310} height={300} />
            </div>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ut, earum, molestias modi a tenetur voluptas impedit cum,
              architecto laboriosam hic dolores necessitatibus commodi magni ab
              non blanditiis quas cumque?
            </p>
          </div>
          <DrawerFooter>
            <Button>Voltar</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
