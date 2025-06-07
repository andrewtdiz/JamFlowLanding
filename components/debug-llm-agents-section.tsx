import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function DebugLLMAgentsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Interface mockup */}
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="space-y-6">
              {/* Input section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">Input</h4>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">82 tokens</Badge>
                </div>
                
                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-2">user</div>
                  <div className="text-sm text-gray-800">
                    What's the weather like in Boston?
                  </div>
                </div>
              </div>

              {/* Output section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">Output</h4>
                  <Badge className="bg-green-100 text-green-700 text-xs">18 tokens</Badge>
                </div>
                
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-2">ai</div>
                  <div className="text-sm text-gray-800 font-mono">
                    function call: get_current_weather
                  </div>
                  <div className="text-sm text-gray-800 mt-2">
                    {"{"}
                    <br />
                    &nbsp;&nbsp;"location": "Boston, MA"
                    <br />
                    {"}"}
                  </div>
                </div>
              </div>
            </div>
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
