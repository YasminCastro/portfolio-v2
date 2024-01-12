import * as React from "react";
import Image from "next/image";

import { CiShare1 } from "react-icons/ci";
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
import { IProjects } from "@/config/projects";
import { ProjectCarousel } from "./ProjectCarousel";

interface Props {
  project: IProjects;
}

export function Project({ project }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Image
          src={project.thumbnail}
          alt={`Página inicial do ${project.title}`}
          width={310}
          height={300}
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader>
            <DrawerTitle>
              <a href={project.link} target="_blank" className="flex gap-1">
                {project.title}
                <CiShare1 />
              </a>
            </DrawerTitle>
            <DrawerDescription>{project.summary}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 space-x-20 flex">
            <div className="w-80 h-fit">
              <ProjectCarousel images={project.images} />
              {/* <Image src={project.imagesPath} alt="" width={310} height={300} /> */}
            </div>
            <div className="flex flex-col gap-2">
              <p>{project.description}</p>
              <Button variant="outline" className="w-fit">
                <a
                  href="https://github.com/YasminCastro/cervejometro"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button className="w-full">Voltar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
