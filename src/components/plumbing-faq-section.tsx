import { FaqPanel } from "@/components/ui/faq-panel";

const questions = [
  {
    question: "How do I schedule a service?",
    answer: "Use our contact form or call us directly to book a visit that fits your schedule.",
  },
  {
    question: "What are your service areas?",
    answer: "We serve Leicester and the surrounding areas for plumbing and heating work.",
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes. We handle urgent plumbing issues and aim to respond as quickly as possible.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept common payment methods including card, bank transfer, and cash.",
  },
  {
    question: "Are your plumbers licensed?",
    answer: "Yes. Our plumbers are trained, experienced, and qualified to carry out the work safely.",
  },
];

export function PlumbingFaqSection() {
  return (
    <section className="site-container pb-6">
      <FaqPanel
        image="/solution-plumber.jpg"
        alt="Plumber fitting pipework below a sink"
        title="FAQs"
        description="Find answers to commonly asked questions about our services and processes."
        items={questions}
        cta={
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[30px] bg-[#1d3eb0] px-6 py-3 text-lg leading-[1.5] font-semibold whitespace-nowrap text-white"
          >
            Contact us
          </a>
        }
      />
    </section>
  );
}
