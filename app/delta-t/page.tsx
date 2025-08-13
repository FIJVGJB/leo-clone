"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Clock, Zap, Shield, Sword, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function DeltaTPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Lore Introduction */}
      <LoreSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Timeline */}
      <TimelineSection />

      {/* Factions */}
      <FactionsSection />

      {/* Cutscene Section */}
      <CutsceneSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <h1 className="font-cinzel font-black text-5xl md:text-7xl mb-6 leading-tight">
            The World of <span className="text-yellow-400 animate-pulse-glow whitespace-nowrap">AETHER MACHINA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-cormorant italic">
            Where time itself becomes the ultimate invention
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function LoreSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-8">The Temporal Fracture</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed font-cormorant">
              <p>
                In the Renaissance era of 1452, Master Leonardo da Vinci discovered the Delta T phenomenon—a mystical
                anomaly that allows manipulation of time itself through mechanical innovation and divine proportion.
              </p>
              <p>
                The Temporal Fracture created pockets of reality where time flows differently, where masters can slow
                their enemies, accelerate their movements, or even glimpse moments into the future through Leonardo's
                ingenious temporal mechanisms.
              </p>
              <p>
                Now, champions from across Renaissance Italy gather in these fractured arenas, each wielding unique
                temporal abilities derived from Leonardo's revolutionary studies in the ultimate test of skill,
                strategy, and mastery over time itself.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-yellow-400/30">
              <Image
                src="/historical-city-map.jpeg"
                alt="Historical City Map of Imola"
                width={600}
                height={500}
                className="w-full h-auto sepia"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const galleryItems = [
    {
      id: 1,
      src: "/leonardo-mechanical-collage-0.jpeg",
      title: "Leonardo's Mechanical Studies",
      category: "concept",
      description: "Intricate mechanical designs and clockwork innovations",
    },
    {
      id: 2,
      src: "/leonardo-mechanical-collage-1.jpeg",
      title: "Temporal Gear Mechanisms",
      category: "machinery",
      description: "Complex gear systems that manipulate time flow",
    },
    {
      id: 3,
      src: "/leonardo-mechanical-collage-2.jpeg",
      title: "Sacred Geometry Studies",
      category: "concept",
      description: "Divine proportions and mathematical harmony",
    },
    {
      id: 4,
      src: "/leonardo-perpetual-motion.jpeg",
      title: "Perpetual Motion Machine",
      category: "machinery",
      description: "Leonardo's revolutionary perpetual motion designs",
    },
    {
      id: 5,
      src: "/leonardo-flying-machine.jpeg",
      title: "Aerial Combat Machines",
      category: "machinery",
      description: "Flying machines adapted for temporal warfare",
    },
    {
      id: 6,
      src: "/cozy-village-sketch.jpeg",
      title: "Renaissance Settlement",
      category: "environments",
      description: "Peaceful villages before the temporal fractures",
    },
    {
      id: 7,
      src: "/vintage-shop-sketch-0.jpeg",
      title: "Artisan Workshop",
      category: "environments",
      description: "Where master craftsmen forge temporal devices",
    },
    {
      id: 8,
      src: "/vintage-shop-sketch-2.jpeg",
      title: "Alchemist's Laboratory",
      category: "environments",
      description: "Secret laboratories studying Aether properties",
    },
    {
      id: 9,
      src: "/futuristic-time-mage.png",
      title: "The Chronomancer",
      category: "characters",
      description: "Master of temporal manipulation and time magic",
    },
    {
      id: 10,
      src: "/cyberpunk-assassin.png",
      title: "Shadow Walker",
      category: "characters",
      description: "Stealthy assassin with phase abilities",
    },
    {
      id: 11,
      src: "/armored-tank-character.png",
      title: "The Gearsmith",
      category: "characters",
      description: "Heavily armored mechanical warrior",
    },
    {
      id: 12,
      src: "/energy-healer.png",
      title: "Aether Weaver",
      category: "characters",
      description: "Mystical healer channeling raw Aether energy",
    },
    {
      id: 13,
      src: "/futuristic-battlefield-time.png",
      title: "Temporal Battlefield",
      category: "environments",
      description: "Arena where time itself becomes a weapon",
    },
    {
      id: 14,
      src: "/time-distorted-battlefield.png",
      title: "Fractured Reality",
      category: "environments",
      description: "Battleground torn by temporal anomalies",
    },
    {
      id: 15,
      src: "/futuristic-marksman.png",
      title: "Precision Gunner",
      category: "characters",
      description: "Long-range specialist with temporal targeting",
    },
    {
      id: 16,
      src: "/temporal-warrior.png",
      title: "Time Knight",
      category: "characters",
      description: "Noble warrior wielding temporal blade techniques",
    },
  ]

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "concept", name: "Concept Art", count: galleryItems.filter((item) => item.category === "concept").length },
    {
      id: "characters",
      name: "Characters",
      count: galleryItems.filter((item) => item.category === "characters").length,
    },
    {
      id: "environments",
      name: "Environments",
      count: galleryItems.filter((item) => item.category === "environments").length,
    },
    { id: "machinery", name: "Machinery", count: galleryItems.filter((item) => item.category === "machinery").length },
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl mb-6 text-yellow-400 animate-pulse-glow">
            Visual Chronicles
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-cormorant">
            Explore the rich visual world of Aether Machina through concept art, character designs, and environmental
            studies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-cinzel font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-yellow-400 text-black shadow-lg glow-yellow"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 border border-gray-600"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-yellow-400/50"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 sepia"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-cinzel font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 font-cormorant">{item.description}</p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-cinzel text-yellow-400 capitalize">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <div className="relative w-full h-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={filteredItems[selectedImage].src || "/placeholder.svg"}
                  alt={filteredItems[selectedImage].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-cinzel font-bold text-xl text-yellow-400 mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-gray-300 font-cormorant">{filteredItems[selectedImage].description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-yellow-400 font-cinzel capitalize">
                    {filteredItems[selectedImage].category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {selectedImage + 1} of {filteredItems.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const characterOrigins = [
    {
      year: "1452",
      character: "Leonardo",
      title: "The Master Inventor",
      description:
        "Leonardo da Vinci discovers the temporal mechanics through his studies of perpetual motion, becoming the first to harness time's flow through mechanical innovation",
      icon: Clock,
    },
    {
      year: "1465",
      character: "Fortezza",
      title: "The Temporal Guardian",
      description:
        "A master architect and military engineer who creates the first temporal fortifications, using time manipulation to protect Renaissance city-states",
      icon: Shield,
    },
    {
      year: "1478",
      character: "Ombra",
      title: "Born from Shadow",
      description:
        "A mysterious figure emerging from Leonardo's experimental time chamber, wielding shadow and temporal phase abilities beyond mortal comprehension",
      icon: Zap,
    },
    {
      year: "1485",
      character: "Luce",
      title: "The Healing Light",
      description:
        "A Renaissance physician and alchemist who discovers temporal healing through the study of light and optics, mastering the art of reversing time's wounds",
      icon: Sword,
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6">Origins of the Masters</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-cormorant italic">
            Discover how each master gained their temporal powers through Renaissance innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600" />

          <div className="space-y-8">
            {characterOrigins.map((origin, index) => (
              <motion.div
                key={origin.character}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} -mb-4`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-colors group parchment-bg">
                    <div
                      className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                      <origin.icon className="h-6 w-6 text-yellow-400" />
                      <span className="font-cinzel font-bold text-yellow-400 text-lg">{origin.year}</span>
                    </div>

                    <div className={`${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      <h3 className="font-cinzel font-bold text-2xl mb-1 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        {origin.character}
                      </h3>
                      <h4 className="font-cormorant font-bold text-lg mb-3 text-white italic">{origin.title}</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed font-cormorant">
                        {origin.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black shadow-lg">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20" />
                </div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FactionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const factions = [
    {
      name: "Chronos Collective",
      description: "Masters of time acceleration and battlefield control",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Temporal Guardians",
      description: "Defenders who manipulate time to protect their allies",
      color: "from-yellow-500 to-orange-400",
    },
    {
      name: "Shadow Weavers",
      description: "Assassins who use time distortion for deadly strikes",
      color: "from-purple-500 to-pink-400",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6">Factions of Aether Machina</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-cormorant">
            Choose your allegiance and master their unique temporal abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {factions.map((faction, index) => (
            <motion.div
              key={faction.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-yellow-400/20 hover:border-yellow-400/50 p-8 text-center"
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${faction.color} flex items-center justify-center`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-full" />
              </div>

              <h3 className="font-cinzel font-bold text-xl mb-3 group-hover:text-yellow-400 transition-colors">
                {faction.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-cormorant">
                {faction.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CutsceneSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl mb-6">Experience the Story</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-cormorant">
            Immerse yourself in the cinematic world of Aether Machina
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800"
        >
          <div className="aspect-video relative">
            <video controls className="w-full h-full object-cover">
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-6">
            <h3 className="font-cinzel font-bold text-xl mb-2">Aether Machina: Origins Trailer</h3>
            <p className="text-gray-400 font-cormorant">
              Witness the birth of the temporal arena and the rise of the first champions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
