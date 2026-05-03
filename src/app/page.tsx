"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Moon, Sun, Filter } from "lucide-react";
import { useTheme } from "next-themes";
import { tools, categories, pricingFilters, AITool } from "@/lib/data";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [pricing, setPricing] = useState("all");
  const { theme, setTheme } = useTheme();

  const filtered = useMemo(() => {
    return tools.filter(t => {
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                          t.description.toLowerCase().includes(search.toLowerCase()) ||
                          t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      const matchCat = category === "all" || t.category === category;
      const matchPrice = pricing === "all" || t.pricing === pricing;
      return matchSearch && matchCat && matchPrice;
    });
  }, [search, category, pricing]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900 transition-colors duration-300">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-slate-200 dark:border-dark-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">AI</div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">NavHub Pro</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-dark-800 transition">
              {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <button className="hidden md:flex px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-full hover:bg-primary-700 transition shadow-lg shadow-primary-500/25">
              提交工具
            </button>
          </div>
        </div>
      </header>

      {/* Hero & Search */}
      <section className="pt-20 pb-12 px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            发现 <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">下一代 AI 生产力</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            经过实测验证的全球优质 AI 工具库。场景化推荐、价格透明、独家折扣，帮你精准匹配需求。
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors" />
            <input
              type="text"
              placeholder="搜索工具名称、功能或标签..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-dark-700 bg-white/80 dark:bg-dark-900/80 backdrop-blur shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-base"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 mb-10 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === cat.id ? 'bg-primary-600 text-white shadow-md shadow-primary-500/30' : 'bg-white dark:bg-dark-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700'}`}>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-dark-800/50 px-3 py-1.5 rounded-full border border-slate-200 dark:border-dark-700">
            <Filter className="w-4 h-4" />
            <select value={pricing} onChange={(e) => setPricing(e.target.value)} className="bg-transparent outline-none cursor-pointer">
              {pricingFilters.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {category === 'all' ? '热门推荐' : `${categories.find(c => c.id === category)?.label}`}
          </h2>
          <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-dark-800 px-3 py-1 rounded-full">
            {filtered.length} 个工具
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tool, i) => <ToolCard key={tool.id} tool={tool} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-2xl">
            <p className="text-slate-500 dark:text-slate-400">未找到匹配工具，请尝试其他关键词或筛选条件</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-dark-800 bg-white/50 dark:bg-dark-900/50 backdrop-blur py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© 2026 AI NavHub Pro. 联盟链接已明确标注，数据仅供参考。</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-primary-600 transition">关于我们</a>
            <a href="#" className="hover:text-primary-600 transition">提交工具</a>
            <a href="#" className="hover:text-primary-600 transition">隐私政策</a>
          </div>
        </div>
      </footer>
    </main>
  );
}