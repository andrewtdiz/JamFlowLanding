import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description:
        "Great for improving a prompt or trying JamFlow for the first time!",
      features: [
        "Daily Tests: 20",
        "LLM Credits: 5,000",
        "Compare up to 4 prompt sets at a time",
        "Access to non-thinking models",
        "View usage data"
      ],
      popular: false
    },
    {
      name: "Basic",
      price: "$9.95",
      period: "/month",
      description:
        "Best for building prompts for agentic products and workflows",
      features: [
        "Daily Tests: 1,000",
        "LLM Credits: Unlimited*",
        "Compare up to 4 prompt sets at a time",
        "Access to thinking models",
        "View usage data"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$29.95",
      period: "/month",
      description:
        "Perfect for high-frequency users and for building complex production-grade AI apps",
      features: [
        "Daily Tests: Unlimited",
        "LLM Credits: Unlimited*",
        "Compare up to 4 prompt sets at a time",
        "Access to thinking models",
        "View usage data"
      ],
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-6">* with existing LLM subscription and API key</p>
      </div>
    </section>
  )
}
