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
  Target,
  GitBranch,
  TestTube,
  Code,
  TrendingUp
} from "lucide-react"
import { Button } from "./ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="container mx-auto px-4">

      < div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl p-12 text-center text-white mb-16" >
        <h3 className="text-4xl font-bold mb-4">Start prompting in seconds.</h3>
        <p className="text-xl mb-8 opacity-90">
          No setup, no code required. Compare prompts and models instantly.
        </p>
        <div className="space-y-4">
          <Link href="https://app.jamflow.ai">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Try JamFlow Free
            </Button>
          </Link>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center items-center space-x-8 mt-12 opacity-80">
          <div className="flex items-center space-x-2">
            <GitBranch className="w-5 h-5" />
            <span className="text-sm">Compare Prompts</span>
          </div>
          <div className="flex items-center space-x-2">
            <TestTube className="w-5 h-5" />
            <span className="text-sm">A/B Testing</span>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm">Performance Analytics</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5" />
            <span className="text-sm">Parallel Testing</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm">Instant Results</span>
          </div>
        </div>
      </div >
    </section>
  )
}