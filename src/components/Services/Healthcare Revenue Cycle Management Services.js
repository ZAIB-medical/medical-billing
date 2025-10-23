import React from "react";
import { ShieldCheck, Layers, Zap, Clock, Users, BarChart2, HelpCircle, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function RevenueCycleHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              The Winning Edge for Your Practice
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xl">
              Clean claims, faster payments, and less admin work — built for practices of all sizes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 shadow-lg transition-all text-sm sm:text-base md:text-base lg:text-base">
              Get Started
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 hover:shadow text-sm sm:text-base md:text-base lg:text-base">
              Learn more
            </button>
          </div>
        </motion.header>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Features */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />}
                title="Unmatched Data Security & Privacy"
                desc="Secure encryption keeps patient data safe — in transit and at rest. Strong authentication, access controls, and regular security checks."
              />

              <FeatureCard
                icon={<Layers className="w-5 h-5 md:w-6 md:h-6" />}
                title="3 Layers of CPT Code Validation"
                desc="Reduce denials with three layers of validation, payer-guideline checks, and manual review where needed."
              />

              <FeatureCard
                icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />}
                title="Clean Claims, First Time, Every Time"
                desc="EDI tech and advanced scrubbing tools automatically find and correct errors prior to submission."
              />

              <FeatureCard
                icon={<Clock className="w-5 h-5 md:w-6 md:h-6" />}
                title="Minimize Administrative Hassles"
                desc="Integrated workflows and FTE efficiency tools reduce admin workload and let your staff focus on patients."
              />

              <FeatureCard
                icon={<BarChart2 className="w-5 h-5 md:w-6 md:h-6" />}
                title="Providers Partner in Growth"
                desc="12 years of expertise — driving up to 35% revenue growth across specialties like OB/GYN, cardiology and more."
              />

              <FeatureCard
                icon={<Users className="w-5 h-5 md:w-6 md:h-6" />}
                title="Built for Practices of All Sizes"
                desc="From solo practitioners to hospitals — flexible revenue cycle management services tailored to your needs."
              />
            </div>

            {/* Footer text in card */}
            <div className="mt-6 sm:mt-8 space-y-4 text-slate-600">
              <p><strong>Regulatory & Insurance Compliance:</strong> We follow the No Surprise Act, CMS, HIPAA, OIG, and AMA standards so your practice stays protected.</p>
              <p><strong>24/7 Support:</strong> Dedicated support that helps with quick questions or complex billing issues anytime you need it.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-6">Why MedCare MSO is the Ideal Revenue Cycle Management Company for You?</h2>
              <p>We scale healthcare RCM solutions around your practice needs, focusing first on past-due billing and claims. Strategic AR recovery maximizes revenue by ensuring providers collect the maximum possible from their services.</p>
            </div>
          </motion.div>

          {/* Right column - Summary / Stats */}
          <motion.aside
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-white to-slate-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md flex flex-col gap-4"
          >
            <div>
              <h3 className="text-base sm:text-lg md:text-lg font-bold text-slate-900">Quick Snapshot</h3>
              <p className="text-xs sm:text-sm md:text-sm text-slate-600 mt-1">Key benefits at a glance.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm sm:text-base">
              <StatPill label="Denial Reduction" value="Up to 35%" />
              <StatPill label="Uptime & Security" value="Enterprise-grade" />
              <StatPill label="Avg. Payment Time" value="Faster collections" />
              <StatPill label="Support" value="24/7" />
            </div>

            <div className="mt-2 flex flex-col sm:flex-row gap-2">
              <button className="flex-1 rounded-md bg-emerald-600 text-white py-2 font-semibold hover:bg-emerald-700">Request a Demo</button>
              <button className="flex-1 rounded-md border border-slate-200 py-2 font-medium">Contact Sales</button>
            </div>

            <div className="mt-2 text-xs sm:text-sm text-slate-500 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>Have a question? Our billing specialists are ready to help.</span>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-sky-50 text-sky-600">{icon}</div>
      <div>
        <h4 className="font-semibold text-sm sm:text-base md:text-base text-slate-900">{title}</h4>
        <p className="mt-1 text-xs sm:text-sm md:text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 border border-slate-100 text-xs sm:text-sm">
      <div className="text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-900">{value}</div>
    </div>
  );
}
