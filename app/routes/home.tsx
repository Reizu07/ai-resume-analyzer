import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "../components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumitz" },
    {
      name: "description",
      content: "Smart feedback for your dream job!",
    },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>AI-Powered Resume Scanner for Your Dream Job</h1>
          <h2>
            Review your resume with AI and get smart feedback for your dream
            job!
          </h2>
        </div>
      </section>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}
