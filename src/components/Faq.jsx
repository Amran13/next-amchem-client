import React from 'react';
import SectionHeading from './SectionHeading';
import Image from 'next/image';
import faqImage from "../../public/assets/faq-image.jpg"
const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: "How can I order cattle feed from your company?",
            answer:
                "You can place an order directly through our website, by calling our sales team, or by visiting one of our authorized dealers. Bulk orders are also available with special pricing.",
        },
        {
            id: 2,
            question: "Do you provide customized feed formulas for different types of cattle?",
            answer:
                "Yes, we offer feed solutions designed for dairy cows, beef cattle, and calves. We can also customize nutrition plans based on your herd’s specific needs for better milk yield and growth.",
        },
        {
            id: 3,
            question: "Are your feeds scientifically tested and certified?",
            answer:
                "Absolutely. All our cattle feeds are produced following strict quality control and are tested in certified laboratories to ensure balanced nutrition and safety for your animals.",
        },
        {
            id: 4,
            question: "Do you offer delivery services for bulk orders?",
            answer:
                "Yes, we provide doorstep delivery for bulk orders to farms in our service areas. Delivery time depends on your location, and we ensure timely and safe transportation.",
        },
        {
            id: 5,
            question: "What makes your feed better than regular farm feed?",
            answer:
                "Our feeds are scientifically formulated with essential nutrients, minerals, and vitamins to boost milk production, improve animal health, and support sustainable farming.",
        },
    ];


    return (
        <div className="px-4 md:px-10 py-10 lg:max-w-7xl mx-auto">
            <SectionHeading
                heading="FAQ"
                description="Frequently Asked Questions about our BiteBoss"
            />

            <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                {/* FAQ Section */}
                <div className="w-full lg:w-1/2">
                    {faqs.map((question, idx) => (
                        <div
                            key={question.id || idx}
                            className="collapse collapse-plus my-4  rounded-lg border border-[#b3ca41]"
                        >
                            <input
                                type="radio"
                                name="faq-accordion"
                                defaultChecked={idx === 0} // only first open by default
                            />
                            <div className="collapse-title text-base md:text-lg font-semibold">
                                {question.question}
                            </div>
                            <div className="collapse-content text-sm md:text-base">
                                <p>{question.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Animation Section */}
                <div className="w-full lg:w-1/2 flex justify-center max-w-md lg:max-w-full">
                    <Image src={faqImage} width={600} height={800}></Image>
                </div>
            </div>
        </div>
    );
};

export default Faq;