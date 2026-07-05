"use client";

import Link from "next/link";
import {
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Menu,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#161616] overflow-x-hidden">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#F8F6F2]/80 border-b border-[#E8E2D8]">

        <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="w-12 h-12 rounded-2xl bg-[#D89B1D] flex items-center justify-center shadow-lg">

              <Shield className="w-6 h-6 text-white"/>

            </div>

            <div>

              <h1 className="text-2xl font-black tracking-tight">

                AEGIS-X

              </h1>

              <p className="text-xs text-gray-500">

                Enterprise AI Security

              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium">

            <Link href="/" className="hover:text-[#D89B1D] transition">

              Home

            </Link>

            <Link href="/dashboard" className="hover:text-[#D89B1D] transition">

              Dashboard

            </Link>

            <Link href="/ai" className="hover:text-[#D89B1D] transition">

              Smart AI

            </Link>

            <Link href="/logs" className="hover:text-[#D89B1D] transition">

              Logs

            </Link>

          </nav>

          {/* Button */}

          <Link

            href="/dashboard"

            className="hidden lg:flex items-center gap-2 rounded-2xl bg-[#161616] text-white px-6 py-3 font-semibold hover:scale-105 transition"

          >

            Launch

            <ArrowRight className="w-4 h-4"/>

          </Link>

          {/* Mobile */}

          <button className="lg:hidden">

            <Menu className="w-7 h-7"/>

          </button>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5DED2] px-5 py-2 shadow-sm">

            <Sparkles className="w-4 h-4 text-[#D89B1D]" />

            <span className="text-sm font-semibold">

              AI Security Platform

            </span>

          </div>

          <h2 className="mt-10 text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">

            Secure AI

            <br />

            Before It

            <br />

            Thinks.

          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">

            Protect Large Language Models from Prompt Injection,

            Jailbreaks and Data Leakage with a real-time

            Enterprise AI Security Gateway.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link

              href="/dashboard"

              className="rounded-2xl bg-[#D89B1D] px-8 py-5 text-white font-bold flex items-center gap-3 hover:scale-105 transition-all"

            >

              Launch Dashboard

              <ArrowRight className="w-5 h-5"/>

            </Link>

            <Link

              href="/ai"

              className="rounded-2xl bg-white border border-[#E5DED2] px-8 py-5 font-semibold hover:shadow-lg transition"

            >

              Smart AI

            </Link>

          </div>

          <div className="mt-12 space-y-4">

            <div className="flex items-center gap-3">

              <CheckCircle2 className="w-5 h-5 text-green-600"/>

              <span>Prompt Injection Protection</span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle2 className="w-5 h-5 text-green-600"/>

              <span>Real-time AI Threat Detection</span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle2 className="w-5 h-5 text-green-600"/>

              <span>Enterprise Security Dashboard</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div>
                    {/* Premium AI Preview Window */}

          <div className="relative">

            {/* Glow */}

            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-amber-200/40 via-transparent to-yellow-100/40 blur-3xl"></div>

            {/* Window */}

            <div className="relative overflow-hidden rounded-[32px] border border-[#E6DED2] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

              {/* Window Header */}

              <div className="flex items-center justify-between border-b border-[#ECE5DA] px-6 py-5">

                <div className="flex items-center gap-2">

                  <div className="h-3 w-3 rounded-full bg-red-400"></div>

                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>

                  <div className="h-3 w-3 rounded-full bg-green-500"></div>

                </div>

                <span className="text-sm font-medium text-gray-500">

                  aegis-x security engine

                </span>

                <div className="flex items-center gap-2">

                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>

                  <span className="text-xs font-semibold text-green-600">

                    LIVE

                  </span>

                </div>

              </div>

              {/* Terminal */}

              <div className="space-y-4 p-8 font-mono text-[15px]">

                <div className="text-gray-500">

                  $ scan_prompt()

                </div>

                <div>

                  <span className="text-blue-600">

                    →

                  </span>

                  {" "}

                  Inspecting Prompt...

                </div>

                <div>

                  <span className="text-green-600">

                    ✓

                  </span>

                  {" "}

                  Prompt Verified

                </div>

                <div>

                  <span className="text-green-600">

                    ✓

                  </span>

                  {" "}

                  AI Policy Validation

                </div>

                <div>

                  <span className="text-green-600">

                    ✓

                  </span>

                  {" "}

                  Threat Intelligence Complete

                </div>

                <div className="my-5 border-t border-dashed border-[#E6DED2]"></div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Threat Score

                  </span>

                  <span className="font-bold text-red-500">

                    98%

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Decision

                  </span>

                  <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-bold text-red-600">

                    BLOCKED

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Audit Log

                  </span>

                  <span className="font-bold text-green-600">

                    Stored ✓

                  </span>

                </div>

              </div>

            </div>

            {/* Floating Cards */}

            <div className="mt-8 grid grid-cols-3 gap-5">

              <div className="rounded-3xl border border-[#E6DED2] bg-white p-6 shadow-sm">

                <p className="text-sm text-gray-500">

                  Requests

                </p>

                <h3 className="mt-3 text-4xl font-black">

                  2.4M

                </h3>

              </div>

              <div className="rounded-3xl border border-[#E6DED2] bg-white p-6 shadow-sm">

                <p className="text-sm text-gray-500">

                  Accuracy

                </p>

                <h3 className="mt-3 text-4xl font-black text-green-600">

                  99.8%

                </h3>

              </div>

              <div className="rounded-3xl border border-[#E6DED2] bg-white p-6 shadow-sm">

                <p className="text-sm text-gray-500">

                  Threats

                </p>

                <h3 className="mt-3 text-4xl font-black text-red-500">

                  12K

                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="max-w-2xl">

          <p className="text-[#D89B1D] font-semibold">

            FEATURES

          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">

            Enterprise-grade AI protection

            built for modern applications.

          </h2>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {/* Card 1 */}

          <div className="group rounded-[36px] border border-[#E8E2D8] bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-center justify-between">

              <div className="h-16 w-16 rounded-3xl bg-[#FFF5DD] flex items-center justify-center">

                <Shield className="w-8 h-8 text-[#D89B1D]" />

              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">

                ACTIVE

              </span>

            </div>

            <h3 className="mt-8 text-3xl font-black">

              Prompt Firewall

            </h3>

            <p className="mt-5 text-gray-600 leading-8">

              Every prompt passes through multiple security layers to detect
              Prompt Injection, Jailbreak attempts and malicious instructions
              before reaching Gemini AI.

            </p>

            <div className="mt-8 flex gap-3 flex-wrap">

              <span className="rounded-full bg-[#F8F6F2] px-4 py-2 text-sm">

                Prompt Injection

              </span>

              <span className="rounded-full bg-[#F8F6F2] px-4 py-2 text-sm">

                Jailbreak

              </span>

              <span className="rounded-full bg-[#F8F6F2] px-4 py-2 text-sm">

                Data Leak

              </span>

            </div>

          </div>

          {/* Card 2 */}

          <div className="group rounded-[36px] border border-[#E8E2D8] bg-[#161616] text-white p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-center justify-between">

              <div className="h-16 w-16 rounded-3xl bg-[#2C2C2C] flex items-center justify-center">

                <Sparkles className="w-8 h-8 text-[#FFD66B]" />

              </div>

              <span className="rounded-full bg-[#2D2D2D] px-4 py-2 text-sm">

                LIVE

              </span>

            </div>

            <h3 className="mt-8 text-3xl font-black">

              AI Policy Engine

            </h3>

            <p className="mt-5 text-gray-300 leading-8">

              Intelligent rule engine evaluates every AI request using
              enterprise security policies before forwarding it to the model.

            </p>

            <div className="mt-8 rounded-3xl bg-[#222] p-6">

              <div className="flex justify-between">

                <span>

                  Trust Score

                </span>

                <span className="font-bold text-green-400">

                  99%

                </span>

              </div>

              <div className="mt-4 h-3 rounded-full bg-[#333]">

                <div className="h-3 w-[99%] rounded-full bg-green-400"></div>

              </div>

            </div>

          </div>

          {/* Card 3 */}

          <div className="rounded-[36px] border border-[#E8E2D8] bg-white p-10">

            <p className="text-[#D89B1D] font-semibold">

              REAL TIME

            </p>

            <h3 className="mt-5 text-4xl font-black">

              Live Threat

              <br />

              Monitoring

            </h3>

            <p className="mt-6 text-gray-600 leading-8">

              Continuous monitoring of prompts, responses and AI activity with
              instant risk analysis.

            </p>

          </div>

          {/* Card 4 */}

          <div className="rounded-[36px] border border-[#E8E2D8] bg-white p-10">

            <p className="text-[#D89B1D] font-semibold">

              ENTERPRISE

            </p>

            <h3 className="mt-5 text-4xl font-black">

              Secure Audit

              <br />

              Logging

            </h3>

            <p className="mt-6 text-gray-600 leading-8">

              Every request, response and decision is securely stored in
              Firebase Firestore for compliance and auditing.

            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-[40px] bg-[#161616] text-white p-20 text-center">

          <h2 className="text-6xl font-black">

            AI Security

            <br />

            Starts Here.

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-400 leading-9">

            Deploy AEGIS-X to protect your AI applications with enterprise-grade
            security, intelligent threat detection and real-time monitoring.

          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">

            <Link
              href="/dashboard"
              className="rounded-2xl bg-[#D89B1D] px-8 py-5 font-bold text-white hover:scale-105 transition"
            >
              Launch Dashboard
            </Link>

            <Link
              href="/ai"
              className="rounded-2xl border border-gray-600 px-8 py-5 hover:bg-white hover:text-black transition"
            >
              Try Smart AI
            </Link>

          </div>

        </div>

      </section>
            {/* ================= FOOTER ================= */}

      <footer className="border-t border-[#E8E2D8] bg-[#F8F6F2]">

        <div className="max-w-7xl mx-auto px-8 py-16">

          <div className="grid lg:grid-cols-4 gap-10">

            {/* Logo */}

            <div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-[#D89B1D] flex items-center justify-center">

                  <Shield className="w-6 h-6 text-white"/>

                </div>

                <div>

                  <h2 className="text-2xl font-black">

                    AEGIS-X

                  </h2>

                  <p className="text-sm text-gray-500">

                    Enterprise AI Security

                  </p>

                </div>

              </div>

              <p className="mt-6 text-gray-500 leading-8">

                Protecting Enterprise AI Systems against Prompt Injection,
                Jailbreaks and AI Security Threats.

              </p>

            </div>

            {/* Product */}

            <div>

              <h3 className="font-black text-lg">

                Product

              </h3>

              <div className="mt-6 flex flex-col gap-4 text-gray-500">

                <Link href="/dashboard">Dashboard</Link>

                <Link href="/ai">Smart AI</Link>

                <Link href="/logs">Logs</Link>

              </div>

            </div>

            {/* Features */}

            <div>

              <h3 className="font-black text-lg">

                Features

              </h3>

              <div className="mt-6 flex flex-col gap-4 text-gray-500">

                <span>Prompt Firewall</span>

                <span>Policy Engine</span>

                <span>Threat Detection</span>

                <span>Audit Logging</span>

              </div>

            </div>

            {/* Status */}

            <div>

              <h3 className="font-black text-lg">

                Platform

              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Server

                  </span>

                  <span className="font-semibold text-green-600">

                    Online

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Gemini

                  </span>

                  <span className="font-semibold text-green-600">

                    Connected

                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Firebase

                  </span>

                  <span className="font-semibold text-green-600">

                    Active

                  </span>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-[#E8E2D8] flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500">

              © 2026 AEGIS-X • AI Security Gateway

            </p>

            

          </div>

        </div>

      </footer>

    </main>

  );
}