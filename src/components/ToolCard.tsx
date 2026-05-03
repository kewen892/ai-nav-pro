"use client";
import { motion } from "framer-motion";
import { Star, ExternalLink, ArrowUpRight } from "lucide-react";
import { AITool } from "@/lib/data";

export default function ToolCard({ tool, index }: { tool: AITool; index: number }) {
  return (
    <motion.a
      href={`/tools/${tool.slug}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group glass-card rounded-2xl p-5 flex flex-col h-full hover:shadow-xl hover:shadow-primary-500/10 relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${tool.logoGradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
      
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.logoGradient} flex items-center justify-center text-white font-bold text-xl shadow-md`}>
          {tool.name.charAt(0)}
        </div>
        <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-dark-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-dark-700">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{tool.rating}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {tool.name}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
        {tool.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-400 text-xs rounded-md border border-slate-200 dark:border-dark-700">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-200 dark:border-dark-700">
        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
          tool.pricing === 'free' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
          tool.pricing === 'freemium' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
          'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
        }`}>
          {tool.pricing === 'free' ? '免费' : tool.pricing === 'freemium' ? '免费试用' : '付费'}
        </span>
        <div className="flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:gap-2 transition-all">
          查看详情 <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
}