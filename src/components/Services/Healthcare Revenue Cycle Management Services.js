import React from "react";
import { ShieldCheck, Layers, Zap, Clock, Users, BarChart2, HelpCircle, Activity, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function RevenueCycleHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
              The Winning Edge for Your Practice
            </h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Clean claims, faster payments, and less admin work — built for practices of all sizes.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 shadow-lg transition-all">
              Get Started
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 hover:shadow">
              Learn more
            </button>
          </div>
        </motion.header>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Features list */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Unmatched Data Security & Privacy"
                desc="Secure encryption keeps patient data safe — in transit and at rest. Strong authentication, access controls, and regular security checks."
              />

              <FeatureCard
                icon={<Layers className="w-6 h-6" />}
                title="3 Layers of CPT Code Validation"
                desc="Reduce denials with three layers of validation, payer-guideline checks, and manual review where needed."
              />

              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Clean Claims, First Time, Every Time"
                desc="EDI tech and advanced scrubbing tools automatically find and correct errors prior to submission."
              />

              <FeatureCard
                icon={<Clock className="w-6 h-6" />}
                title="Minimize Administrative Hassles"
                desc="Integrated workflows and FTE efficiency tools reduce admin workload and let your staff focus on patients."
              />

              <FeatureCard
                icon={<BarChart2 className="w-6 h-6" />}
                title="Providers Partner in Growth"
                desc="12 years of expertise — driving up to 35% revenue growth across specialties like OB/GYN, cardiology and more."
              />

              <FeatureCard
                icon={<Users className="w-6 h-6" />}
                title="Built for Practices of All Sizes"
                desc="From solo practitioners to hospitals — flexible revenue cycle management services tailored to your needs."
              />
            </div>

            {/* Footer text in card */}
            <div className="mt-8 border-t pt-6 text-slate-600 space-y-4">
              <p>
                <strong>Regulatory & Insurance Compliance:</strong> We follow the No Surprise Act, CMS, HIPAA, OIG,
                and AMA standards so your practice stays protected.
              </p>

              <p>
                <strong>24/7 Support:</strong> Dedicated support that helps with quick questions or complex billing issues
                anytime you need it.
              </p>

              {/* New section: Why MedCare MSO */}
              <h2 className="text-xl font-bold text-slate-900 mt-8">Why MedCare MSO is the Ideal Revenue Cycle Management Company for You?</h2>
              <p className="text-slate-600 mt-2">
                We scale healthcare RCM solutions around your practice needs, focusing first on past-due billing and claims.
                Strategic AR recovery maximizes revenue by ensuring providers collect the maximum possible from their services.
              </p>

              <h3 className="mt-6 font-semibold text-slate-900">Trusted by Practices in 50+ Specialties</h3>
              <p className="text-slate-600">
                MedCare MSO simplifies the transition to value-based care with scalable solutions tailored to your workflow.
              </p>

              <ul className="grid grid-cols-2 gap-3 text-slate-700 mt-4 text-sm">
                <li><strong>18.3%</strong> Practice Growth YOY</li>
                <li><strong>92%</strong> Lowest denial rate</li>
                <li><strong>1.2%</strong> Reduced cost to collect</li>
                <li><strong>20%</strong> Smarter RCM efficiency</li>
              </ul>

              {/* Maximus Software */}
              <div className="mt-8 bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-sky-600" /> A Smarter & Efficient Future of RCM with Maximus
                </h3>
                <p className="text-slate-600 mt-2">
                  Cloud-based, comprehensive, and simple to implement, Maximus manages operations, enhances patient engagement, and boosts efficiency.
                </p>
                <ul className="grid grid-cols-2 gap-2 mt-4 text-sm text-slate-700">
                  <li>Power BI Dashboard</li>
                  <li>Patient Registration</li>
                  <li>Insurance Verification</li>
                  <li>Claim Management</li>
                  <li>Billing & Payments</li>
                  <li>A/R & Denial Management</li>
                  <li>Interoperability</li>
                </ul>
              </div>

              {/* Optimization */}
              <h2 className="text-xl font-bold text-slate-900 mt-8">How We Optimize Your Revenue Cycle?</h2>
              <p className="text-slate-600 mt-2">
                Clean claims, fewer denials, and shorter A/R cycles transform practices into profitable ones. Our 1500+ AAPC-certified billers use the four-step IMMP strategy (Identify, Manage, Monitor, Prevent) to streamline these processes.
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 mt-3 space-y-1">
                <li>Recognize denial root causes by insurance payers.</li>
                <li>Classify denials by source, reason, and factors.</li>
                <li>Provide strong documentation and timely appeals.</li>
                <li>Collect more, faster.</li>
              </ul>

              {/* Value-based Care */}
              <h2 className="text-xl font-bold text-slate-900 mt-8">Conversion to the Future of Healthcare — Value-Based Care Model</h2>
              <p className="text-slate-600 mt-2">
                We simplify the transition to value-based care by tailoring strategies to your practice workflow. This ensures improved patient outcomes, cost reduction, and compliance.
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 mt-3 space-y-1">
                <li>Ensure accurate documentation of follow-ups and care plans.</li>
                <li>Design billing aligned with bundled payment models.</li>
                <li>Ensure risk adjustment with accurate HCC coding.</li>
                <li>Track/report quality metrics for MIPS, ACO, PCMH.</li>
                <li>Communicate care plans and balances clearly to patients.</li>
              </ul>
            </div>
          </motion.div>

          {/* Right column - Summary / Stats card */}
          <motion.aside
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-white to-slate-50 p-6 rounded-2xl shadow-md flex flex-col gap-6"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900">Quick Snapshot</h3>
              <p className="mt-2 text-sm text-slate-600">Key benefits at a glance.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <StatPill label="Denial Reduction" value="Up to 35%" />
              <StatPill label="Uptime & Security" value="Enterprise-grade" />
              <StatPill label="Avg. Payment Time" value="Faster collections" />
              <StatPill label="Support" value="24/7" />
            </div>

            <div className="mt-2 flex gap-3">
              <button className="flex-1 rounded-md bg-emerald-600 text-white py-2 font-semibold hover:bg-emerald-700">
                Request a Demo
              </button>
              <button className="flex-1 rounded-md border border-slate-200 py-2 font-medium">Contact Sales</button>
            </div>

            <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
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
    <div className="flex gap-4 items-start p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-50 text-sky-600">{icon}</div>
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-slate-100">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-900">{value}</div>
    </div>
  );
}
