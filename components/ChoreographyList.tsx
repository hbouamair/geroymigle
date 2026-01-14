"use client";

import { motion } from "framer-motion";
import { Music, Clock, TrendingUp, Play } from "lucide-react";
import { useState } from "react";

interface Choreography {
  title: string;
  artist: string;
  duration: string;
  level: string;
  youtubeUrl: string;
}

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// Function to get YouTube embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return `https://www.youtube.com/embed/${videoId}`;
};

// Function to get YouTube thumbnail URL
const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const choreographies: Choreography[] = [
  { title: "Te Extraño", artist: "Xtreme", duration: "1:58 s", level: "Advanced", youtubeUrl: "https://www.youtube.com/watch?v=GFj6_FGDMYA" },
  { title: "Drama", artist: "Charles Luis", duration: "2:15 s", level: "Advanced", youtubeUrl: "https://www.youtube.com/watch?v=9Hi8lmQFUsQ" },
  { title: "Mentiras", artist: "Dani J ft. Kewin Cosmos", duration: "2:44 s", level: "Intermediate/Advanced", youtubeUrl: "https://www.youtube.com/watch?v=p2Nr7D0Ba2A" },
  { title: "A los Pies", artist: "Señorito", duration: "2:25 s", level: "Advanced", youtubeUrl: "https://www.youtube.com/watch?v=nTl11k3NPz8" },
  { title: "Gritos De Esperanza", artist: "Karlos Rosé", duration: "2:41 s", level: "Intermediate", youtubeUrl: "https://www.youtube.com/watch?v=xFtL-TvAuGs" },
  { title: "Religión", artist: "Chantel", duration: "2:44 s", level: "Intermediate - Advanced", youtubeUrl: "https://www.youtube.com/watch?v=VmveMjWXttc" },
  { title: "No One's Been As Close", artist: "Johnny Sky", duration: "2:21 s", level: "Advanced", youtubeUrl: "https://www.youtube.com/watch?v=Mc4a9WAhSh8" },
  { title: "Dueño Eterno", artist: "Chelion", duration: "1:51 s", level: "Intermediate - Advanced", youtubeUrl: "https://www.youtube.com/watch?v=RZX3NMzuSDo" },
  { title: "Señal", artist: "Pinto Picasso", duration: "2:26 s", level: "Intermediate - Advanced", youtubeUrl: "https://www.youtube.com/watch?v=1a_BX08AZAs" },
  { title: "Boomerang", artist: "Romeo Santos", duration: "2:28 s", level: "Intermediate - Advanced", youtubeUrl: "https://www.youtube.com/watch?v=JomHorFXEpI" },
  { title: "Veneno", artist: "Prince Royce - Gustavo Lima", duration: "1:54 s", level: "Intermediate", youtubeUrl: "https://www.youtube.com/watch?v=XQ46HSDahdM" },
  { title: "Sus Huellas", artist: "Romeo Santos", duration: "2:00 s", level: "Intermediate - Advanced", youtubeUrl: "https://www.youtube.com/watch?v=9L053EMg4kY" },
  { title: "Can't Find Love", artist: "Jean", duration: "1:48 s", level: "Intermediate", youtubeUrl: "https://www.youtube.com/watch?v=RSeJGPTc27o" },
];

const getLevelColor = (level: string) => {
  if (level.includes("Advanced")) {
    return "from-red-500 to-pink-500";
  } else if (level.includes("Intermediate")) {
    return "from-yellow-500 to-orange-500";
  }
  return "from-blue-500 to-cyan-500";
};

export default function ChoreographyList() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <Music className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mr-2 sm:mr-3" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold">
              <span className="gradient-text">CHOREOGRAPHIES</span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Learn and perform our signature choreographies
          </p>
        </motion.div>

        {/* Choreography Grid - Modern 2026 Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {choreographies.map((choreo, index) => {
            const isPlaying = playingVideo === index;
            const embedUrl = getYouTubeEmbedUrl(choreo.youtubeUrl);
            const thumbnailUrl = getYouTubeThumbnail(choreo.youtubeUrl);
            
            return (
              <motion.div
                key={`${choreo.title}-${choreo.artist}`}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/80 via-purple-950/60 to-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 hover:border-white/20 hover:shadow-purple-500/20">
                  {/* Elegant Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getLevelColor(choreo.level)} opacity-0 group-hover:opacity-5 transition-opacity duration-700 z-0`}
                  />
                  
                  {/* Video Player Section */}
                  {isPlaying ? (
                    <div className="relative w-full aspect-video bg-black overflow-hidden">
                      <iframe
                        src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                        title={choreo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  ) : (
                    <div 
                      className="relative w-full aspect-video overflow-hidden cursor-pointer group/video"
                      onClick={() => setPlayingVideo(index)}
                      style={{
                        backgroundImage: `url(${thumbnailUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      {/* Elegant Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/10 transition-all duration-500" />
                      
                      {/* Modern Play Button - 2026 Style (Smaller) */}
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center shadow-xl shadow-purple-500/50 border-2 border-white/30 backdrop-blur-md">
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-0.5" />
                          </div>
                          {/* Animated Ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-purple-400/50"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </div>
                      
                      {/* Level Badge - Top Right */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${getLevelColor(choreo.level)} text-white text-xs font-bold tracking-wide shadow-lg backdrop-blur-sm border border-white/20`}>
                          {choreo.level}
                        </div>
                      </div>
                      
                      {/* Duration Badge - Top Left */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center space-x-1.5 border border-white/20 shadow-lg">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{choreo.duration}</span>
                        </div>
                      </div>
                      
                      {/* Title Overlay - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5 sm:p-6 z-10">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-1.5 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                          {choreo.title}
                        </h3>
                        <p className="text-white/80 text-base sm:text-lg font-medium">
                          {choreo.artist}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Card Content Section - Modern 2026 Design */}
                  {!isPlaying && (
                    <div className="relative z-10 p-5 sm:p-6 space-y-4">
                      {/* Title Section */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-500 leading-tight" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                          {choreo.title}
                        </h3>
                        <p className="text-white/70 text-base sm:text-lg font-medium">
                          {choreo.artist}
                        </p>
                      </div>

                      {/* Info Section */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${getLevelColor(choreo.level)}/20 border border-white/10 text-white text-xs font-semibold`}>
                          {choreo.level}
                        </div>
                        <div className="text-white/60 text-xs sm:text-sm flex items-center space-x-1.5 font-medium">
                          <Clock className="w-4 h-4" />
                          <span>{choreo.duration}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Elegant Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center px-4"
        >
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                {choreographies.length} Choreographies Available
              </h3>
            </div>
            <p className="text-white/70 text-base sm:text-lg">
              From Intermediate to Advanced levels, learn at your own pace
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

