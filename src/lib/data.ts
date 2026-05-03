export interface AITool {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: 'writing' | 'image' | 'video' | 'coding' | 'productivity' | 'voice';
  pricing: 'free' | 'freemium' | 'paid';
  tags: string[];
  url: string;
  affiliateUrl: string;
  rating: number;
  votes: number;
  logoGradient: string;
}

export const tools: AITool[] = [
  {
    id: '1', name: 'ChatGenius Pro', slug: 'chatgenius-pro',
    description: '2026年上下文理解最强的LLM，支持多模态实时交互，适合专业创作者与企业知识库。',
    category: 'writing', pricing: 'freemium', tags: ['LLM', 'Chat', 'Enterprise'],
    url: 'https://example.com', affiliateUrl: 'https://example.com?ref=ainav&utm_source=nav',
    rating: 4.9, votes: 1240, logoGradient: 'from-blue-500 to-cyan-400'
  },
  {
    id: '2', name: 'PixelDream AI', slug: 'pixeldream',
    description: '输入文字秒生成8K超写实图像，支持局部重绘、风格迁移与商业授权导出。',
    category: 'image', pricing: 'paid', tags: ['Image Gen', 'Design', 'Commercial'],
    url: 'https://example.com', affiliateUrl: 'https://example.com?ref=ainav',
    rating: 4.7, votes: 890, logoGradient: 'from-purple-500 to-pink-500'
  },
  {
    id: '3', name: 'CodePilot X', slug: 'codepilot-x',
    description: '深度集成IDE的编程助手，自动补全、重构、Debug一体化，支持全栈框架。',
    category: 'coding', pricing: 'paid', tags: ['Coding', 'IDE', 'DevTools'],
    url: 'https://example.com', affiliateUrl: 'https://example.com?ref=ainav',
    rating: 4.8, votes: 2100, logoGradient: 'from-green-500 to-emerald-400'
  },
  {
    id: '4', name: 'VoiceSynth Studio', slug: 'voicesynth',
    description: 'AI拟真语音克隆，支持多语言情感调节，播客与视频配音效率提升10倍。',
    category: 'voice', pricing: 'freemium', tags: ['Audio', 'Voice Cloning', 'Podcast'],
    url: 'https://example.com', affiliateUrl: 'https://example.com?ref=ainav',
    rating: 4.6, votes: 650, logoGradient: 'from-orange-400 to-red-500'
  },
  {
    id: '5', name: 'TaskFlow AI', slug: 'taskflow',
    description: '智能工作流自动化平台，连接Notion/Slack/Jira，自动执行重复任务。',
    category: 'productivity', pricing: 'free', tags: ['Automation', 'Workflow', 'SaaS'],
    url: 'https://example.com', affiliateUrl: 'https://example.com?ref=ainav',
    rating: 4.5, votes: 1520, logoGradient: 'from-indigo-500 to-blue-600'
  }
];

export const categories = [
  { id: 'all', label: '全部工具' },
  { id: 'writing', label: '文案写作' },
  { id: 'image', label: '图像设计' },
  { id: 'video', label: '视频音频' },
  { id: 'coding', label: '编程开发' },
  { id: 'productivity', label: '效率办公' },
  { id: 'voice', label: '语音交互' }
] as const;

export const pricingFilters = [
  { id: 'all', label: '全部价格' },
  { id: 'free', label: '完全免费' },
  { id: 'freemium', label: '免费试用' },
  { id: 'paid', label: '付费专业版' }
] as const;