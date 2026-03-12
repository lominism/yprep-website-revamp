import TestPageTemplate from "@/components/test-page-template";

export const metadata = {
  title: "IELTS Preparation | YPrep Academy Bangkok",
  description: "Expert IELTS prep in Bangkok. Improve your Listening, Reading, Writing and Speaking band scores with YPrep Academy.",
};

export default function IELTSPage() {
  return (
    <TestPageTemplate
      name="IELTS"
      fullName="International English Language Testing System"
      badge="English Proficiency"
      tagline="IELTS is the world's most popular English proficiency test, accepted by universities, employers, and immigration authorities in over 140 countries. YPrep's IELTS program helps you hit your target band score with structured, personalised coaching."
      about="IELTS is jointly managed by the British Council, IDP, and Cambridge Assessment English. It is offered in two versions: Academic (for university admissions) and General Training (for work and migration). The test is 2 hours and 45 minutes long and covers Listening, Reading, Writing, and Speaking. Band scores range from 0–9 in 0.5 increments. Most universities require a minimum band of 6.0–7.0, and top programmes often require 7.0+ overall."
      sections={[
        { name: "Listening (30 min)", desc: "4 recordings — conversations and monologues in everyday and academic contexts. 40 questions." },
        { name: "Reading (60 min)", desc: "3 long passages (Academic) or shorter everyday texts (General). 40 questions testing comprehension and inference." },
        { name: "Writing (60 min)", desc: "Task 1: Describe data or a diagram (Academic) or write a letter (General). Task 2: Write a discursive essay." },
        { name: "Speaking (11–14 min)", desc: "A face-to-face interview with an examiner in three parts: introduction, long turn on a topic card, and discussion." },
      ]}
      whoIsItFor={[
        "Students applying to universities in the UK, Australia, Canada, or New Zealand",
        "Applicants to programmes requiring English proficiency certification",
        "Professionals seeking work visas or immigration to English-speaking countries",
        "Those who prefer IELTS over TOEFL due to the face-to-face speaking format",
      ]}
      yprepApproach={[
        "Full IELTS diagnostic across all four skills to pinpoint your gaps",
        "Task-specific Writing coaching for both Task 1 and Task 2 with marking and feedback",
        "Speaking interview practice with an experienced examiner-trained tutor",
        "Listening and Reading modules with official Cambridge practice materials",
        "Clarity on the Academic vs. General format and which is right for your goals",
      ]}
      faqs={[
        { q: "What is the difference between IELTS Academic and IELTS General?", a: "IELTS Academic is for university admissions; IELTS General Training is typically for work visas and migration. The Listening and Speaking sections are the same for both; Reading and Writing differ." },
        { q: "What band score do I need?", a: "Requirements vary by institution and country. Most universities require 6.0–7.0 overall. Top universities often require 7.0–7.5+. Check your target school's requirements." },
        { q: "How is IELTS scored?", a: "Each of the four sections is scored 0–9 in half-band increments. Your overall score is the average of all four." },
        { q: "How is the IELTS Speaking test conducted?", a: "IELTS Speaking is a face-to-face interview with a certified examiner, typically conducted on a different day from the other sections. It's recorded and takes 11–14 minutes." },
        { q: "How many times can I take the IELTS?", a: "There's no limit. You can retake IELTS as many times as you like, and different test centres have different test dates available throughout the year." },
      ]}
    />
  );
}
