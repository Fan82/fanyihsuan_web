import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import ProjectList from "../components/ProjectList";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const skipToProjects = searchParams.get("scroll") === "projects";

  const [slideDone, setSlideDone] = useState(skipToProjects);

  useEffect(() => {
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Nav fires this event when user clicks "projects" while already on homepage
  useEffect(() => {
    const handler = () => {
      document.body.style.overflow = "";
      setSlideDone(true);
    };
    window.addEventListener("skipSlideshow", handler);
    return () => window.removeEventListener("skipSlideshow", handler);
  }, []);

  // Once ProjectList is mounted, scroll to it
  useEffect(() => {
    if (!slideDone) return;
    const t = setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "instant" });
      setSearchParams({}, { replace: true });
    }, 50);
    return () => clearTimeout(t);
  }, [slideDone]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="relative">
      {!slideDone && <SlideShow onComplete={() => setSlideDone(true)} />}
      {slideDone && <ProjectList />}
    </main>
  );
}
