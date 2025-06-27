import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img
              src="/logo192.png"
              alt="JamFlow.ai"
              className="w-8 h-8 rounded-lg"
            />
          </div>
          <span className="font-bold text-xl">JamFlow</span>
        </a>
        <div className="hidden md:flex items-center space-x-10">
          <a
            href="#features"
            className="text-gray-800 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-800 hover:text-gray-900 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-gray-800 hover:text-gray-900 transition-colors"
          >
            FAQs
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://app.jamflow.ai" rel="noopener noreferrer">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="https://app.jamflow.ai" rel="noopener noreferrer">
            <Button className="h-10 text-sm bg-blue-600 hover:bg-blue-700 font-normal shadow-md rounded-lg">
              Get Started
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
