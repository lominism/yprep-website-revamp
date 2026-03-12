import TestPageTemplate from "@/components/test-page-template";

export const metadata = {
  title: "SAT Preparation | YPrep Academy Bangkok",
  description: "Expert SAT prep in Bangkok. Master Reading, Writing & Language, and Math with YPrep Academy's personalised programs.",
};

export default function SATPage() {
  return (
    <TestPageTemplate
      name="SAT"
      fullName="Scholastic Assessment Test"
      badge="College Admissions"
      tagline="The SAT is one of the most widely accepted college admissions tests in the US and globally. YPrep's SAT program is built around the digital SAT format and gives students the strategies, practice, and confidence to hit their target score."
      about="The SAT is a standardised test administered by College Board, widely used for college admissions in the United States and accepted by universities worldwide. The digital SAT consists of two main sections — Reading & Writing and Math — and takes approximately 2 hours and 14 minutes to complete. Scores range from 400 to 1600. The exam is adaptive: the difficulty of the second module in each section adjusts based on your performance in the first."
      sections={[
        { name: "Reading & Writing", desc: "Two modules covering reading comprehension, grammar, vocabulary in context, and rhetorical analysis." },
        { name: "Math", desc: "Two modules covering algebra, advanced math, problem-solving, data analysis, and geometry/trigonometry." },
        { name: "Adaptive Format", desc: "The digital SAT adjusts difficulty between modules, meaning strong performance early leads to harder (higher-value) questions." },
      ]}
      whoIsItFor={[
        "High school students applying to US universities",
        "International students seeking college admissions in the US or Singapore",
        "Students aiming for merit scholarships that require SAT scores",
        "Anyone looking to strengthen core math and English reading skills",
      ]}
      yprepApproach={[
        "Diagnostic test to establish your baseline and identify weaknesses",
        "Targeted instruction on the specific skills that will move your score most",
        "Full-length digital practice tests under timed conditions",
        "Detailed score reports and session reviews after every mock exam",
        "Flexible scheduling around your school calendar",
      ]}
      faqs={[
        { q: "How long is the SAT?", a: "The digital SAT takes approximately 2 hours and 14 minutes, including a 10-minute break." },
        { q: "How is it scored?", a: "Scores range from 400–1600, with two section scores (Reading & Writing, and Math) each ranging from 200–800." },
        { q: "How many times can I take the SAT?", a: "There's no official limit, but most students take it 2–3 times to achieve their target score. College Board allows score choice, so you can decide which scores to send." },
        { q: "How long should I study for the SAT?", a: "Most students benefit from 3–6 months of structured preparation. We'll help you build a timeline based on your test date and target score." },
        { q: "Does YPrep offer both group and individual SAT prep?", a: "Yes! We offer small group classes as well as 1-on-1 tutoring sessions. Contact us to discuss which format suits you best." },
      ]}
    />
  );
}
