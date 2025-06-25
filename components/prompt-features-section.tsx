"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "Iterate 10x faster.",
    description: "Run multiple models and prompt variations simultaneously.",
    image: "/images/iterate-faster.png",
    width: 576,
    height: 416,
  },
  {
    title: "No code required.",
    description: "Add prompts and evaluations, select a model, and go.",
    image: "providers.png",
    width: 874,
    height: 852,
  },
  {
    title: "Prompt with clarity",
    description:
      "Modify Temperature or Top\u2011P and see token counts, latency, and cost.",
    image: "prompt-clarity.png",
    width: 1760,
    height: 880,
  },
]

export default function PromptFeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<number>(0)

  useEffect(() => {
    const id = setInterval(() => setSelectedFeature((selectedFeature + 1) % features.length), 5000)
    return () => clearInterval(id)
  }, [selectedFeature])

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Improve prompts without code
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No more copy-pasting between browser tabs. With JamFlow, compare multiple prompts and models in one seamless interface.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-80">
            <div className="flex flex-col items-end gap-2">
              {features.map((feature, index) => (
                <Card key={index} onClick={() => setSelectedFeature(index)} className={`relative overflow-hidden text-center w-full pl-3 mr-8 mb-4 border-none shadow-none  ${index === selectedFeature ? '' : 'hover:border-blue-200'}`} style={{ boxShadow: index === selectedFeature ? 'rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 0px' : '' }}>
                  {index === selectedFeature && <div className="absolute w-[0.375rem] h-full left-0 top-0 bg-blue-400"></div>}
                  <CardHeader className="p-3 pt-4 pb-1">
                    <CardTitle className="text-xl font-semibold text-left">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <CardDescription className="text-gray-900 text-left py-1">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="w-[36rem] h-[26rem] rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={features[selectedFeature].image}
              alt={features[selectedFeature].title}
              width={features[selectedFeature].width}
              height={features[selectedFeature].height}
              className="max-w-full max-h-full object-contain shadow-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
