import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pickaxe, Play, Mail, User, MessageSquare, Clock, Award } from "lucide-react"
import VideoCard from "@/components/video-card"
import MinecraftButton from "@/components/minecraft-button"
import PixelDivider from "@/components/pixel-divider"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#8BAF9C] bg-opacity-10 scroll-smooth">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/bgvideo0.mp4"
            autoPlay
            loop
            muted
            className="object-cover h-full w-full opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8BAF9C]/30"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="minecraft-text mb-6 text-4xl md:text-6xl font-bold tracking-wider text-[#96ffb6]">
            DAENIOR <span className="text-[#d4fbd9]">NORONHA</span>
          </div>

          <h2 className="text-xl md:text-2xl mb-8 max-w-2xl font-medium text-[#bdf7d0]">
            Professional YouTube Video Editing with Pixel-Perfect Precision
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <MinecraftButton href="#portfolio" variant="primary">
              View My Work
            </MinecraftButton>
            <MinecraftButton href="#contact" variant="secondary">
              Hire Me
            </MinecraftButton>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="#2E3B2F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#E9DDC7] relative">
        <div className="container px-4 md:px-6">
          <h2 className="minecraft-text text-3xl md:text-4xl font-bold mb-12 text-center text-[#3A5F45]">ABOUT ME</h2>

          <PixelDivider className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 border-8 border-[#5C8D62] border-dashed rotate-3"></div>
              <div className="absolute inset-0 -rotate-3 bg-[#8BAF9C] p-4">
                <div className="h-full w-full relative overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Video Editor" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block bg-[#5C8D62] px-4 py-2 text-white font-medium rounded">
                <User className="inline-block mr-2 h-5 w-5" />
                Daenior Noronha
              </div>

              <h3 className="text-2xl font-bold text-[#3A5F45]">Crafting Digital Stories Block by Block</h3>

              <p className="text-[#2E3B2F] leading-relaxed">
                I specialize in creating engaging YouTube content with a unique style that captures viewers' attention.
                With over 5 years of experience editing for top Minecraft content creators, I've developed a keen eye
                for pacing, visual effects, and storytelling that keeps audiences watching.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center">
                  <div className="bg-[#5C8D62] p-2 rounded-md mr-3">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#3A5F45]">5+ Years</div>
                    <div className="text-sm text-[#2E3B2F]">Experience</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#5C8D62] p-2 rounded-md mr-3">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#3A5F45]">200+</div>
                    <div className="text-sm text-[#2E3B2F]">Videos Edited</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#5C8D62] p-2 rounded-md mr-3">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#3A5F45]">50M+</div>
                    <div className="text-sm text-[#2E3B2F]">Total Views</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#5C8D62] p-2 rounded-md mr-3">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#3A5F45]">25+</div>
                    <div className="text-sm text-[#2E3B2F]">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-[#8BAF9C]/20 relative">
        <div className="container px-4 md:px-6">
          <h2 className="minecraft-text text-3xl md:text-4xl font-bold mb-12 text-center text-[#3A5F45]">MY WORK</h2>

          <PixelDivider className="mb-12" />

          <Tabs defaultValue="minecraft" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#5C8D62]/20">
              <TabsTrigger
                value="minecraft"
                className="data-[state=active]:bg-[#5C8D62] data-[state=active]:text-white"
              >
                Minecraft
              </TabsTrigger>
              <TabsTrigger value="gaming" className="data-[state=active]:bg-[#5C8D62] data-[state=active]:text-white">
                Gaming
              </TabsTrigger>
              <TabsTrigger value="vlogs" className="data-[state=active]:bg-[#5C8D62] data-[state=active]:text-white">
                Vlogs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="minecraft" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard
                  title="Epic Minecraft Survival Series"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="1.2M"
                  duration="15:42"
                  client="MinecraftMaster"
                />
                <VideoCard
                  title="Redstone Mansion Build"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="850K"
                  duration="22:18"
                  client="RedstoneWizard"
                />
                <VideoCard
                  title="Minecraft Hardcore Challenge"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="2.4M"
                  duration="18:05"
                  client="SurvivalPro"
                />
                <VideoCard
                  title="Ultimate Mob Farm Tutorial"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="1.8M"
                  duration="25:30"
                  client="FarmingGuru"
                />
                <VideoCard
                  title="Minecraft But Everything Is OP"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="3.2M"
                  duration="12:45"
                  client="CrazyMods"
                />
                <VideoCard
                  title="100 Days in Minecraft Hardcore"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="4.5M"
                  duration="32:10"
                  client="EpicGamer"
                />
              </div>
            </TabsContent>

            <TabsContent value="gaming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard
                  title="Fortnite Victory Royale"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="950K"
                  duration="14:22"
                  client="FortniteKing"
                />
                <VideoCard
                  title="Among Us Funny Moments"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="1.5M"
                  duration="18:33"
                  client="ImpostorPro"
                />
                <VideoCard
                  title="Valorant Ace Compilation"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="780K"
                  duration="10:15"
                  client="AimMaster"
                />
              </div>
            </TabsContent>

            <TabsContent value="vlogs" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard
                  title="Day in the Life of a Gamer"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="420K"
                  duration="22:45"
                  client="GamerLife"
                />
                <VideoCard
                  title="Gaming Setup Tour 2023"
                  thumbnail="/placeholder.svg?height=180&width=320"
                  views="890K"
                  duration="15:18"
                  client="SetupMaster"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <MinecraftButton href="https://www.youtube.com" variant="primary" external>
              View More on YouTube
            </MinecraftButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#E9DDC7] relative">
        <div className="container px-4 md:px-6">
          <h2 className="minecraft-text text-3xl md:text-4xl font-bold mb-12 text-center text-[#3A5F45]">
            MY SERVICES
          </h2>

          <PixelDivider className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-4 border-[#5C8D62] overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-2 bg-[#5C8D62]"></div>
              <CardContent className="pt-6 pb-8 px-6">
                <div className="w-16 h-16 mb-6 bg-[#5C8D62]/20 rounded-md flex items-center justify-center">
                  <Pickaxe className="h-8 w-8 text-[#5C8D62]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#3A5F45]">Video Editing</h3>
                <p className="text-[#2E3B2F] mb-6">
                  Full video editing services including cuts, transitions, effects, color grading, and sound design.
                </p>
                <ul className="space-y-2">
                  {[
                    "Cinematic cuts",
                    "Custom transitions",
                    "Color correction",
                    "Audio enhancement",
                    "Motion graphics",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-3 h-3 bg-[#5C8D62] mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-[#5C8D62] overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-2 bg-[#5C8D62]"></div>
              <CardContent className="pt-6 pb-8 px-6">
                <div className="w-16 h-16 mb-6 bg-[#5C8D62]/20 rounded-md flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-[#5C8D62]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#3A5F45]">Thumbnail Design</h3>
                <p className="text-[#2E3B2F] mb-6">
                  Eye-catching thumbnails that increase click-through rates and match your channel's style.
                </p>
                <ul className="space-y-2">
                  {["Custom graphics", "Text overlays", "Character renders", "Background design", "A/B testing"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-3 h-3 bg-[#5C8D62] mr-3"></div>
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-[#5C8D62] overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-2 bg-[#5C8D62]"></div>
              <CardContent className="pt-6 pb-8 px-6">
                <div className="w-16 h-16 mb-6 bg-[#5C8D62]/20 rounded-md flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-[#5C8D62]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#3A5F45]">Channel Optimization</h3>
                <p className="text-[#2E3B2F] mb-6">
                  Strategic advice and implementation to grow your channel and increase engagement.
                </p>
                <ul className="space-y-2">
                  {[
                    "SEO optimization",
                    "Content strategy",
                    "Channel art design",
                    "Analytics review",
                    "Growth planning",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-3 h-3 bg-[#5C8D62] mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-[#8BAF9C]/20 relative">
        <div className="container px-4 md:px-6">
          <h2 className="minecraft-text text-3xl md:text-4xl font-bold mb-12 text-center text-[#3A5F45]">
            TESTIMONIALS
          </h2>

          <PixelDivider className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "MinecraftMaster",
                role: "1.2M Subscribers",
                image: "/placeholder.svg?height=48&width=48",
                quote:
                  "Working with Daenior has been a game-changer for my channel. The editing quality is top-notch, and my viewers constantly comment on how professional my videos look now.",
              },
              {
                name: "RedstoneWizard",
                role: "850K Subscribers",
                image: "/placeholder.svg?height=48&width=48",
                quote:
                  "The attention to detail is incredible. Daenior understands the Minecraft community and knows exactly how to highlight the most exciting moments in my builds.",
              },
              {
                name: "SurvivalPro",
                role: "2.4M Subscribers",
                image: "/placeholder.svg?height=48&width=48",
                quote:
                  "Since working with Daenior, my channel has grown by 40%. The thumbnails are eye-catching, and the editing style keeps viewers watching until the end.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white border-4 border-[#5C8D62] overflow-hidden">
                <CardContent className="pt-6 pb-8 px-6">
                  <div className="flex items-center mb-6">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3A5F45]">{testimonial.name}</h3>
                      <p className="text-sm text-[#5C8D62]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-[#2E3B2F] italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#E9DDC7] relative">
        <div className="container px-4 md:px-6">
          <h2 className="minecraft-text text-3xl md:text-4xl font-bold mb-12 text-center text-[#3A5F45]">
            GET IN TOUCH
          </h2>

          <PixelDivider className="mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#3A5F45]">Let's Work Together</h3>
              <p className="text-[#2E3B2F] mb-8 leading-relaxed">
                Ready to take your YouTube content to the next level? Fill out the form with your project details, and
                I'll get back to you within 24 hours to discuss how we can collaborate.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-[#5C8D62] p-3 rounded-md mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-[#3A5F45]">Email</div>
                    <a href="mailto:contact@craftedits.com" className="text-[#5C8D62] hover:underline">
                      contact@Daenior.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#5C8D62] p-3 rounded-md mr-4">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12L15 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 9L12 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#3A5F45]">Discord</div>
                    <a href="https://discord.gg/craftedits" className="text-[#5C8D62] hover:underline">
                      discord.gg/dae
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#5C8D62] p-3 rounded-md mr-4">
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#3A5F45]">YouTube</div>
                    <a href="https://youtube.com/c/craftedits" className="text-[#5C8D62] hover:underline">
                      youtube.com/c/daenior
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-[#5C8D62] p-6 rounded-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#3A5F45]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border-2 border-[#5C8D62]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C8D62] focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#3A5F45]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border-2 border-[#5C8D62]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C8D62] focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[#3A5F45]">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 border-2 border-[#5C8D62]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C8D62] focus:border-transparent"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#3A5F45]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border-2 border-[#5C8D62]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C8D62] focus:border-transparent resize-vertical"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <div>
                  <MinecraftButton type="submit" variant="primary" className="w-full">
                    Send Message
                  </MinecraftButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E3B2F] text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="minecraft-text text-2xl mb-6 md:mb-0">
              Daenior <span className="text-[#5C8D62]">Noronha</span>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#5C8D62] transition-colors" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-[#5C8D62] transition-colors" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#5C8D62] transition-colors" aria-label="GitHub">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-[#5C8D62] transition-colors" aria-label="YouTube">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>© 2023 Daenior Noronha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
