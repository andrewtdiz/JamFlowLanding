import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src="/logo192.png" alt="JamFlow.ai" className="w-8 h-8 rounded-lg" />
          </div>
          <span className="font-bold text-xl">JamFlow.ai</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Docs
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Support
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  )
}
