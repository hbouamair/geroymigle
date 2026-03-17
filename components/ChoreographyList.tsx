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

const getYouTubeVideoId = (url: string): string => {
  const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
  return match && match[2].length === 11 ? match[2] : "";
};

const getYouTubeEmbedUrl = (url: string) => `https://www.youtube.com/embed/${getYouTubeVideoId(url)}`;
const getYouTubeThumbnail = (url: string) => `https://img.youtube.com/vi/${getYouTubeVideoId(url)}/maxresdefault.jpg`;

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
  if (level.includes("Advanced")) return "text-rose bg-rose/10 border-rose/15";
  if (level.includes("Intermediate")) return "text-gold bg-gold/10 border-gold/15";
  return "text-violet-400 bg-violet-500/10 border-violet-500/15";
};

export default function ChoreographyList() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="section-space relative overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-30 pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-18"
        >
          <div className="flex items-center gap-3 mb-5">
            <Music className="w-6 h-6 text-gold/60" />
            <span className="tag">Choreographies</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight gradient-text mb-4">
            Choreographies
          </h2>
          <p className="text-base text-cream/45 max-w-xl">
            Learn and perform our signature choreographies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {choreographies.map((choreo, index) => {
            const isPlaying = playingVideo === index;
            return (
              <motion.div
                key={`${choreo.title}-${choreo.artist}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.6 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden card-lift h-full">
                  {isPlaying ? (
                    <div className="relative w-full aspect-video bg-surface-100">
                      <iframe
                        src={`${getYouTubeEmbedUrl(choreo.youtubeUrl)}?autoplay=1&rel=0&modestbranding=1`}
                        title={choreo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative w-full aspect-video overflow-hidden cursor-pointer"
                      onClick={() => setPlayingVideo(index)}
                      style={{
                        backgroundImage: `url(${getYouTubeThumbnail(choreo.youtubeUrl)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-surface/40 group-hover:bg-surface/20 transition-colors duration-500" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-5 h-5 text-cream fill-cream ml-0.5" />
                        </div>
                      </div>

                      {/* Level Badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide border ${getLevelColor(choreo.level)}`}>
                          {choreo.level}
                        </span>
                      </div>

                      {/* Duration */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface/60 backdrop-blur-md text-cream/60 text-[10px] font-medium border border-cream/5">
                          <Clock className="w-2.5 h-2.5" />
                          {choreo.duration}
                        </span>
                      </div>
                    </div>
                  )}

                  {!isPlaying && (
                    <div className="p-4">
                      <h3 className="font-display font-bold text-base text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                        {choreo.title}
                      </h3>
                      <p className="text-xs text-cream/40">{choreo.artist}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-gold/60" />
              <h3 className="font-display font-bold text-lg text-cream">
                {choreographies.length} Choreographies
              </h3>
            </div>
            <p className="text-xs text-cream/40">
              From Intermediate to Advanced levels
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
