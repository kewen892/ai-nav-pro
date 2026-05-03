import { notFound } from "next/navigation";
import { tools } from "@/lib/data";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";

// 生成静态路径（SEO优化）
export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

// 生成页面元数据（SEO）
export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  return {
    title: `${tool?.name} | AI NavHub Pro`,
    description: tool?.description,
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" /> 返回工具列表
        </a>

        {/* 工具卡片 */}
        <div className="glass-card rounded-3xl p-8">
          {/* 头部 */}
          <div className="flex items-start gap-6 mb-8">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tool.logoGradient} flex items-center justify-center text-white font-bold text-3xl shadow-lg`}>
              {tool.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{tool.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" /> {tool.rating}
                </span>
                <span className="text-slate-500">•</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  tool.pricing === 'free' ? 'bg-green-100 text-green-700' :
                  tool.pricing === 'freemium' ? 'bg-blue-100 text-blue-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {tool.pricing === 'free' ? '完全免费' : tool.pricing === 'freemium' ? '免费试用' : '付费专业版'}
                </span>
              </div>
            </div>
          </div>

          {/* 描述 */}
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            {tool.description}
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tool.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm rounded-lg">
                #{tag}
              </span>
            ))}
          </div>

          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition shadow-lg shadow-primary-500/25"
            >
              <ExternalLink className="w-5 h-5" />
              访问官网 {tool.affiliateUrl.includes('ref=') ? '(含独家折扣)' : ''}
            </a>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 py-4 px-6 rounded-xl font-semibold text-center transition"
            >
              直达原版链接
            </a>
          </div>

          {/* 联盟披露 */}
          <p className="text-xs text-slate-400 mt-6 text-center">
            * 通过本站链接购买可能获得佣金，不影响您的价格，感谢支持！
          </p>
        </div>
      </div>
    </main>
  );
}