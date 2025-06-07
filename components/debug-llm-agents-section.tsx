import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function DebugLLMAgentsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Dashboard image */}
          <div className="bg-white rounded-xl shadow-lg p-0 border overflow-hidden">
            <img
              src="/hero-dashboard.jpg"
              alt="LLM Debug Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Debug LLM agents</h2>
            <p className="text-xl text-gray-600">
              Log all your prompts and results, see how agents are performing in production.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Traces & error stack traces</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Instant search & filters</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Label data for fine-tuning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
