"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faq = [
    {
        question: "What is JamFlow and how does it work?",
        answer: (
            <>
                JamFlow speeds up model selection and prompt improvement. It provides fast, visual comparisons of how different prompts and model settings perform without writing a line of code.
            </>
        ),
    },
    {
        question: "What does the free plan include?",
        answer: (
            <>
                The free plan includes up to 100 outputs per day.
            </>
        ),
    },
    {
        question: "Which Large Language Models can I use with JamFlow?",
        answer: (
            <>
                JamFlow currently supports OpenAI, Anthropic, Google, and Cerebras-based LLMs.
            </>
        ),
    },
    {
        question: "Can I use my own API keys?",
        answer: (
            <>
                Yes! JamFlow’s paid plans allow you to connect your own API keys to get access to Unlimited usage tiers and premium models.
            </>
        ),
    },
    {
        question: "When will you add support for my preferred model/provider?",
        answer: (
            <>
                If you don't see your preferred model/provider, feel free to contact us and we can add support for it.
                You can contact us on
                <a className="text-blue-600 hover:underline ml-1" href="https://discord.gg/pf4qDSGAhX" target="_blank" rel="noopener noreferrer">Discord</a> or
                <a className="text-blue-600 hover:underline ml-1" href="https://x.com/jamflow" target="_blank" rel="noopener noreferrer">X (Twitter)</a>.
            </>
        ),
    },
    {
        question: "I have another question",
        answer: (
            <>
                Let us know on
                <a className="text-blue-600 hover:underline ml-1" href="https://discord.gg/pf4qDSGAhX" target="_blank" rel="noopener noreferrer">Discord</a> or
                <a className="text-blue-600 hover:underline ml-1" href="https://x.com/jamflow" target="_blank" rel="noopener noreferrer">X (Twitter)</a>.
            </>
        ),
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-xl"></div>
            <div className="absolute top-1/4 right-16 w-24 h-24 bg-purple-100 rounded-full opacity-50 blur-lg"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-100 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-blue-100 rounded-full opacity-40 blur-xl"></div>

            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-2 h-2 bg-blue-300 rounded-full"></div>
                <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
                <div className="absolute bottom-40 left-32 w-2 h-2 bg-indigo-300 rounded-full"></div>
                <div className="absolute top-60 left-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-60 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl flex flex-col items-center w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl !leading-[1.15] font-bold tracking-tight text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Still have questions about JamFlow? We've got answers.
                    </p>
                </div>

                <div className="w-full max-w-3xl">
                    <Accordion type="single" collapsible className="w-full space-y-4" value={activeIndex >= 0 ? `${activeIndex}` : ""} onValueChange={(value) => setActiveIndex(value ? Number(value) : -1)}>
                        {faq.map(({ question, answer }, index) => (
                            <AccordionItem
                                key={question}
                                value={`${index}`}
                                className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <AccordionTrigger className={`text-left text-md md:text-lg px-8 py-6 font-semibold transition-colors duration-200 hover:no-underline ${activeIndex === index ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}>
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                                    {answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </div>
        </div>
    );
};

export default FAQSection;
