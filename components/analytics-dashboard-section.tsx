import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react"

export default function AnalyticsDashboardSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Analytics</h2>
            <p className="text-xl text-gray-600">
              Track and analyze the performance and costs of your GenAI projects, and how users interact with your app.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-red-600" />
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
                  <Target className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-gray-700">Custom dashboards</span>
              </div>
            </div>
          </div>

          {/* Right side - Analytics mockup */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              {/* Top metrics */}
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-xs text-gray-500 uppercase">TOKENS</div>
                  <div className="text-lg font-bold text-gray-900">10M</div>
                  <div className="text-xs text-gray-500">June</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 uppercase">COST</div>
                  <div className="text-lg font-bold text-gray-900">$179.52</div>
                  <div className="text-xs text-gray-500">USD</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 uppercase">QUERIES</div>
                  <div className="text-lg font-bold text-gray-900">997</div>
                  <div className="text-xs text-gray-500">Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 uppercase">USERS</div>
                  <div className="text-lg font-bold text-gray-900">3</div>
                  <div className="text-xs text-gray-500">—</div>
                </div>
              </div>

              {/* Model usage breakdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>gpt-4</span>
                  </div>
                  <span className="text-gray-500">6.5M</span>
                  <span className="text-gray-900 font-medium">$173.66</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>gpt-3.5-turbo</span>
                  </div>
                  <span className="text-gray-500">3.5M</span>
                  <span className="text-gray-900 font-medium">$5.85</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>gpt-4</span>
                  </div>
                  <span className="text-gray-500">3.6M</span>
                  <span className="text-gray-900 font-medium">$0.00</span>
                </div>
              </div>

              {/* Chart area placeholder */}
              <div className="h-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <img
                  src="/hero-dashboard.jpg"
                  alt="Analytics Chart"
                  className="w-full h-full object-cover rounded-lg opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
