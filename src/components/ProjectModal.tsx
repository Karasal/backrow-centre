import { useEffect } from 'react';
import { motion } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="min-h-screen py-12 px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={onClose}
          className="fixed top-6 right-6 z-[101] w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-all duration-300"
          data-cursor-hover
        >
          <X size={20} />
        </motion.button>

        <div className="max-w-5xl mx-auto">
          {/* Hero image */}
          <motion.div
            layoutId={`project-image-${project.id}`}
            className="aspect-video mb-12 overflow-hidden rounded-sm"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <span className="w-6 h-px bg-paper/20" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-paper/40">
                {project.year}
              </span>
              {project.client !== 'Personal Project' && (
                <>
                  <span className="w-6 h-px bg-paper/20" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-paper/40">
                    Client: {project.client}
                  </span>
                </>
              )}
            </div>

            <h2 className="text-6xl md:text-8xl leading-[0.9] mb-8">
              {project.title}
            </h2>

            <p className="text-xl leading-relaxed font-light text-paper/70 mb-12 max-w-3xl">
              {project.fullDescription}
            </p>

            {/* Tools */}
            <div className="mb-12">
              <span className="text-[10px] font-mono uppercase tracking-widest text-paper/30 mb-4 block">
                Tools Used
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 border border-paper/10 rounded-full text-xs font-mono text-paper/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-paper/30 mb-6 block">
                  Gallery
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {project.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="aspect-[4/3] overflow-hidden rounded-sm group"
                      data-cursor-label="View"
                    >
                      <img
                        src={img}
                        alt={`${project.title} gallery ${idx + 1}`}
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-8 border-t border-paper/10"
            >
              <button
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-paper/40 hover:text-accent transition-colors"
                data-cursor-hover
              >
                <ArrowUpRight size={14} className="rotate-[225deg]" />
                Back to Archive
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
