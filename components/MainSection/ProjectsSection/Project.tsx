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
          width={384}
          height={293}
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader>
            <DrawerTitle>
              {project.link && (
                <a href={project.link} target="_blank" className="flex gap-1">
                  {project.title}
                  <CiShare1 />
                </a>
              )}
              {!project.link && <p> {project.title}</p>}
            </DrawerTitle>
            <DrawerDescription>{project.summary}</DrawerDescription>
          </DrawerHeader>
          <div className="flex  space-x-20 p-4 pb-0 max-md:space-x-0">
            <div className="h-fit w-80 max-md:hidden">
              <ProjectCarousel images={project.images} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-justify max-md:text-sm">
                {project.description}
              </p>
              <Button variant="outline" className="w-fit">
                <a href={project.repository} target="_blank">
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
