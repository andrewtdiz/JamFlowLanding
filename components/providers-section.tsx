import Image from "next/image"

export default function ProvidersSection() {
    const providers = [
        {
            name: "OpenAI",
            logo: "/svg/openai.svg",
            width: 120,
            height: 40
        },
        {
            name: "Anthropic",
            logo: "/svg/anthropic.svg",
            width: 120,
            height: 40
        },
        {
            name: "Google Cloud",
            logo: "/svg/googlecloud.svg",
            width: 120,
            height: 40
        },
        {
            name: "Cerebras",
            logo: "/svg/cerebras.svg",
            width: 120,
            height: 40
        }
    ]

    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Instantly test prompts{" "}
                    <br className="hidden md:block" />
                    across major LLMs
                </h2>

                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                    JamFlow works instantly - without a subscription or code.
                    <br /> No technical setup, just immediate results.
                </p>

                <div className="flex gap-4 items-center justify-center">
                    {providers.map((provider) => (
                        <div
                            key={provider.name}
                            className="flex items-center justify-center p-2 rounded-lg"
                        >
                            <Image
                                src={provider.logo}
                                alt={`${provider.name} logo`}
                                width={provider.width}
                                height={provider.height}
                                className="object-contain p-6 transition-opacity duration-200"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 