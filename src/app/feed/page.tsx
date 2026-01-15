'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, MapPin, Calendar, Tag, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';
import { builderFeed } from '../lib/data';

type VideoId = string;

export default function FeedPage() {
  const [activeVideo, setActiveVideo] = useState<VideoId | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const currentVideo = builderFeed.videos.find(v => v.id === activeVideo);
  const currentIndex = builderFeed.videos.findIndex(v => v.id === activeVideo);

  const navigateVideo = (direction: 'prev' | 'next') => {
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0) newIndex = builderFeed.videos.length - 1;
    if (newIndex >= builderFeed.videos.length) newIndex = 0;
    setActiveVideo(builderFeed.videos[newIndex].id);
  };

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Header */}
      <header className="py-8 border-b border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="nav-item">
              ← RETURN TO CORE
            </Link>
            <span className="annotation-cyan font-mono text-xs">
              // RAW INTELLIGENCE FEED
            </span>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="blueprint-heading mb-4">{builderFeed.title}</h1>
            <p className="blueprint-subheading">{builderFeed.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builderFeed.videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveVideo(video.id)}
                className="blueprint-card-hover cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-[#0D0D0D]">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 flex items-center justify-center group-hover:bg-[#00D4FF]/40 transition-colors">
                      <Play size={32} className="text-[#00D4FF] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#080808]/80 px-2 py-1 rounded">
                    <span className="font-mono text-xs text-white">{video.duration}</span>
                  </div>
                </div>

                {/* Video Info */}
                <div>
                  <h3 className="font-mono font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[#64748B] mb-3 line-clamp-2">{video.description}</p>
                  
                  {/* Meta */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="flex items-center gap-1 text-xs font-mono text-[#64748B]">
                      <MapPin size={12} />
                      {video.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-[#64748B]">
                      <Calendar size={12} />
                      {video.date}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {video.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[rgba(26,58,95,0.3)] text-[#00D4FF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && currentVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#080808]/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#00D4FF] transition-colors"
            >
              <span className="font-mono text-sm">CLOSE [ESC]</span>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video bg-[#0D0D0D] rounded-lg overflow-hidden border border-[rgba(26,58,95,0.4)]">
              {/* Data Overlay */}
              <div className="absolute top-4 left-4 z-10 flex gap-4">
                <span className="video-data-overlay flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  REC
                </span>
                <span className="video-data-overlay font-mono">
                  LOC: {currentVideo.location.toUpperCase().replace(' ', '_')}
                </span>
                <span className="video-data-overlay font-mono">
                  TYPE: RAW_LOG
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 flex gap-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="video-data-overlay hover:bg-[#00D4FF]/20 transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>

              {/* Data Bottom Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end">
                <div className="flex gap-4">
                  <span className="video-data-overlay font-mono">
                    TIMESTAMP: {currentVideo.date}
                  </span>
                  <span className="video-data-overlay font-mono">
                    DUR: {currentVideo.duration}
                  </span>
                </div>
                <div className="flex gap-2">
                  {currentVideo.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="video-data-overlay font-mono"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>
              </div>

              {/* YouTube Embed */}
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0`}
                title={currentVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => navigateVideo('prev')}
                className="flex items-center gap-2 text-[#64748B] hover:text-[#00D4FF] transition-colors"
              >
                <ChevronLeft size={20} />
                <span className="font-mono text-sm">PREV</span>
              </button>

              <div className="text-center">
                <h3 className="font-mono font-bold text-white">{currentVideo.title}</h3>
                <p className="text-sm text-[#64748B]">{currentVideo.description}</p>
              </div>

              <button
                onClick={() => navigateVideo('next')}
                className="flex items-center gap-2 text-[#64748B] hover:text-[#00D4FF] transition-colors"
              >
                <span className="font-mono text-sm">NEXT</span>
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 flex gap-1">
              {builderFeed.videos.map((video, idx) => (
                <div
                  key={video.id}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    video.id === activeVideo
                      ? 'bg-[#00D4FF]'
                      : 'bg-[rgba(26,58,95,0.3)]'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bigward" className="nav-item">
              BIG WARD CASE →
            </Link>
            <Link href="/palenque" className="nav-item">
              PALENQUE CASE →
            </Link>
            <Link href="/repository" className="nav-item">
              REPOSITORY →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
