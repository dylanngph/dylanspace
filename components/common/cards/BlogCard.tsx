"use client";

import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { BlogCardProps } from "@/lib/types/interfaces";

const BlogCard = ({ title, date, shortDescription, image }: BlogCardProps) => {
  return (
    <Card className="bg-transparent border-0" shadow="none">
      <CardBody className="p-0">
        <Image
          alt="sampleImage"
          className="object-cover w-full h-[200px]"
          height={200}
          src={image}
          width={200}
        />
        <div className="flex flex-col gap-2 items-start py-4">
          <p className="text-muted-foreground text-xs">
            Publish on {new Date(date).toLocaleDateString("en-US")}
          </p>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-foreground/60 font-light">{shortDescription}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
