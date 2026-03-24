import { motion } from "framer-motion";

export default function NoqLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
        <h1 className="text-2xl font-bold">Noq</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-black text-white rounded-xl">features</button>
          <button className="px-4 py-2 bg-black text-white rounded-xl">Pricing</button>
          <button className="px-4 py-2 bg-black text-white rounded-xl">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold max-w-3xl"
        >
          Skip the Queue. Experience Noq.
        </motion.h2>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Noq helps businesses eliminate waiting lines with seamless digital
          ordering and smart queue management.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="">Start Now</button>
          <button>
            Learn More
          </button>
        </div>
      </section>


      {/* CTA */}
      <section className="px-6 py-20 text-center bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to remove waiting forever?
        </h2>
        <p className="mt-4 text-gray-300">
          Join Noq today and transform your business experience.
        </p>
        <button className="mt-6 bg-white text-black hover:bg-gray-200 rounded-lg p-1 px-2.5">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Noq. All rights reserved.
      </footer>
    </div>
  );
}
