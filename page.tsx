"use client"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, Filter, Gift, Info, Timer, X, Users } from "lucide-react"

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
      name: "LayerZero",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Layer Zero protocol airdrop for early users and testers",
      allocation: "100M ZRO",
      requirements: "Bridge assets across chains, minimum 5 transactions",
      deadline: "March 30, 2024",
      status: "Active",
      eligibility: "Early users, bridge participants",
      participants: "45.2K",
    },
    {
      id: "2",
      name: "StarkNet",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop&q=60",
      description: "StarkNet ecosystem airdrop for protocol users",
      allocation: "250M STARK",
      requirements: "Use StarkNet dApps, minimum $500 in transactions",
      deadline: "April 15, 2024",
      status: "Upcoming",
      eligibility: "Protocol users, liquidity providers",
      participants: "32.8K",
    },
    {
      id: "3",
      name: "Celestia",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Celestia network early adopter rewards",
      allocation: "150M TIA",
      requirements: "Run a node, participate in testnet",
      deadline: "March 20, 2024",
      status: "Active",
      eligibility: "Node operators, testnet participants",
      participants: "28.4K",
    },
    {
      id: "4",
      name: "Scroll",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Scroll zkEVM ecosystem rewards",
      allocation: "200M SCROLL",
      requirements: "Deploy contracts, use Scroll bridges",
      deadline: "April 5, 2024",
      status: "Upcoming",
      eligibility: "Developers, bridge users",
      participants: "21.6K",
    },
    {
      id: "5",
      name: "Taiko",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Taiko L2 community rewards program",
      allocation: "180M TAIKO",
      requirements: "Participate in testnet, bridge assets",
      deadline: "March 25, 2024",
      status: "Active",
      eligibility: "Testnet users, community members",
      participants: "19.3K",
    },
    // Additional 20 airdrops
    {
      id: "6",
      name: "Arbitrum Nova",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Arbitrum Nova L2 ecosystem rewards",
      allocation: "300M NOVA",
      requirements: "Trade on Nova DEXs, minimum volume $1000",
      deadline: "April 20, 2024",
      status: "Upcoming",
      eligibility: "DEX traders, liquidity providers",
      participants: "38.1K",
    },
    {
      id: "7",
      name: "ZKSync Era",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "ZKSync Era protocol user rewards",
      allocation: "250M ERA",
      requirements: "Deploy or interact with zkSync dApps",
      deadline: "March 28, 2024",
      status: "Active",
      eligibility: "Protocol users, developers",
      participants: "42.3K",
    },
    {
      id: "8",
      name: "Linea",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Linea mainnet launch rewards",
      allocation: "180M LINEA",
      requirements: "Bridge assets, minimum $200 value",
      deadline: "April 10, 2024",
      status: "Active",
      eligibility: "Early adopters, bridge users",
      participants: "29.7K",
    },
    {
      id: "9",
      name: "Base",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Base L2 community incentives",
      allocation: "400M BASE",
      requirements: "Trade on Base DEXs, provide liquidity",
      deadline: "April 25, 2024",
      status: "Upcoming",
      eligibility: "Traders, liquidity providers",
      participants: "51.2K",
    },
    {
      id: "10",
      name: "Mantle",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Mantle Network launch rewards",
      allocation: "200M MNT",
      requirements: "Stake MNT, participate in governance",
      deadline: "March 22, 2024",
      status: "Active",
      eligibility: "Stakers, governance participants",
      participants: "33.9K",
    },
    {
      id: "11",
      name: "Mode",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Mode L2 early adopter program",
      allocation: "150M MODE",
      requirements: "Deploy contracts, use Mode bridges",
      deadline: "April 8, 2024",
      status: "Active",
      eligibility: "Developers, early users",
      participants: "27.5K",
    },
    {
      id: "12",
      name: "Blast",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Blast L2 launch incentives",
      allocation: "280M BLAST",
      requirements: "Deposit ETH, participate in testnet",
      deadline: "April 30, 2024",
      status: "Upcoming",
      eligibility: "ETH depositors, testnet users",
      participants: "44.8K",
    },
    {
      id: "13",
      name: "Metis",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Metis Andromeda rewards",
      allocation: "120M METIS",
      requirements: "Use Metis dApps, minimum 3 transactions",
      deadline: "March 26, 2024",
      status: "Active",
      eligibility: "dApp users, traders",
      participants: "23.1K",
    },
    {
      id: "14",
      name: "Polygon zkEVM",
      image: "https://images.unsplash.com/photo-1642790551169-99f9b37d6e6f?w=800&auto=format&fit=crop&q=60",
      description: "Polygon zkEVM beta rewards",
      allocation: "350M MATIC",
      requirements: "Bridge assets, use zkEVM dApps",
      deadline: "April 12, 2024",
      status: "Active",
      eligibility: "Bridge users, dApp users",
      participants: "47.6K",
    },
    {
      id: "15",
      name: "Optimism",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Optimism Bedrock upgrade rewards",
      allocation: "220M OP",
      requirements: "Stake OP, participate in governance",
      deadline: "April 18, 2024",
      status: "Upcoming",
      eligibility: "Stakers, governance participants",
      participants: "39.4K",
    },
    {
      id: "16",
      name: "dYdX v4",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "dYdX v4 chain launch rewards",
      allocation: "400M DYDX",
      requirements: "Trade on dYdX v4, minimum volume $5000",
      deadline: "March 24, 2024",
      status: "Active",
      eligibility: "Traders, liquidity providers",
      participants: "52.8K",
    },
    {
      id: "17",
      name: "Fuel Network",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Fuel Network beta program",
      allocation: "180M FUEL",
      requirements: "Run a node, participate in testnet",
      deadline: "April 22, 2024",
      status: "Upcoming",
      eligibility: "Node operators, developers",
      participants: "31.2K",
    },
    {
      id: "18",
      name: "Berachain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Berachain ecosystem rewards",
      allocation: "300M BERA",
      requirements: "Participate in testnet activities",
      deadline: "April 15, 2024",
      status: "Active",
      eligibility: "Testnet participants",
      participants: "43.7K",
    },
    {
      id: "19",
      name: "Kakarot",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Kakarot ZK rollup rewards",
      allocation: "150M KKT",
      requirements: "Deploy contracts, test ZK proofs",
      deadline: "March 29, 2024",
      status: "Active",
      eligibility: "Developers, testers",
      participants: "25.9K",
    },
    {
      id: "20",
      name: "Eigen Layer",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Eigen Layer staking rewards",
      allocation: "250M EIGEN",
      requirements: "Stake ETH in Eigen Layer",
      deadline: "April 28, 2024",
      status: "Upcoming",
      eligibility: "ETH stakers",
      participants: "36.3K",
    },
    {
      id: "21",
      name: "Starkware",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Starkware ecosystem incentives",
      allocation: "320M STARK",
      requirements: "Use StarkEx platforms, trade on dYdX",
      deadline: "April 3, 2024",
      status: "Active",
      eligibility: "Platform users, traders",
      participants: "41.5K",
    },
    {
      id: "22",
      name: "Aztec Network",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Aztec Connect privacy rewards",
      allocation: "200M AZTEC",
      requirements: "Use Aztec Connect bridge",
      deadline: "March 27, 2024",
      status: "Active",
      eligibility: "Privacy protocol users",
      participants: "28.4K",
    },
    {
      id: "23",
      name: "Manta Network",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Manta Network ZK rewards",
      allocation: "280M MANTA",
      requirements: "Test ZK applications, provide feedback",
      deadline: "April 17, 2024",
      status: "Upcoming",
      eligibility: "Testers, developers",
      participants: "34.8K",
    },
    {
      id: "24",
      name: "Penumbra",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Penumbra privacy protocol rewards",
      allocation: "180M PEN",
      requirements: "Participate in testnet, run validators",
      deadline: "April 7, 2024",
      status: "Active",
      eligibility: "Validators, testnet users",
      participants: "22.6K",
    },
    {
      id: "25",
      name: "Eclipse",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description: "Eclipse Solana rollup rewards",
      allocation: "240M ECLIPSE",
      requirements: "Deploy Solana contracts on Eclipse",
      deadline: "April 23, 2024",
      status: "Upcoming",
      eligibility: "Solana developers",
      participants: "32.1K",
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
                Stay updated with the latest airdrops from promising crypto projects. Track requirements, deadlines, and
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
                <h3 className="text-xl font-bold mb-2">Check Eligibility</h3>
                <p className="text-gray-400">
                  Please look over the requirements and make sure you meet the criteria for participation.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-fuchsia-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Tasks</h3>
                <p className="text-gray-400">
                  Follow the project guidelines and complete the required tasks before the deadline.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Timer className="h-12 w-12 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Wait for Distribution</h3>
                <p className="text-gray-400">Stay updated and wait for the official token distribution announcement.</p>
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
                <DropdownMenuContent className="bg-black/90 border-white/10">
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
                <DropdownMenuContent className="bg-black/90 border-white/10">
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
                        <Gift className="h-4 w-4 text-violet-500" />
                        <span className="text-white line-clamp-1">Allocation:</span>
                        <span className="text-gray-400">{airdrop.allocation}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Info className="h-4 w-4 text-fuchsia-500" />
                        <span className="text-white line-clamp-1">Requirements:</span>
                        <span className="text-gray-400">{airdrop.requirements}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-pink-500" />
                        <span className="text-white line-clamp-1">Deadline:</span>
                        <span className="text-gray-400">{airdrop.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-violet-500" />
                        <span className="text-white line-clamp-1">Participants:</span>
                        <span className="text-gray-400">{airdrop.participants}</span>
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
          <p>© 2024 NoteDrop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

