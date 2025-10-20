import ModelCard from "@/components/ModelCard";
import chatllmIcon from "@/assets/chatllm-icon.png";
import {
  MessageSquare,
  Sparkles,
  Brain,
  Zap,
  Bot,
  Globe,
  Rocket,
  Star,
  Search,
  Code,
  Gem,
  MessageCircle,
  Wind,
  Lightbulb,
  Bird,
  Scale,
} from "lucide-react";

const models = [
  { name: "ChatLLM", url: "https://chatllm.abacus.ai/", iconImage: chatllmIcon },
  { name: "Deepseek", url: "https://chat.deepseek.com/", icon: Brain },
  { name: "Baichuan AI", url: "https://ying.baichuan-ai.com/chat", icon: Sparkles },
  { name: "Qwen", url: "https://chat.qwen.ai/", icon: Zap },
  { name: "Ernie", url: "https://ernie.baidu.com/", icon: Bot },
  { name: "Copilot", url: "https://copilot.microsoft.com/", icon: Code },
  { name: "Grok", url: "https://grok.com/", icon: Rocket },
  { name: "Meta", url: "https://www.meta.ai/", icon: Globe },
  { name: "Perplexity", url: "https://www.perplexity.ai/", icon: Search },
  { name: "Claude", url: "https://claude.ai/", icon: MessageCircle },
  { name: "Gemini", url: "https://gemini.google.com/app", icon: Gem },
  { name: "ChatGPT", url: "https://chatgpt.com/", icon: Star },
  { name: "Mistral", url: "https://chat.mistral.ai/chat", icon: Wind },
  { name: "Gemma Google", url: "https://aistudio.google.com/app/prompts/new_chat?model=gemma-3-27b-it", icon: Lightbulb },
  { name: "Falcon", url: "https://chat.falconllm.tii.ae/", icon: Bird },
  { name: "LMArena", url: "https://lmarena.ai/", icon: Scale },
];

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            AI Chat Models Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora y accede directamente a los principales modelos de lenguaje del mundo
          </p>
        </header>

        {/* Grid de modelos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {models.map((model, index) => (
            <ModelCard
              key={model.name}
              name={model.name}
              url={model.url}
              icon={model.icon}
              iconImage={model.iconImage}
              delay={index * 50}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm animate-fade-in-up border-t border-border pt-8">
          <p>
            Creado con{" "}
            <span className="text-primary">❤</span> · 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
