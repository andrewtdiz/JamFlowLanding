import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "For simple prompt improvements or trying JamFlow for the first time!",
      credits: {
        dailyTests: "20",
        llmCredits: "5,000"
      },
      features: [
        "Compare multiple prompt sets",
        "View LLM usage data",
        "Shareable links",
      ],
      popular: false,
      buttonText: "Try for Free"
    },
    {
      name: "Premium",
      price: "$9.95",
      period: "/month",
      description: "For teams looking to supercharge their prompt development",
      credits: {
        dailyTests: "1,000",
        llmCredits: "Unlimited*"
      },
      features: [
        "Compare multiple prompt sets",
        "View LLM usage data",
        "Shareable links",
        "Access to thinking models",
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      price: "$29.95",
      period: "/month",
      description: "For high-frequency users and for building complex production-grade AI apps",
      credits: {
        dailyTests: "Unlimited",
        llmCredits: "Unlimited*"
      },
      features: [
        "Compare multiple prompt sets",
        "View LLM usage data",
        "Shareable links",
        "Access to thinking models",
      ],
      popular: false,
      buttonText: "Get Started"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Pricing</h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-white border-2 ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'} rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-left p-0 mb-8">
                <CardTitle className="text-3xl font-medium mb-4">{plan.name}</CardTitle>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-lg text-gray-500 ml-1">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="p-0 flex-grow flex flex-col">
                {/* Credits Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Credits</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Daily Tests</span>
                      <span className="font-semibold text-right">{plan.credits.dailyTests}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">LLM Credits</span>
                      <span className="font-semibold text-right">{plan.credits.llmCredits}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-600 text-lg leading-relaxed">{plan.description}</p>
                </div>

                {/* Features Section */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Features</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full h-20 text-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors mt-auto"
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-24! h-24!" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center mt-8">
          * with existing LLM subscription and API key
        </p>
      </div>
    </section>
  )
}
