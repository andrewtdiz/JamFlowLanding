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
                JamFlow is a web-based prompt experimentation platform designed to speed up model selection and prompt improvement. <br /><br /> It provides fast, visual comparisons of how different prompts and model settings perform without the need to write code or build infrastructure.
            </>
        ),
    },
    {
        question: "What does the free plan include?",
        answer: (
            <>
                The free plan includes up to 10,000 non-thinking model tokens in + out per day.
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
                Yes! Connecting your existing API keys will give you access to the Unlimited usage tier and premium models.
            </>
        ),
    },
    {
        question: "When will you add support for my preferred model/provider?",
        answer: (
            <>
                If you don't see a preferred model/provider, feel free to contact us and we can add support for it.
                <br />
                <br />
                You can contact us on 
                <a className="text-blue-600 hover:underline ml-1" href="https://discord.com/invite/jamflow" target="_blank" rel="noopener noreferrer">Discord</a> or 
                <a className="text-blue-600 hover:underline ml-1" href="https://x.com/jamflow" target="_blank" rel="noopener noreferrer">Twitter</a>.
            </>
        ),
    },
    {
        question: "I have another question",
        answer: (
            <>
                Feel free to contact us on 
                <a className="text-blue-600 hover:underline ml-1" href="https://discord.com/invite/jamflow" target="_blank" rel="noopener noreferrer">Discord</a> or 
                <a className="text-blue-600 hover:underline ml-1" href="https://x.com/jamflow" target="_blank" rel="noopener noreferrer">Twitter</a>.
            </>
        ),
    },
];


const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div className="flex items-center justify-center px-6 py-24">
            <div className="max-w-2xl flex flex-col items-center w-full">
                <h2 className="text-4xl md:text-5xl text-center !leading-[1.15] font-bold tracking-tight mb-10">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" className="max-auto w-full max-w-xl" value={`${activeIndex}`} onValueChange={(value) => setActiveIndex(Number(value))}>
                    {faq.map(({ question, answer }, index) => (
                        <AccordionItem key={question} value={`${index}`}>
                            <AccordionTrigger className={`text-left text-lg py-6 font-semibold`}>
                                {question}
                            </AccordionTrigger>
                            <AccordionContent className="pl-[0.125rem]">{answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FAQSection;
