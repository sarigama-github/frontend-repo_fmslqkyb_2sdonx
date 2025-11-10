import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-amber-400 p-[2px] shadow-sm shadow-amber-400/30">
            <div className="h-full w-full rounded-[10px] bg-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900">FluxHR</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#product" className="text-slate-700 hover:text-slate-900 transition-colors">Product</a>
          <a href="#payroll" className="text-slate-700 hover:text-slate-900 transition-colors">Payroll</a>
          <a href="#hrms" className="text-slate-700 hover:text-slate-900 transition-colors">HRMS</a>
          <a href="#pricing" className="text-slate-700 hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#resources" className="text-slate-700 hover:text-slate-900 transition-colors">Resources</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#login" className="text-slate-800 hover:text-slate-900 px-3 py-2 rounded-lg">Sign in</a>
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-slate-900 px-5 py-2 text-sm font-semibold shadow-sm hover:bg-amber-300 transition-colors">
            Get started
          </a>
        </div>

        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  )
}
