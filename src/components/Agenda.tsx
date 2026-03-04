import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, BookOpen, Coffee, MapPin, ChevronRight, Download } from 'lucide-react';
import { agendaData, AgendaItem } from '../data/agenda';

const AgendaCard: React.FC<{ item: AgendaItem; index: number }> = ({ item, index }) => {
  const isBreak = item.type === 'break';
  
  const getColorClass = (color?: string) => {
    switch (color) {
      case 'green': return 'bg-[#87D036]';
      case 'teal': return 'bg-[#166572]';
      case 'yellow': return 'bg-[#FFB81C]';
      case 'sky': return 'bg-[#00BBDE]';
      case 'purple': return 'bg-[#61559A]';
      case 'grey': return 'bg-[#BABABA]';
      default: return 'bg-[#87D036]';
    }
  };

  const getLightColorClass = (color?: string) => {
    switch (color) {
      case 'green': return 'bg-[#f3faf0] border-[#87D036]/20';
      case 'teal': return 'bg-[#e8eff1] border-[#166572]/20';
      case 'yellow': return 'bg-[#fff8e8] border-[#FFB81C]/20';
      case 'sky': return 'bg-[#e5f8fc] border-[#00BBDE]/20';
      case 'purple': return 'bg-[#f0eef5] border-[#61559A]/20';
      case 'grey': return 'bg-[#f8f8f8] border-[#BABABA]/20';
      default: return 'bg-[#f3faf0] border-[#87D036]/20';
    }
  };

  const getTextColorClass = (color?: string) => {
    switch (color) {
      case 'green': return 'text-[#87D036]';
      case 'teal': return 'text-[#166572]';
      case 'yellow': return 'text-[#FFB81C]';
      case 'sky': return 'text-[#00BBDE]';
      case 'purple': return 'text-[#61559A]';
      case 'grey': return 'text-[#BABABA]';
      default: return 'text-[#87D036]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`relative mb-3 overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-all hover:shadow-md ${
        isBreak ? 'bg-[#fafaf9]' : ''
      }`}
    >
      {/* Accent Bar */}
      <div 
        className={`absolute left-0 top-0 h-full w-1 ${getColorClass(item.color)}`}
      />

      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-start">
          {/* Time Column */}
          <div className="flex shrink-0 items-center gap-2 md:w-40">
            <Clock className={`h-4 w-4 ${getTextColorClass(item.color)}`} style={{ opacity: 0.6 }} />
            <span className="font-mono text-base font-medium tracking-tight text-[#57534e]">
              {item.time}
            </span>
          </div>

          {/* Content Column */}
          <div className="flex-1">
            <h3 className={`text-xl font-bold tracking-tight ${isBreak ? 'text-[#78716c]' : 'text-[#1c1917]'}`}>
              {item.title}
            </h3>

            {item.details && (
              <div className="mt-2 space-y-1">
                {Array.isArray(item.details) ? (
                  <ul className="space-y-1.5">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#57534e]">
                        <div className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${getColorClass(item.color)}`} style={{ opacity: 0.4 }} />
                        <span className="text-sm leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-snug text-[#57534e]">{item.details}</p>
                )}
              </div>
            )}

            {item.subSessions && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {item.subSessions.map((sub, i) => (
                  <div 
                    key={i} 
                    className={`group rounded-lg border p-4 transition-colors ${getLightColorClass(item.color)}`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      {sub.type === 'Workshop' ? (
                        <BookOpen className={`h-4 w-4 ${getTextColorClass(item.color)}`} />
                      ) : (
                        <Users className={`h-4 w-4 ${getTextColorClass(item.color)}`} />
                      )}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#a8a29e]">
                        {sub.type}
                      </span>
                    </div>
                    <h4 className="text-base font-bold leading-tight text-[#1c1917]">
                      {sub.title}
                    </h4>
                    <div className="mt-1 text-sm leading-snug text-[#57534e]">
                      {Array.isArray(sub.details) ? (
                        <ul className="space-y-1">
                          {sub.details.map((d, j) => (
                            <li key={j} className="flex items-start gap-1.5">
                              <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${getColorClass(item.color)}`} style={{ opacity: 0.3 }} />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{sub.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Icon/Status Column */}
          <div className="hidden shrink-0 md:block">
            {isBreak ? (
              <Coffee className="h-4 w-4 text-[#d6d3d1]" />
            ) : (
              <ChevronRight className={`h-4 w-4 ${getTextColorClass(item.color)}`} style={{ opacity: 0.2 }} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Agenda: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Actions Header */}
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-full bg-[#166572] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#166572]/90 hover:shadow-md active:scale-95"
          >
            <Download className="h-3.5 w-3.5" />
            Save as PDF
          </button>
        </div>

        <div className="bg-[#FDFDFB] p-4 sm:p-8 rounded-2xl">
          {/* Header Section */}
        <header className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex justify-center"
          >
            <img 
              src="https://kineo.com/glide/containers/main/case_studies_images/California-Academy-of-Sciences/cas-case-study-logo-colour-%282%29-%281%29.png/9936d69152671fd92a0849b8f5c14906.png" 
              alt="California Academy of Sciences Logo" 
              className="h-16 w-auto object-contain sm:h-20"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <h1 className="mb-2 text-3xl font-extrabold tracking-tight leading-tight text-[#1c1917] sm:text-4xl lg:text-5xl">
            Climate Education <span className="text-[#87D036]">Agenda</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-snug text-[#78716c]">
            Join us for a day of workshops, panels, and collaborative sessions focused on driving meaningful climate education.
          </p>
        </header>

        {/* Agenda List */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#f5f5f4] md:block" />
          
          <div className="space-y-1">
            {agendaData.map((item, index) => (
              <AgendaCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-[#f5f5f4] pt-6 text-center">
          <p className="text-[11px] text-[#a8a29e]">
            © {new Date().getFullYear()} California Academy of Sciences. All rights reserved.
          </p>
        </footer>
        </div>
      </div>
    </div>
  );
};
