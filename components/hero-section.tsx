import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Grid Overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(128,128,128,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128,128,128,0.2) 1px, transparent 1px)
        `,
                    backgroundSize: '120px 120px', // Increased grid size
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                }}
            />


            <div className="container mx-auto text-center relative z-20">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 transition-shadow hover:shadow-lg hover:shadow-blue-200/70 hover:bg-blue-50 hover:text-blue-700">
                    🚀 New: Advanced AI Models Available
                </Badge>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Take your AI chatbot
                    <br />
                    to the next level
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Build, deploy, and scale intelligent chatbots with JamFlow.ai's advanced AI platform. Integrate seamlessly with your
                    existing workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Start Building Free
                    </Button>
                    <Button size="lg" variant="outline">
                        View Demo
                    </Button>
                </div>

                {/* Hero Dashboard Image */}
                <div className="relative max-w-6xl mx-auto">
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
