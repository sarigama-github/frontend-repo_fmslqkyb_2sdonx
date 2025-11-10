import React from 'react'
import Spline from '@splinetool/react-spline'
import Navbar from './components/Navbar'
import { Check, Shield, Gauge, Users, CreditCard, ArrowRight, CalendarClock, Lock, Globe2, LineChart } from 'lucide-react'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-100/60 px-3 py-1 text-xs font-medium text-amber-900">
      {children}
    </span>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-900">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-slate-900 font-semibold mb-1">{title}</h3>
      <p className="text-slate-600 text-sm leading-6">{desc}</p>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-2xl font-semibold tracking-tight text-slate-900">{value}</div>
      <div className="text-sm text-slate-600 mt-1">{label}</div>
    </div>
  )
}

export default function App() {
  const features = [
    {
      icon: Gauge,
      title: 'Automated payroll',
      desc: 'Run compliant payroll in minutes with rules for taxes, benefits, reimbursements and approvals.'
    },
    {
      icon: Users,
      title: 'People & HRMS',
      desc: 'Onboarding to offboarding in one place — time off, attendance, documents and assets.'
    },
    {
      icon: CreditCard,
      title: 'Global payouts',
      desc: 'Pay teams in 140+ countries with transparent FX and unified controls.'
    },
    {
      icon: Shield,
      title: 'Compliance by default',
      desc: 'SOC 2 Type II, GDPR and role-based access with full audit trails.'
    },
    {
      icon: Globe2,
      title: 'Local to global',
      desc: 'Regional rules, localized payslips and statutory filings out of the box.'
    },
    {
      icon: LineChart,
      title: 'Insights that act',
      desc: 'Spot anomalies, forecast costs and surface trends automatically.'
    }
  ]

  const checklist = [
    'Single-click payroll run',
    'Time off & attendance',
    'E-sign docs & letters',
    'Multi-country compliance',
    'Benefits & reimbursements',
    'Built-in statutory reports'
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Soft brand blob */}
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-4">
              <Pill>HR for people. Payroll that just works.</Pill>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Everything you need to hire, pay and care for your team
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              A clean, modern HR platform with automated payroll, time off, attendance and insights — built for growing companies.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-amber-300 transition-colors">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                Book a demo
                <CalendarClock className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
              <Stat value="99.9%" label="Uptime" />
              <Stat value="140+" label="Countries" />
              <Stat value="48h" label="Avg. closure" />
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-800">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spline 3D area */}
          <div className="relative min-h-[440px] lg:min-h-[520px] xl:min-h-[600px]">
            <div className="absolute inset-0 rounded-[20px] border border-slate-200 bg-white shadow-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-200/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-wider text-slate-500 mb-6">Trusted by fast-growing teams</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-80">
            {['Nova', 'Aperture', 'Helix', 'Quanta', 'Nimble', 'Vertex'].map((brand) => (
              <div key={brand} className="mx-auto w-28 h-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product highlights */}
      <section id="product" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <Feature key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefit strip */}
      <section className="py-10 bg-amber-50 border-y border-amber-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-slate-900">
              <Lock className="h-5 w-5" />
              <span className="text-sm font-medium">SOC 2 Type II & GDPR compliant</span>
            </div>
            <div className="flex items-center gap-3 text-slate-900">
              <Globe2 className="h-5 w-5" />
              <span className="text-sm font-medium">Multi-country, multi-currency</span>
            </div>
            <div className="flex items-center gap-3 text-slate-900">
              <LineChart className="h-5 w-5" />
              <span className="text-sm font-medium">Real-time insights & alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-md">
            <p className="text-xl leading-relaxed text-slate-800">
              “FluxHR makes payroll invisible. Our team spends less time on admin and more time building. The switch was effortless and the support is world‑class.”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-200" />
              <div>
                <div className="font-semibold text-slate-900">Ava Chen</div>
                <div className="text-sm text-slate-600">VP Operations, Nova Labs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl">
            <div className="absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Bring clarity to your people ops
                </h2>
                <p className="mt-3 text-slate-600">
                  Get started in minutes. No setup fees. Cancel anytime.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-800">
                  {['Free migration', 'White-glove onboarding', '24/7 support'].map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                      <Check className="h-3.5 w-3.5 text-emerald-600" /> {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-amber-300 transition-colors">
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} FluxHR — HRMS & Payroll for modern teams.</p>
            <div className="flex items-center gap-4 text-sm text-slate-700">
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
