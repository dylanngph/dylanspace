"use client";

import { BlogCardProps } from "@/lib/types/interfaces";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FeaturedBlogCard = ({
  title,
  date,
  shortDescription,
  image,
}: BlogCardProps) => {
  return (
    <Card className="bg-transparent" shadow="none">
      <CardBody className="p-0">
        <div className="grid grid-cols-9 gap-12 items-center justify-center">
          <div className="relative col-span-4">
            <Image
              alt="DylanAvatar"
              className="object-cover w-full h-full rounded-xl"
              width={400}
              height={400}
              src="/dylan-avatar.png"
            />
          </div>

          <div className="flex flex-col col-span-5">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <p className="text-muted-foreground text-sm">
                  Publish on {date}
                </p>
                <h3 className="font-bold text-3xl">{title}</h3>
                <p className="text-foreground/60">{shortDescription}</p>
                <div className="flex items-center">
                  <Button variant="link">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeaturedBlogCard;
