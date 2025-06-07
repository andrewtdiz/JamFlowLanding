import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, GitBranch, TestTube, ArrowRight } from "lucide-react"

export default function IteratePromptsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="/hero-dashboard.jpg"
              alt="Iterate on Prompts Dashboard"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Iterate on prompts</h2>
            <p className="text-xl text-gray-600">
              Create templates and collaborate on prompts with non-technical teammates.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-gray-700">Clean your source-code</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <GitBranch className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-gray-700">Versioning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TestTube className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-gray-700">A/B testing</span>
              </div>
            </div>

            <div className="pt-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
