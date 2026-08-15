import { motion } from "framer-motion";
import { useContactForm } from "../components/useContactForm";

export default function ContactPage() {
  const { handleSubmit, loading, success, error } = useContactForm();

  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 pb-28 pt-20 text-slate-100 md:px-10 lg:pt-24">
      {/* Ambient background */}

      <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            Contact
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Let's work{" "}
            <span className="text-blue-400">
              together.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-400">
            Have a project, opportunity, or idea?
            <br />
            <span className="font-medium text-slate-200">
              I'd love to hear from you.
            </span>
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Inventory Analytics",
              "SAP MM",
              "Supply Chain",
              "MIS",
              "Business Analytics",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-blue-400/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CONTACT AREA */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT — CONTACT INFO */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-blue-400/10 bg-white/[0.025] p-7 md:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Get In Touch
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white">
              Let's start a conversation.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Whether you're hiring for an inventory, supply chain, SAP MM,
              MIS, or analytics role, or simply want to discuss a project,
              feel free to reach out.
            </p>

            <div className="mt-9 space-y-7">

              <ContactItem
                label="Email"
                value="iamsakthii20@gmail.com"
                href="mailto:iamsakthii20@gmail.com"
              />

              <ContactItem
                label="LinkedIn"
                value="linkedin.com/in/sakthi-sivakumar"
                href="https://www.linkedin.com/in/sakthi-sivakumar-540125244"
              />

              <ContactItem
                label="GitHub"
                value="github.com/SakthiSivakumar-io"
                href="https://github.com/SakthiSivakumar-io"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Location
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  Tamil Nadu, India
                </p>
              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                Open To
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Inventory Analytics, SAP MM, Supply Chain, MIS, Business
                Analytics, and data-driven operations opportunities.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-blue-400/20 bg-white/[0.035] p-7 shadow-[0_0_70px_rgba(37,99,235,0.06)] md:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Send A Message
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white">
              Have something in mind?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Tell me a little about the opportunity, project, or idea.
              I'll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-blue-400/10 bg-[#071426] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-blue-400/10 bg-[#071426] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full resize-none rounded-xl border border-blue-400/10 bg-[#071426] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <span>→</span>}
              </button>

              {success && (
                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-3 text-sm font-medium text-emerald-300">
                  ✓ Message sent successfully. Thank you for reaching out!
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-400/15 bg-red-400/[0.05] px-4 py-3 text-sm font-medium text-red-300">
                  {error}
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* CLOSING */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-500">
            Let's connect
            <span className="mx-2 text-blue-400">→</span>
            exchange ideas
            <span className="mx-2 text-blue-400">→</span>
            create impact
          </p>

          <p className="mt-3 text-xl font-semibold text-white">
            Every great opportunity starts with a conversation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* ================= CONTACT ITEM ================= */

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>

      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        className="mt-2 inline-block text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
      >
        {value}
      </a>
    </div>
  );
}
