import TestPageTemplate from "@/components/test-page-template";

export const metadata = {
  title: "ACT Preparation | YPrep Academy Bangkok",
  description: "Expert ACT prep in Bangkok. Master English, Math, Reading, and Science with YPrep Academy's personalised programs.",
};

export default function ACTPage() {
  return (
    <TestPageTemplate
      name="ACT"
      fullName="American College Testing"
      badge="College Admissions"
      tagline="The ACT is a popular alternative to the SAT, accepted by all US colleges and many international universities. YPrep's ACT program gives students the strategies and practice to tackle all four sections with confidence."
      about="The ACT is a standardised college admissions test covering English, Math, Reading, and Science. It's accepted by all US colleges and universities, and is often preferred by students who are stronger in science and straightforward math. The test is 2 hours and 55 minutes long (without the optional Writing section), and scores range from 1–36 as a composite average of the four sections."
      sections={[
        { name: "English (45 min)", desc: "75 questions covering grammar, punctuation, sentence structure, and rhetorical skills." },
        { name: "Math (60 min)", desc: "60 questions covering pre-algebra, algebra, geometry, trigonometry, and some statistics." },
        { name: "Reading (35 min)", desc: "40 questions across four passages covering literary narrative, social science, humanities, and natural science." },
        { name: "Science (35 min)", desc: "40 questions interpreting data, graphs, and research summaries — no advanced science knowledge required." },
        { name: "Writing (optional)", desc: "One 40-minute essay evaluating an issue from multiple perspectives, scored separately." },
      ]}
      whoIsItFor={[
        "High school students applying to US universities",
        "Students who prefer a more straightforward, curriculum-aligned exam",
        "Students who are strong in science and enjoy data interpretation",
        "Those applying to schools that accept either SAT or ACT scores",
      ]}
      yprepApproach={[
        "Full diagnostic ACT to benchmark your starting scores across all four sections",
        "Section-by-section strategy sessions targeting your weakest areas",
        "Timed full-length practice tests to build test-day stamina and pacing",
        "Science section demystified — we teach you to decode data without memorising facts",
        "Writing workshop available for students submitting the optional essay",
      ]}
      faqs={[
        { q: "Is the ACT or SAT better for me?", a: "It depends on your strengths. Students who are strong in science often prefer the ACT. We recommend taking a diagnostic of both to see which format suits you better." },
        { q: "How is the ACT scored?", a: "Each of the four sections is scored 1–36, and your composite score is the average of those four scores, also on a 1–36 scale." },
        { q: "How long is the ACT?", a: "The ACT without Writing is 2 hours and 55 minutes. With the optional Writing section, it's 3 hours and 35 minutes." },
        { q: "Does the ACT require science knowledge?", a: "No! The Science section tests your ability to interpret data, graphs, and research summaries — not your knowledge of biology or chemistry." },
        { q: "Can YPrep help me decide between the SAT and ACT?", a: "Absolutely. We offer a free consultation and can administer both a mini SAT and mini ACT to help you decide which exam to focus on." },
      ]}
    />
  );
}
