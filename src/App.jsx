import React from 'react'
import Spline from '@splinetool/react-spline'
import { Check, Shield, Sparkles, Gauge, Users, CreditCard, ArrowRight, Zap, CalendarClock } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
      {children}
    </span>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm ring-1 ring-white/40 backdrop-blur transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-slate-900 font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-6">{desc}</p>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/30 bg-white/10 p-6 text-white/90 backdrop-blur">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-white/70 mt-1">{label}</div>
    </div>
  )
}

export default function App() {
  const features = [
    {
      icon: Gauge,
      title: 'Automated Payroll',
      desc: 'Run payroll in minutes with rules for taxes, benefits, reimbursements, and statutory compliance across regions.'
    },
    {
      icon: Users,
      title: 'Unified HRMS',
      desc: 'Onboarding to offboarding in one place — attendance, leaves, assets, and document vault with e-signatures.'
    },
    {
      icon: CreditCard,
      title: 'Global Payouts',
      desc: 'Pay teams in 140+ countries with FX optimization, split payments, and transparent fees.'
    },
    {
      icon: Shield,
      title: 'Enterprise-grade Security',
      desc: 'SOC 2 Type II, GDPR, and role-based access. Fine-grained approvals with complete audit trails.'
    },
  ]

  const checklist = [
    'Single-click payroll run',
    'AI anomaly detection & insights',
    'Attendance via web, mobile, kiosk',
    'Time-off policies, carryover & accruals',
    'Benefits, bonuses, and reimbursements',
    'Built-in statutory reports'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Top gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-0 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-400 to-indigo-600 opacity-30 sm:w-[72rem]" style={{ clipPath: 'polygon(74% 44%, 100% 67%, 91% 100%, 57% 92%, 33% 73%, 0 78%, 18% 41%, 48% 0, 78% 27%)' }} />
      </div>

      {/* Navbar */}
      <header className="relative z-20">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 p-[2px] shadow-md">
              <div className="h-full w-full rounded-[10px] bg-white/90 backdrop-blur"></div>
            </div>
            <span className="text-xl font-semibold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">FluxHR</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#product" className="text-slate-600 hover:text-slate-900 transition-colors">Product</a>
            <a href="#payroll" className="text-slate-600 hover:text-slate-900 transition-colors">Payroll</a>
            <a href="#hrms" className="text-slate-600 hover:text-slate-900 transition-colors">HRMS</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#resources" className="text-slate-600 hover:text-slate-900 transition-colors">Resources</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg">Sign in</a>
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">
              <Zap className="h-4 w-4" />
              Get started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-5">
              <Badge>HR & Payroll reimagined for 2026</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
              HR & Payroll that runs itself
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              A modern HRMS with automated payroll, global payouts, and AI insights — built for distributed teams and compliance-first organizations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                Book a demo
                <CalendarClock className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <Stat value="99.9%" label="Uptime SLA" />
              <Stat value="140+" label="Countries supported" />
              <Stat value="48h" label="Avg. payroll closure" />
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spline 3D area */}
          <div className="relative min-h-[420px] lg:min-h-[520px] xl:min-h-[600px]">
            <div className="absolute inset-0 rounded-[24px] border border-white/30 bg-gradient-to-br from-white/40 to-white/10 shadow-xl backdrop-blur-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-wider text-slate-500 mb-6">Trusted by fast-growing teams</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-70">
            {['Nova', 'Aperture', 'Helix', 'Quanta', 'Nimble', 'Vertex'].map((brand) => (
              <div key={brand} className="mx-auto w-28 h-10 rounded-md bg-slate-100/70 border border-slate-200/80 flex items-center justify-center text-slate-500 text-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product highlights */}
      <section id="product" className="py-6 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <Feature key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="relative py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl">
            <div className="absolute right-[-10%] top-[-30%] h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-600/30 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  Payroll at startup speed
                </h2>
                <p className="mt-3 text-slate-600">
                  Get started in minutes. No setup fees. Cancel anytime.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-700">
                  {['Free migration', 'White-glove onboarding', '24/7 support'].map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                      <Check className="h-3.5 w-3.5 text-emerald-600" /> {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40">
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} FluxHR — HRMS & Payroll for modern teams.</p>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a href="#privacy" className="hover:text-slate-900">Privacy</a>
              <a href="#terms" className="hover:text-slate-900">Terms</a>
              <a href="/test" className="hover:text-slate-900">System check</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
