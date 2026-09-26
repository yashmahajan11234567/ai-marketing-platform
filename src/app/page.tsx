"use client";

import { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(.22,.61,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,.61,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const slides = [
  {
    id: "title", bgOrbs: true,
    inner: (
      <div className="text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">AI Marketing &amp;</span>
            <br />
            <span className="text-white">WhatsApp Automation Platform</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            An affordable AI marketing department for local businesses
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 backdrop-blur text-base font-medium text-gray-300">
            <span className="text-blue-400">Create</span>
            <span className="text-white/30">→</span>
            <span className="text-emerald-400">Market</span>
            <span className="text-white/30">→</span>
            <span className="text-violet-400">Interact</span>
            <span className="text-white/30">→</span>
            <span className="text-amber-400">Convert</span>
          </div>
        </FadeIn>
      </div>
    ),
  },
  {
    id: "problem",
    inner: (
      <div className="max-w-3xl mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Too many tools.<br />Zero cohesion.</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-10 text-base leading-relaxed">Local businesses juggle disconnected tools just to get basic marketing done</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-3 justify-center mb-5">
            {["Image Creator", "Video Tool", "Caption Writer"].map((t) => (
              <span key={t} className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur">{t}</span>
            ))}
            <span className="text-white/20 self-center text-lg">+</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-3 justify-center mb-5">
            {["Scheduler", "WhatsApp Tool", "Analytics"].map((t) => (
              <span key={t} className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur">{t}</span>
            ))}
            <span className="text-white/20 self-center text-lg">+</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["Chatbot", "CRM", "Integrations"].map((t) => (
              <span key={t} className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur">{t}</span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.35}>
          <div className="text-center p-4 rounded-2xl bg-red-500/5 border border-red-500/20">
            <p className="text-sm text-red-300/80">Result: high cost · fragmented workflow · steep learning curve · limited time</p>
          </div>
        </FadeIn>
      </div>
    ),
  },
  {
    id: "solution",
    inner: (
      <div className="max-w-5xl mx-auto w-full text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">Our Solution</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">One platform.<br />Complete journey.</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-12 text-base">From idea to analytics — no tool switching</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {["01 Idea", "02 AI Content", "03 Campaign", "04 Social + WhatsApp", "05 AI Interaction", "06 Lead / Order", "07 Analytics"].map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur text-xs font-medium text-gray-200 hover:border-blue-400/50 hover:bg-blue-500/5 transition-all duration-300 cursor-default">{step}</div>
                {i < 6 && <span className="px-2 text-white/20">→</span>}
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.35}>
          <div className="flex flex-wrap gap-3 justify-center">
            {["AI Images", "AI Videos", "Captions", "WhatsApp", "Chatbot", "Analytics"].map((t) => (
              <span key={t} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">{t}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    ),
  },
  {
    id: "landscape",
    inner: (
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3">Competitive Landscape</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Who&apos;s already here</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-10 text-base">Key players in AI marketing and WhatsApp automation</p>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Predis.ai", tag: "Global · USD", color: "border-blue-500/30", feats: ["AI Images & Videos", "AI Captions", "Scheduling", "No WhatsApp core"] },
            { name: "PostDesi", tag: "India · INR", color: "border-emerald-500/30", feats: ["AI Social Content", "WhatsApp / API", "Chatbot Integration", "Lead Generation"] },
            { name: "AiSensy", tag: "India · INR", color: "border-violet-500/30", feats: ["WhatsApp Marketing", "Chatbots", "Campaigns", "Limited AI content"] },
            { name: "Gallabox", tag: "India · INR", color: "border-amber-500/30", feats: ["WhatsApp AI Agents", "Instagram AI Agents", "Lead Qualification", "API / Integrations"] },
          ].map((c, i) => (
            <FadeIn key={c.name} delay={0.1 + i * 0.08}>
              <div className={`h-full bg-white/5 border ${c.color} rounded-2xl p-5 backdrop-blur hover:bg-white/8 transition-all duration-300`}>
                <div className="font-semibold text-sm mb-1">{c.name}</div>
                <div className="text-xs text-gray-500 mb-4">{c.tag}</div>
                <div className="space-y-2">
                  {c.feats.map((f) => (
                    <div key={f} className="text-xs text-gray-400 bg-white/5 rounded-lg px-3 py-1.5">{f}</div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <p className="text-xs text-gray-600 mt-6 text-center">Sources: predis.ai/pricing · postdesi.in · aisensy.com/pricing · gallabox.com/pricing (published September 2026)</p>
        </FadeIn>
      </div>
    ),
  },
  {
    id: "pricing",
    inner: (
      <div className="max-w-4xl mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3">Market Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Published Competitor Pricing</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-8 text-base">All prices as published September 2026 — USD not converted to INR</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {["Platform", "Entry Plan", "Mid Plan", "Top Plan", "Key Focus"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left font-medium text-gray-400 text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: "Predis.ai", entry: "$24/mo", mid: "$55/mo", top: "$212/mo", focus: "AI content &amp; scheduling", accent: "text-blue-400" },
                  { name: "PostDesi", entry: "₹399/mo", mid: "₹999/mo", top: "—", focus: "AI content + WhatsApp", accent: "text-emerald-400" },
                  { name: "AiSensy", entry: "₹1,500/mo", mid: "₹3,200/mo", top: "₹45,000/mo", focus: "WhatsApp automation", accent: "text-emerald-400" },
                  { name: "Gallabox", entry: "₹2,999/mo", mid: "₹6,999/mo", top: "₹16,999/mo", focus: "WhatsApp AI agents", accent: "text-emerald-400" },
                ].map((r, i) => (
                  <tr key={r.name} className={`hover:bg-white/5 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                    <td className="px-5 py-4 font-medium text-white">{r.name}</td>
                    <td className={`px-5 py-4 font-semibold ${r.accent}`}>{r.entry}</td>
                    <td className={`px-5 py-4 ${r.accent}`}>{r.mid}</td>
                    <td className={`px-5 py-4 ${r.accent}`}>{r.top}</td>
                    <td className="px-5 py-4 text-gray-400">{r.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="text-xs text-gray-600 mt-4 text-center">Applicable WhatsApp/Meta messaging charges are additional on all platforms.</p>
        </FadeIn>
      </div>
    ),
  },
  {
    id: "our-pricing",
    inner: (
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">Our Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Built for every stage</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-10 text-base">Affordable entry · Monthly subscription or pay-as-you-go</p>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Free", price: "₹0", sub: "/mo", features: ["10 AI images", "2 AI videos", "100 AI captions", "100 WA messages", "Basic profile", "Watermark on content"], highlight: false },
            { name: "Starter", price: "₹499", sub: "/mo", features: ["50 AI images", "10 AI videos", "500 captions", "1,000 WA messages", "Basic analytics", "Content calendar", "No watermark"], highlight: false },
            { name: "Growth", price: "₹999", sub: "/mo", features: ["150 AI images", "30 AI videos", "Unlimited captions", "5,000 WA messages", "AI WA chatbot/agent", "Auto campaigns", "Segmentation", "Advanced analytics", "3 team members"], highlight: true },
            { name: "Business", price: "₹1,999", sub: "/mo", features: ["400 AI images", "75 AI videos", "Advanced AI content", "15,000 WA messages", "Multiple WA numbers", "Advanced analytics", "10 team members", "API access", "Priority support"], highlight: false },
          ].map((p, i) => (
            <FadeIn key={p.name} delay={0.1 + i * 0.08}>
              <div className={`relative h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${p.highlight ? "bg-gradient-to-b from-blue-500/15 to-transparent border-2 border-blue-500 shadow-lg shadow-blue-500/10" : "bg-white/5 border border-white/10 hover:border-white/20"} backdrop-blur`}>
                {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">Most Popular</div>}
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">{p.name}</div>
                <div className={`text-3xl font-bold mb-4 ${p.highlight ? "bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" : "text-white"}`}>{p.price}<span className="text-sm font-normal text-gray-500">{p.sub}</span></div>
                <ul className="space-y-2.5 text-left">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-emerald-400 shrink-0 mt-0.5 text-[10px]">✓</span>{f}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "payg",
    inner: (
      <div className="max-w-4xl mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3">Pay-As-You-Go</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Pay only when you need it</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-10 text-base">Subscribe for predictable monthly usage — or use credits on demand</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          <FadeIn delay={0.15}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="font-semibold mb-4 text-sm text-gray-200">AI Content</h3>
              {[["Standard AI image", "₹10/post"], ["Premium AI image", "₹20/post"], ["AI short video", "₹40/video"], ["Premium AI video", "₹75/video"], ["Caption + hashtags", "₹5"], ["Image + caption campaign", "₹15"], ["Image + video + caption campaign", "₹50"]].map(([label, price]) => (
                <div key={label as string} className="flex justify-between py-2.5 border-b border-white/5 text-sm last:border-0">
                  <span className="text-gray-400">{label}</span><span className="font-semibold text-white">{price}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="font-semibold mb-4 text-sm text-gray-200">WhatsApp Message Packs</h3>
              {[["100 messages", "₹20"], ["500 messages", "₹90"], ["1,000 messages", "₹160"], ["5,000 messages", "₹700"], ["10,000 messages", "₹1,300"]].map(([label, price]) => (
                <div key={label as string} className="flex justify-between py-2.5 border-b border-white/5 text-sm last:border-0">
                  <span className="text-gray-400">{label}</span><span className="font-semibold text-white">{price}</span>
                </div>
              ))}
              <p className="text-xs text-gray-600 mt-4 italic">Applicable WhatsApp/Meta messaging charges are additional.</p>
              <div className="mt-4 p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl text-xs text-gray-400">
                <strong className="text-blue-300">Credit System Available</strong><br />
                Unified credits across all services — subscriptions receive monthly credits, PAYG customers purchase credits as needed.
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    ),
  },
  {
    id: "comparison",
    inner: (
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3">Feature Comparison</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How we compare</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-8 text-base">Covering the capabilities that matter most</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr>
                  {["Feature", "Predis", "PostDesi", "AiSensy", "Gallabox", "Our Platform"].map((h, i) => (
                    <th key={h} className={`px-4 py-3.5 text-center font-medium text-xs uppercase tracking-wider ${i === 5 ? "text-blue-400 bg-blue-500/10" : "text-gray-500"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["AI Images", "✓", "✓", "Limited", "—", "✓"],
                  ["AI Videos", "✓", "Limited", "—", "—", "✓"],
                  ["AI Captions", "✓", "✓", "Limited", "—", "✓"],
                  ["WhatsApp Automation", "—", "✓", "✓", "✓", "✓"],
                  ["AI WhatsApp Agent", "—", "Limited", "Limited", "✓", "✓"],
                  ["Bulk Messaging", "—", "✓", "✓", "✓", "✓"],
                  ["Social Media", "✓", "✓", "Limited", "Limited", "✓"],
                  ["Campaign Generation", "✓", "✓", "—", "✓", "✓"],
                  ["Local Business Focus", "No", "Yes", "Partial", "Partial", "✓ Core"],
                  ["Pay-as-you-go", "No", "Partial", "No", "No", "✓"],
                  ["Unified Workflow", "Partial", "Partial", "No", "No", "✓ End-to-end"],
                ].map(([feat, p, pd, as_, g, ours], i) => (
                  <tr key={feat as string} className={`hover:bg-white/5 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                    <td className="text-left px-4 py-3 text-gray-200 font-medium text-xs">{feat}</td>
                    <td className="text-center px-4 py-3 text-gray-400">{p}</td>
                    <td className="text-center px-4 py-3 text-gray-400">{pd}</td>
                    <td className="text-center px-4 py-3 text-gray-400">{as_}</td>
                    <td className="text-center px-4 py-3 text-gray-400">{g}</td>
                    <td className="text-center px-4 py-3 font-semibold text-blue-400 bg-blue-500/5">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="text-xs text-gray-600 mt-4 text-center">✓ = Available &nbsp; Limited = Depends on plan &nbsp; — = Not available &nbsp; | &nbsp; Published pricing checked September 2026</p>
        </FadeIn>
      </div>
    ),
  },
  {
    id: "why-us",
    inner: (
      <div className="max-w-4xl mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Built different</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-10 text-base">Differentiation through integration, simplicity, and flexible pricing</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {[
            { num: "01", title: "Affordable Entry", desc: "Free tier to try, Starter at ₹499/mo — designed for micro-businesses and home-based entrepreneurs." },
            { num: "02", title: "One Platform", desc: "Images, videos, captions, WhatsApp, chatbot, and analytics — all in a single workflow." },
            { num: "03", title: "Local Business Focus", desc: "Built for restaurants, salons, gyms, retailers, clinics, real estate agents — not enterprise agencies." },
            { num: "04", title: "Marketing → Interaction", desc: "Turn marketing into customer conversations, leads, and bookings automatically." },
            { num: "05", title: "Simple UX", desc: "Type a promotion and get an image, video, caption, hashtags, and WhatsApp campaign — done." },
            { num: "06", title: "Flexible Pricing", desc: "Subscribe monthly or pay-as-you-go with credit packs. No lock-in, no surprises." },
          ].map((item, i) => (
            <FadeIn key={item.num} delay={0.1 + i * 0.07}>
              <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-blue-500/30 hover:bg-white/8 transition-all duration-300 group">
                <div className="text-3xl font-bold text-blue-500/30 mb-3 group-hover:text-blue-400 transition-colors">{item.num}</div>
                <h4 className="font-semibold text-sm mb-2 text-gray-100">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.55}>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-emerald-500/10 border border-white/10 backdrop-blur">
            <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Existing platforms solve parts of the marketing journey. We aim to make the{" "}
              <strong className="text-white">complete journey</strong> simple and affordable for local businesses.
            </p>
          </div>
        </FadeIn>
      </div>
    ),
  },
  {
    id: "business-model",
    inner: (
      <div className="max-w-3xl mx-auto w-full text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3">Business Model</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Revenue streams</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 mb-10 text-base">Multiple revenue streams · Clear upgrade path</p>
        </FadeIn>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {[{ n: "1", label: "Subscriptions" }, { n: "2", label: "AI Credits" }, { n: "3", label: "PAYG Content" }, { n: "4", label: "WA Campaigns" }, { n: "5", label: "Business Tier" }].map((r, i) => (
            <FadeIn key={r.n} delay={0.1 + i * 0.06}>
              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-center min-w-[110px] backdrop-blur hover:border-white/20 transition-all">
                <div className="text-2xl font-bold text-emerald-400 mb-1">{r.n}</div>
                <div className="text-xs text-gray-400">{r.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.45}>
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {["Free", "PAYG / Starter", "Growth", "Business"].map((step, i) => (
              <>
                <span className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${step === "Growth" ? "bg-blue-500/15 border border-blue-500/40 text-blue-300" : step === "PAYG / Starter" ? "bg-white/5 border border-white/10 text-gray-300" : "bg-white/5 border border-white/10 text-gray-500"}`}>{step}</span>
                {i < 3 && <span className="text-white/20 text-lg">→</span>}
              </>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.55}>
          <p className="text-sm text-gray-500 mb-6">One platform for a local business&apos;s entire marketing-to-customer journey</p>
        </FadeIn>
        <FadeIn delay={0.65}>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {(["CREATE", "MARKET", "INTERACT", "CONVERT"] as const).map((word, i) => (
              <>
                <span className={`px-5 py-3 rounded-xl text-lg font-bold transition-all hover:scale-105 ${i === 0 ? "bg-blue-500/15 text-blue-400 border border-blue-500/20" : i === 1 ? "bg-violet-500/15 text-violet-400 border border-violet-500/20" : i === 2 ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/15 text-amber-400 border border-amber-500/20"}`}>{word}</span>
                {i < 3 && <span className="text-white/20 text-xl">→</span>}
              </>
            ))}
          </div>
        </FadeIn>
      </div>
    ),
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = (n: number) => {
    if (n < 0) n = 0;
    if (n >= total) n = total - 1;
    setCurrent(n);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goTo(current + 1); }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setCurrent(Number(e.target.getAttribute("data-slide"))); }),
      { threshold: 0.55 }
    );
    document.querySelectorAll("[data-slide]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-[3px] z-[200]" style={{ width: `${((current + 1) / total) * 100}%`, background: "linear-gradient(90deg, #3b82f6, #06d6a0)", transition: "width 0.5s cubic-bezier(.22,.61,.36,1)" }} />

      {slides.map((slide, idx) => (
        <section key={slide.id} data-slide={idx} className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ scrollSnapAlign: "start" }}>
          {slide.bgOrbs && (
            <>
              <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-[0.08] -top-32 -right-32" style={{ animation: "pulse 4s ease-in-out infinite" }} />
              <div className="absolute w-[400px] h-[400px] bg-violet-600 rounded-full blur-[120px] opacity-[0.08] -bottom-20 -left-20" style={{ animation: "pulse 5s ease-in-out infinite" }} />
              <div className="absolute w-[200px] h-[200px] bg-emerald-500 rounded-full blur-[80px] opacity-[0.06] top-1/2 left-2/3" style={{ animation: "pulse 3s ease-in-out infinite" }} />
            </>
          )}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="relative z-10 w-full px-6">{slide.inner}</div>
        </section>
      ))}

      <button onClick={() => goTo(current - 1)} className="fixed left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/60 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 disabled:opacity-20 z-[100]" disabled={current === 0} aria-label="Previous slide">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button onClick={() => goTo(current + 1)} className="fixed right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/60 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 disabled:opacity-20 z-[100]" disabled={current === total - 1} aria-label="Next slide">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-[100]">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all duration-400 ${current === i ? "w-8 h-2 bg-gradient-to-r from-blue-400 to-emerald-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>

      <div className="fixed bottom-8 right-6 text-xs text-white/20 font-mono z-[100]">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </div>
  );
}
