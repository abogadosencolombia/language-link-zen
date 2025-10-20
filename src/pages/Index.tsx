import ModelCard from "@/components/ModelCard";
import chatllmIcon from "@/assets/chatllm-icon.png";
import deepseekIcon from "@/assets/deepseek-icon.png";
import baichuanIcon from "@/assets/baichuan-icon.png";
import qwenIcon from "@/assets/qwen-icon.png";
import ernieIcon from "@/assets/ernie-icon.png";
import copilotIcon from "@/assets/copilot-icon.png";
import grokIcon from "@/assets/grok-icon.png";
import metaIcon from "@/assets/meta-icon.png";
import perplexityIcon from "@/assets/perplexity-icon.png";
import claudeIcon from "@/assets/claude-icon.png";
import geminiIcon from "@/assets/gemini-icon.png";
import chatgptIcon from "@/assets/chatgpt-icon.png";
import mistralIcon from "@/assets/mistral-icon.png";
import gemmaIcon from "@/assets/gemma-icon.png";
import falconIcon from "@/assets/falcon-icon.png";
import lmarenaIcon from "@/assets/lmarena-icon.png";

const models = [
  { name: "ChatLLM", url: "https://chatllm.abacus.ai/", iconImage: chatllmIcon },
  { name: "Deepseek", url: "https://chat.deepseek.com/", iconImage: deepseekIcon },
  { name: "Baichuan AI", url: "https://ying.baichuan-ai.com/chat", iconImage: baichuanIcon },
  { name: "Qwen", url: "https://chat.qwen.ai/", iconImage: qwenIcon },
  { name: "Ernie", url: "https://ernie.baidu.com/", iconImage: ernieIcon },
  { name: "Copilot", url: "https://copilot.microsoft.com/", iconImage: copilotIcon },
  { name: "Grok", url: "https://grok.com/", iconImage: grokIcon },
  { name: "Meta", url: "https://www.meta.ai/", iconImage: metaIcon },
  { name: "Perplexity", url: "https://www.perplexity.ai/", iconImage: perplexityIcon },
  { name: "Claude", url: "https://claude.ai/", iconImage: claudeIcon },
  { name: "Gemini", url: "https://gemini.google.com/app", iconImage: geminiIcon },
  { name: "ChatGPT", url: "https://chatgpt.com/", iconImage: chatgptIcon },
  { name: "Mistral", url: "https://chat.mistral.ai/chat", iconImage: mistralIcon },
  { name: "Gemma Google", url: "https://aistudio.google.com/app/prompts/new_chat?model=gemma-3-27b-it", iconImage: gemmaIcon },
  { name: "Falcon", url: "https://chat.falconllm.tii.ae/", iconImage: falconIcon },
  { name: "LMArena", url: "https://lmarena.ai/", iconImage: lmarenaIcon },
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
