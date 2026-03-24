import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { Project } from '../data/projects';

const FILTERS = ['All', 'Film', 'Photography', 'Brand'];

export default function WorksGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeFilter === 'Film') return ['Short Film', 'Documentary', 'Showreel'].includes(p.category);
        if (activeFilter === 'Photography') return p.category === 'Photography';
        if (activeFilter === 'Brand') return ['Brand Content', 'Event Coverage'].includes(p.category);
        return true;
      });

  return (
    <>
      <section id="works" className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-4 block">
                Selected Works
              </span>
              <h2 className="text-6xl md:text-8xl leading-none">The Archive</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 border rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-accent text-ink border-accent'
                      : 'border-paper/20 hover:border-accent/50 hover:text-accent'
                  }`}
                  data-cursor-hover
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative aspect-[4/5] overflow-hidden bg-ink cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                data-cursor-label="View"
              >
                <motion.img
                  layoutId={`project-image-${project.id}`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                  style={{
                    filter: hoveredId === project.id
                      ? 'grayscale(20%) brightness(0.8)'
                      : 'grayscale(100%) brightness(0.45)',
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                />

                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-paper/50">
                    {project.year}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-3xl leading-none mb-3">{project.title}</h3>
                  <p className="text-sm text-paper/50 mb-4 max-w-xs">{project.description}</p>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-accent/80">
                    View Project <ArrowUpRight size={14} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
