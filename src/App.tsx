import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

import { Footer } from "./Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="min-h-screen">
        {currentPage === "home" && (
          <HomePage setCurrentPage={setCurrentPage} />
        )}

        {currentPage === "about" && <AboutPage />}

        {currentPage === "skills" && <SkillsPage />}

        {currentPage === "projects" && <ProjectsPage />}

        {currentPage === "experience" && <ExperiencePage />}

        {currentPage === "resume" && <ResumePage />}

        {currentPage === "contact" && <ContactPage />}

        {currentPage === "admin" && <AdminPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

/* ---------------- NAVIGATION ---------------- */

function Navigation({
  currentPage,
  setCurrentPage,
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-blue-400/10 bg-[#020817]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">

        {/* BRAND */}

        <button
          onClick={() => handleNavigation("home")}
          className="group flex items-center gap-2"
          aria-label="Go to homepage"
        >
          <span className="text-2xl font-black tracking-tight text-white">
            SAKTHI
          </span>

          <span className="text-2xl font-black text-blue-500 transition-transform duration-300 group-hover:translate-x-1">
            .
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}

                {/* Active indicator */}

                <span
                  className={`absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* DESKTOP CTA */}

        <button
          onClick={() => handleNavigation("contact")}
          className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.18)]"
        >
          Let&apos;s Connect
          <ArrowRight
            size={16}
            strokeWidth={2}
            className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        {/* MOBILE MENU BUTTON */}

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/5 text-slate-200 transition-colors hover:bg-blue-500/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
                    {open ? (
            <X
              size={22}
              strokeWidth={2}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={22}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}

      {open && (
        <div className="md:hidden border-t border-blue-400/10 bg-[#020817]/98 backdrop-blur-xl">
          <div className="px-6 py-5 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500/10 text-blue-300"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={() => handleNavigation("contact")}
              className="mt-4 w-full rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-left text-sm font-semibold text-blue-300 transition-all hover:bg-blue-500/20 hover:text-white"
            >
              <span className="flex items-center justify-between">
                <span>Let&apos;s Connect</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="text-blue-400"
                />
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
