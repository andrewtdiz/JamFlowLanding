import Navigation from "./navigation"
import HeroSection from "./hero-section"
import CompanyLogos from "./company-logos"
import ChatbotAnalytics from "./chatbot-analytics"
import DebugLLMAgentsSection from "./debug-llm-agents-section"
import AnalyticsDashboardSection from "./analytics-dashboard-section"
import IteratePromptsSection from "./iterate-prompts-section"
import FeaturesSection from "./features-section"
import PricingSection from "./pricing-section"
import Footer from "./footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CompanyLogos />
      
      {/* Analytics Showcase Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <ChatbotAnalytics />
        </div>
      </section>
      
      <DebugLLMAgentsSection />
      <AnalyticsDashboardSection />
      <IteratePromptsSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  )
}
