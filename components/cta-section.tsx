
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  MessageSquare,
  Users,
  CheckCircle,
  BarChart3,
  Bot,
  Zap,
  Shield,
  Target
} from "lucide-react"
import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <section className="container mx-auto px-4">

      < div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl p-12 text-center text-white mb-16" >
        <h3 className="text-4xl font-bold mb-4">Minutes to magic.</h3>
        <p className="text-xl mb-8 opacity-90">
          Self-host or go cloud and get started in minutes.
        </p>
        <div className="space-y-4">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
            Get Started (it's free)
          </Button>
          <div>
            <button className="text-white underline hover:no-underline">
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center items-center space-x-8 mt-12 opacity-80">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Chat Replays</span>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm">Analytics</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span className="text-sm">Topic Classification</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5" />
            <span className="text-sm">Agent Tracing</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm">Custom Dashboards</span>
          </div>
        </div>
      </div >
    </section>
  )
}