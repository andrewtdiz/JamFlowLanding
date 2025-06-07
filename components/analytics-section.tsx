import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react"

export default function AnalyticsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Interface mockup */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h3>
                <p className="text-gray-600">
                  Track and analyze the performance and costs of your GenAI projects, and how users interact with your app.
                </p>
              </div>

              {/* Metrics cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-gray-900">10M</div>
                  <div className="text-sm text-gray-500">Requests</div>
                </div>
                <div className="bg-white rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-gray-900">$179.52</div>
                  <div className="text-sm text-gray-500">Cost</div>
                </div>
                <div className="bg-white rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-gray-900">997</div>
                  <div className="text-sm text-gray-500">Users</div>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Model usages & costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Analyze frequent topics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">User satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Custom dashboards</span>
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="bg-white rounded-lg p-4 border h-32 flex items-center justify-center">
                <img 
                  src="/hero-dashboard.jpg" 
                  alt="Analytics Chart" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Analytics</h2>
            <p className="text-xl text-gray-600">
              Track and analyze the performance and costs of your GenAI projects, and how users interact with your app.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-gray-700">Model usages & costs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-gray-700">Analyze frequent topics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-gray-700">User satisfaction</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-gray-700">Custom dashboards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
