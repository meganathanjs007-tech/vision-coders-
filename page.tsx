import Link from "next/link";

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-900 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400 transition">
      <h2 className="text-xl font-semibold text-cyan-400">{title}</h2>
      <p className="text-gray-400 mt-3">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-cyan-500/20">
        <h1 className="text-3xl font-bold text-cyan-400">
          AEGIS-X
        </h1>

        <Link
          href="/dashboard"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-lg transition"
        >
          Dashboard
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">

        <h1 className="text-6xl font-extrabold">
          Autonomous AI
          <span className="text-cyan-400"> Security Platform</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-400">
          AEGIS-X protects AI agents against Prompt Injection,
          Jailbreaks, Malicious URLs, File Attacks and AI Memory
          Poisoning using an advanced AI Security Council.
        </p>

        <div className="flex gap-4 mt-10">

       <Link
  href="/dashboard"
  className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-7 py-3 rounded-xl"
>
  Launch AEGIS-X
</Link>

          <button className="border border-cyan-500 px-7 py-3 rounded-xl hover:bg-cyan-500/20 transition">
            Learn More
          </button>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 pb-20">

        <Feature
          title="AI DNA"
          description="Unique fingerprinting engine that identifies malicious prompt behaviour."
        />

        <Feature
          title="Threat Detection"
          description="Real-time monitoring for prompt injections and jailbreak attacks."
        />

        <Feature
          title="Security Council"
          description="Three AI agents validate every critical decision before execution."
        />

        <Feature
          title="Attack Replay"
          description="Visual replay timeline showing how attacks were detected and blocked."
        />

      </section>

    </main>
  );
}