export default function CompanyLogos() {
    const companies = [
        "Microsoft",
        "Google", 
        "Amazon",
        "Slack",
        "Shopify"
    ]

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <p className="text-center text-gray-500 mb-8 text-lg">
                    More than{" "}
                    <span className="inline-flex items-center px-3 py-1 bg-white border-2 border-blue-500 text-black rounded-full font-semibold text-sm animate-pulse">
                        5000 AI developers
                    </span>{" "}
                    chose JamFlow.ai to build better chatbots
                </p>
                <div className="flex items-center justify-center space-x-12 opacity-60">
                    {companies.map((company, index) => (
                        <div key={index} className="text-2xl font-bold text-gray-400">
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
