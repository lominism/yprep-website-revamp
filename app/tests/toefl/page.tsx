import TestPageTemplate from "@/components/test-page-template";

export const metadata = {
  title: "TOEFL Preparation | YPrep Academy Bangkok",
  description: "Expert TOEFL prep in Bangkok. Build your Reading, Listening, Speaking, and Writing skills with YPrep Academy.",
};

export default function TOEFLPage() {
  return (
    <TestPageTemplate
      name="TOEFL"
      fullName="Test of English as a Foreign Language"
      badge="English Proficiency"
      tagline="TOEFL is the world's most widely accepted English proficiency test for university admissions. YPrep's TOEFL program equips you with the academic English skills to score well across all four sections."
      about="The TOEFL iBT (Internet-Based Test) is administered by ETS and is accepted by more than 11,000 universities in over 150 countries. It measures academic English proficiency across four skills: Reading, Listening, Speaking, and Writing. The test takes approximately 2 hours and scores range from 0–120 (30 per section). Many universities require a minimum TOEFL score for admission; top programs often require 100+."
      sections={[
        { name: "Reading (35 min)", desc: "2–3 passages from academic texts. Questions test comprehension, inference, and vocabulary." },
        { name: "Listening (36 min)", desc: "Lectures and conversations. Tests ability to understand academic spoken English in a university context." },
        { name: "Speaking (16 min)", desc: "4 tasks including integrated tasks combining reading, listening, and speaking. Scored by human raters." },
        { name: "Writing (29 min)", desc: "2 tasks: Integrated Writing (read/listen/write) and Academic Discussion Writing (respond to a professor's post)." },
      ]}
      whoIsItFor={[
        "Students applying to universities in the US, Canada, Australia, or the UK",
        "Applicants to programs requiring proof of English proficiency",
        "Students who prefer TOEFL over IELTS for their target schools",
        "Those who need to achieve a specific score for visa or admissions requirements",
      ]}
      yprepApproach={[
        "Full TOEFL diagnostic to identify your weakest sections",
        "Academic reading and listening strategies tailored to TOEFL question types",
        "Speaking coaching with audio feedback and scoring on each task type",
        "Writing workshops covering essay structure, argumentation, and note-taking from listening",
        "Full-length timed mock tests to build stamina and test-day confidence",
      ]}
      faqs={[
        { q: "How long is the TOEFL iBT?", a: "The TOEFL iBT takes approximately 2 hours to complete." },
        { q: "How is the TOEFL scored?", a: "Each section (Reading, Listening, Speaking, Writing) is scored 0–30, giving a total score of 0–120." },
        { q: "What TOEFL score do most universities require?", a: "Requirements vary, but many universities require 80–100. Top research universities often require 100+. Check the specific requirements for your target schools." },
        { q: "How is the TOEFL different from IELTS?", a: "TOEFL is fully computer-delivered and uses an academic university context throughout. IELTS includes a face-to-face speaking interview and is offered in General and Academic versions." },
        { q: "How long does it take to prepare for the TOEFL?", a: "Preparation time varies by your current level. Students who are well-prepared may need 4–8 weeks; others benefit from 2–3 months of structured work." },
      ]}
    />
  );
}
