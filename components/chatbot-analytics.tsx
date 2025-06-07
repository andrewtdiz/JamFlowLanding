import { Badge } from "@/components/ui/badge"
import { Clock, FileText, ThumbsDown, User, MessageCircle } from "lucide-react"

export default function ChatbotAnalytics() {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex border border-gray-200">
      {/* Chat Interface */}
      <div className="flex-1 bg-white">
        <div className="p-8 space-y-6">
          {/* Chat Messages */}
          <div className="space-y-6">
            {/* User Message 1 */}
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-sm">
                <p className="text-sm text-gray-900">Hi there</p>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Bot Response 1 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm">🤖</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-lg">
                <p className="text-sm text-gray-900">Hello! How can I assist you with company information today?</p>
              </div>
            </div>

            {/* User Message 2 */}
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-sm">
                <p className="text-sm text-gray-900">What's our current policy on remote work?</p>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Bot Response 2 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm">🤖</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-lg">
                <p className="text-sm text-gray-900">
                  According to our latest HR policy, employees can work remotely up to 3 days per week. Core hours are 10 AM - 4 PM in your local time zone. Read more here.
                </p>
                <div className="mt-2 text-xs text-gray-400 italic">
                  User opened document: 'HR Policy.pdf'
                </div>
              </div>
            </div>

            {/* User Message 3 */}
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-sm">
                <p className="text-sm text-gray-900">What was our Q4 revenue target?</p>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Bot Response 3 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm">🤖</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-lg">
                <p className="text-sm text-gray-900">
                  I apologize, but I don't have access to confidential financial information.
                </p>
                <div className="mt-3 space-y-1">
                  <div className="text-xs text-gray-400 italic">User left feedback: Not helpful 👎</div>
                  <div className="text-xs text-gray-400 italic">User left the conversation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Panel */}
      <div className="w-80 bg-white border-l border-gray-200">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-50">
              📊 Chatbot Analytics
            </Badge>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
              Understand the gap between your chatbot and your users.
            </h1>
            <p className="text-gray-500 text-sm">
              See how your LLMs performs in real-time and how users interact with it.
            </p>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-orange-100">
              <img 
                src="/dexxter.png" 
                alt="User avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">User Info</p>
              <p className="text-sm font-medium text-gray-900">dexxterdax@terradream.games</p>
            </div>
          </div>

          {/* Topic Detected */}
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">
                Topic Detected ✨
              </p>
              <p className="text-sm font-medium text-gray-900">HR Policy</p>
            </div>
          </div>

          {/* Context Documents */}
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Context Documents</p>
              <p className="text-sm font-medium text-gray-900">HR Policy.pdf</p>
            </div>
          </div>

          {/* User Feedback */}
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <ThumbsDown className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">User Feedback</p>
              <p className="text-sm font-medium text-gray-900">Negative</p>
            </div>
          </div>

          {/* Conversation Length */}
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Conversation Length</p>
              <p className="text-sm font-medium text-gray-900">3m 32s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
