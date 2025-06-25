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
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Works with all platforms,{" "}
                    <br className="hidden md:block" />
                    no integration headaches
                </h2>

                <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
                    JamFlow supports every major model provider directly, with no
                    complex integrations or API wrappers needed
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
                    {providers.map((provider) => (
                        <div
                            key={provider.name}
                            className="flex items-center justify-center p-4 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
                        >
                            <Image
                                src={provider.logo}
                                alt={`${provider.name} logo`}
                                width={provider.width}
                                height={provider.height}
                                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 