import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="container mx-auto relative z-20 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 transition-shadow hover:shadow-lg hover:shadow-blue-200/70 hover:bg-blue-50 hover:text-blue-700">
                        🚀 New: Gemini 2.5 Pro Model Available
                    </Badge>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Headline: Refine prompts <br /> and models in minutes
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl md:mx-0 mx-auto">
                        Build, deploy, and scale intelligent chatbots with JamFlow.ai's advanced AI platform. Integrate seamlessly with your
                        existing workflow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                        <Button size="lg" className="h-14 text-xl bg-blue-600 hover:bg-blue-700 font-normal rounded-full">
                            Start Prompting
                        </Button>
                    </div>
                </div>

                {/* Hero Dashboard Image */}
                <div className="relative md:w-1/2">
                    <div className="rounded-2xl p-4">
                        <div className="text-gray-400 text-sm text-center mb-4"></div>
                        <img
                            src="/hero-dashboard.jpg"
                            alt="Chatbot Analytics Dashboard"
                            className="w-full h-auto object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
