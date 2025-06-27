import { MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo192.png"
                  alt="JamFlow.ai"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg"
                />
              </div>
              <span className="font-bold text-xl">JamFlow</span>
            </div>
            <p className="text-gray-600 text-sm">
              Supercharge your prompt development.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#features"
                  className="hover:text-gray-900 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-gray-900 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-gray-900 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 JamFlow.ai. All rights reserved.
          </p>
          <div className="flex space-x-12 mt-4 md:mt-0">
            <a
              href="https://x.com/jamflow"
              className=""
            >
              <Image
                src="/svg/x.svg"
                alt="X (Twitter)"
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 opacity-40 hover:brightness-100 hover:opacity-80 transition-all duration-0"
              />
            </a>
            <a
              href="https://discord.gg/pf4qDSGAhX"
              className=""
            >
              <Image
                src="/svg/discord.svg"
                alt="Discord"
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 opacity-40 hover:brightness-100 hover:opacity-80 transition-all duration-0"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
