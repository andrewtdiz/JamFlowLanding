import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
    return (
        <section className="py-20 px-4 relative overflow-hidden mt-20">
            <div className="container mx-auto relative z-20 flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3 text-center md:text-left">
                    <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 transition-shadow hover:shadow-lg hover:shadow-blue-200/70 hover:bg-blue-50 hover:text-blue-700">
                        🚀 Gemini 2.5 Pro Now Available!
                    </Badge>

                    <h1 className="text-2xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Make better prompts faster
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl md:mx-0 mx-auto">
                        Compare prompts and models in one place,<br />
                        rapidly iterate with JamFlow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                        <Button
                            size="lg"
                            className="group h-14 text-lg bg-blue-600 hover:bg-blue-700 font-normal rounded-full"
                        >
                            Start Prompting
                            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>

                {/* Hero Dashboard Image */}
                <div className="relative md:w-2/3">
                    <div className="rounded-xl p-4">
                        <div className="text-gray-400 text-sm text-center mb-4"></div>
                        <img
                            src="/widescreen.png"
                            alt="Chatbot Analytics Dashboard"
                            className="w-full h-auto object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
