import { useState } from "react";
import SlideShow from "../components/SlideShow";
import ProjectList from "../components/ProjectList";

export default function Home() {
  const [slideDone, setSlideDone] = useState(
    () => sessionStorage.getItem("hasViewedSlides") === "true",
  );

  return (
    <main className="relative">
      {/* SlideShow handles its own visibility + sessionStorage */}
      <SlideShow onComplete={() => setSlideDone(true)} />

      {/* Final slide shown after completing slides (or on return visit) */}
      {slideDone && (
        <div className="h-screen flex items-center justify-start px-8 md:px-16">
          <div>
            <h4
              className="font-sans font-bold text-display-xl text-ink m-0"
              style={{ letterSpacing: "0.016em" }}
            >
              Startup Mindset.
            </h4>
            <p className="text-xl text-muted mt-4">
              Agile Driven, Rapid Prototyping.
            </p>
          </div>
        </div>
      )}

      <ProjectList />
    </main>
  );
}
