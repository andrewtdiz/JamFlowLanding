import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FeaturesSection() {
  const useCases = [
    {
      title: "Internal Knowledge",
      description: "Help your team access company knowledge and automate workflows faster. Monitor usage and improve from real feedback.",
      chatExample: {
        question: "What's remote work policy?",
        answer: "According to our latest HR policy, employees can work remotely up to 3 days per week. Core hours are 10 AM - 4 PM in your local time zone.",
        document: "Remote Work Policy.pdf",
        buttonText: "Can you help me set up my..."
      },
      bgColor: "bg-blue-50",
      buttonColor: "bg-blue-600 text-white"
    },
    {
      title: "Customer Support",
      description: "Build customer-facing chatbots that understand your docs and provide accurate responses. Track satisfaction and improve continuously.",
      chatExample: {
        question: "How do I upgrade my subscription?",
        answer: "I'll help you upgrade your subscription. You can upgrade from your account settings. Would you like me to guide you through the process?",
        document: "Querying data...",
        buttonText: "Yes please"
      },
      bgColor: "bg-green-50",
      buttonColor: "bg-green-600 text-white"
    },
    {
      title: "Agents",
      description: "Deploy autonomous agents that execute complex tasks. Monitor performance in real-time and catch errors early.",
      chatExample: {
        question: "Create a sales report for Q4",
        answer: "I'll analyze the Q4 data and create a report. This will include sales metrics, user growth, and key achievements.",
        document: "Creating charts...",
        buttonText: "Include month-over-month"
      },
      bgColor: "bg-purple-50",
      buttonColor: "bg-purple-600 text-white"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Deliver reliable AI experiences.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for every LLM use-case. Whether you're building internal tools or customer-facing applications.
          </p>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <Card key={index} className={`${useCase.bgColor} border-0 shadow-lg hover:shadow-xl transition-shadow`}>
              <CardHeader className="pb-4">
                {/* Chat Interface Mockup */}
                <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white px-3 py-2 rounded-lg text-xs max-w-xs">
                        {useCase.chatExample.question}
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-100 px-3 py-2 rounded-lg text-xs max-w-xs">
                        {useCase.chatExample.answer}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 italic">
                      📄 {useCase.chatExample.document}
                    </div>
                    <Button size="sm" className={`${useCase.buttonColor} text-xs h-8`}>
                      {useCase.chatExample.buttonText}
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
