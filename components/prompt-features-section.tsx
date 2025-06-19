"use client"

import { useState, useEffect } from "react"
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
    title: "Iterate 20x faster.",
    description: "Run multiple models and prompt variations simultaneously.",
  },
  {
    title: "No code required.",
    description: "Add prompts and evaluations, select a model, and go.",
  },
  {
    title: "Prompt with clarity",
    description:
      "Modify Temperature or Top\u2011P and see token counts, latency, and cost.",
  },
]

export default function PromptFeaturesSection() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => api.scrollNext(), 4000)
    return () => clearInterval(id)
  }, [api])

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Improve prompts faster, without code
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No more copy-pasting between browser tabs. With JamFlow, compare multiple prompts and models in one seamless interface.
          </p>
        </div>
        <Carousel setApi={setApi} className="max-w-xl mx-auto">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <Card className="text-center">
                  <CardHeader>
                    <div className="h-40 bg-gray-200 rounded-lg mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
