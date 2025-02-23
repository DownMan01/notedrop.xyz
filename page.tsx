"use client"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, Filter, Gift, Info, Timer, X, Users, Server, Wallet, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  // Filter states
  const [statusFilter, setStatusFilter] = useState<string[]>([])
  const [typeFilter, setTypeFilter] = useState<string[]>([])

  // Get unique types from airdrops
  const types = ["L2", "ZK Rollup", "Privacy", "DeFi", "Infrastructure"]

  const airdrops = [
    // Original 5 airdrops
    {
      id: "1",
      name: "Grass",
      image: "https://pbs.twimg.com/profile_images/1836126251007852545/wILJU3d6_400x400.jpg",
      description: "Building the Data Layer of AI.",
      chain: "Solana",
      cost: "FREE",
      backers: "Polychain, Hack VC, etc.",
      status: "Active",
      stage: "Mainnet",
    },
    {
      id: "2",
      name: "Gradient Network",
      image: "https://pbs.twimg.com/profile_images/1873672943965990913/nlVpEV72_400x400.jpg",
      description: "The open layer for edge compute.",
      chain: "Solana",
      cost: "FREE ",
      backers: "Multicoin Capital, Pantera, etc.",
      status: "Active",
      stage: "Mainnet",
    },
     {
      id: "3",
      name: "Perena",
      image: "https://pbs.twimg.com/profile_images/1873746095765135360/utMTqiFJ_400x400.jpg",
      description: "Stablecoin Infrastructure",
      chain: "Solana",
      cost: "Trading | Liquidity",
      backers: "Binance Labs, Maelstrom, etc.",
      status: "Active",
      stage: "Mainnet",
    },
    {
      id: "4",
      name: "Lava Network",
      image: "https://pbs.twimg.com/profile_images/1628433459977850882/l4oqDz8R_400x400.jpg",
      description: "Modular Data Network",
      chain: "Multichain",
      cost: "FREE",
      backers: "Jump Crypto, Hashkey, etc.",
      status: "Active",
      stage: "Testnet",
    },
    {
      id: "5",
      name: "Monad",
      image: "https://pbs.twimg.com/profile_images/1877532281419739137/I_t8rg_V_400x400.jpg",
      description: "Layer 1 Blockchain",
      chain: "Monad",
      cost: "FREE",
      backers: "Coinbase, Shima Capital, etc.",
      status: "Active",
      stage: "Testnet",
    },
  ]

  // Filter function
  const filteredAirdrops = airdrops.filter((airdrop) => {
    if (statusFilter.length > 0 && !statusFilter.includes(airdrop.status)) {
      return false
    }
    // Add type filtering when you have type data in your airdrops
    return true
  })

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <span className="font-bold text-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
              NoteDrop
            </span>
          </Link>
          <nav className="flex gap-6">
            <Link href="#airdrops" className="text-sm text-gray-400 hover:text-white transition-colors">
              Airdrops
            </Link>
            <Link href="#guide" className="text-sm text-gray-400 hover:text-white transition-colors">
              Guide
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text"
              >
                Discover Top Crypto Airdrops
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 mb-8"
              >
                Stay updated with the latest airdrops from promising crypto projects. Track cost, backers, and
                eligibility.
              </motion.p>
            </div>
          </div>
        </section>
  
          {/* Guide Section - Moved to top */}
        <section id="guide" className="bg-white/5 border-y border-white/10">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">How to Participate</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Info className="h-12 w-12 text-violet-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Tasks</h3>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-fuchsia-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Check Eligibility</h3>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Timer className="h-12 w-12 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Wait for Distribution</h3>
                </div>
            </div>
          </div>
        </section>
        
        {/* Airdrops Grid with Filters */}
        <section id="airdrops" className="container mx-auto px-4 py-24">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Airdrops</h2>

            {/* Filter Controls */}
            <div className="flex gap-4 flex-wrap justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-white/5 border-white/10">
                    <Filter className="w-4 h-4 mr-2" />
                    Status
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/90 border-black/10">
                  <DropdownMenuCheckboxItem
                    checked={statusFilter.includes("Active")}
                    onCheckedChange={(checked) => {
                      setStatusFilter((prev) => (checked ? [...prev, "Active"] : prev.filter((s) => s !== "Active")))
                    }}
                  >
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={statusFilter.includes("Upcoming")}
                    onCheckedChange={(checked) => {
                      setStatusFilter((prev) =>
                        checked ? [...prev, "Upcoming"] : prev.filter((s) => s !== "Upcoming"),
                      )
                    }}
                  >
                    Upcoming
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-white/5 border-white/10">
                    <Filter className="w-4 h-4 mr-2" />
                    Type
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/90 border-black/10">
                  {types.map((type) => (
                    <DropdownMenuCheckboxItem
                      key={type}
                      checked={typeFilter.includes(type)}
                      onCheckedChange={(checked) => {
                        setTypeFilter((prev) => (checked ? [...prev, type] : prev.filter((t) => t !== type)))
                      }}
                    >
                      {type}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {(statusFilter.length > 0 || typeFilter.length > 0) && (
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10"
                  onClick={() => {
                    setStatusFilter([])
                    setTypeFilter([])
                  }}
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Grid with filtered airdrops */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAirdrops.map((airdrop) => (
              <motion.div
                key={airdrop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden h-full">
                  <CardHeader>
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={airdrop.image || "/placeholder.svg"}
                        alt={airdrop.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white line-clamp-1">{airdrop.name}</CardTitle>
                      <Badge
                        variant="secondary"
                        className={
                          airdrop.status === "Active"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-blue-500/20 text-blue-500"
                        }
                      >
                        {airdrop.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400">{airdrop.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Server className="h-4 w-4 text-violet-500" />
                        <span className="text-white line-clamp-1">Chain:</span>
                        <span className="text-gray-400">{airdrop.chain}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Wallet className="h-4 w-4 text-fuchsia-500" />
                        <span className="text-white line-clamp-1">Cost:</span>
                        <span className="text-gray-400">{airdrop.cost}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-pink-500" />
                        <span className="text-white line-clamp-1">Backers:</span>
                        <span className="text-gray-400">{airdrop.backers}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="h-4 w-4 text-violet-500" />
                        <span className="text-white line-clamp-1">Stage:</span>
                        <span className="text-gray-400">{airdrop.stage}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white/10 hover:bg-white/20">View Details</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
        <p>© 2024 NoteDrop. All rights reserved. Developed by <a href="https://x.com/jiecrypto0" target="_blank" style="color: #1DA1F2; text-decoration: none; font-weight: bold;">jiecrypto0</a> with the help of AI.</p>
        </div>
      </footer>
    </div>
  )
}

