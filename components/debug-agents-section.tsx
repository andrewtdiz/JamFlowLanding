import { Badge } from "@/components/ui/badge"
import { CheckCircle, Search, Tag } from "lucide-react"

export default function DebugAgentsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Debug LLM agents</h2>
            <p className="text-xl text-gray-600">
              Log all your prompts and results, see how agents are performing in production.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Traces & error stack traces</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Instant search & filters</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Label data for fine-tuning</span>
              </div>
            </div>
          </div>

          {/* Right side - Interface mockup */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-4">
              {/* Input section */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Input</span>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">82 tokens</Badge>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-xs text-blue-600 font-medium mb-1">USER</div>
                  <div className="text-sm text-gray-900">What's the weather like in Boston?</div>
                </div>
              </div>

              {/* Output section */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Output</span>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">18 tokens</Badge>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-xs text-green-600 font-medium mb-1">AI</div>
                  <div className="text-sm text-gray-900 mb-2">function call: get_current_weather</div>
                  <div className="bg-white rounded p-2 text-xs font-mono">
                    {"{"}<br />
                    &nbsp;&nbsp;"location": "Boston, MA"<br />
                    {"}"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
