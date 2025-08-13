"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-24 bg-dark-gray text-white overflow-hidden parchment-bg"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-cinzel-decorative text-yellow-400 text-center mb-12 animate-pulse-glow">
          The World of Aether Machina
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              In a realm where the gears of innovation intertwine with the threads of destiny, Aether Machina invites
              you to a unique experience. Discover a world shaped by brilliant inventors, mystical alchemists, and
              powerful temporal anomalies.
            </p>
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              Our story unfolds in a Renaissance-inspired era, where the pursuit of knowledge and the mastery of
              intricate clockwork mechanisms have led to unforeseen advancements and perilous discoveries. Ancient
              secrets and futuristic technologies collide, creating a landscape ripe for adventure and conflict.
            </p>
            <p className="text-lg font-cormorant-garamond leading-relaxed">
              Join factions, forge alliances, and delve into the mysteries of the Aether, a pervasive energy that fuels
              both miraculous inventions and devastating temporal distortions. Your journey will shape the very fabric
              of time.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg glow-yellow">
            <Image
              src="/historical-city-map.jpeg"
              alt="Historical City Map"
              fill
              className="object-cover sepia"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
