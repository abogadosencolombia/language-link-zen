import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ModelCardProps {
  name: string;
  url: string;
  icon?: LucideIcon;
  iconImage?: string;
  delay?: number;
}

const ModelCard = ({ name, url, icon: Icon, iconImage, delay = 0 }: ModelCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_8px_32px_-8px_hsl(34_37%_46%_/_0.4),0_0_40px_-12px_hsl(34_37%_46%_/_0.3)] cursor-pointer animate-fade-in-up">
        <div className="p-8 flex flex-col items-center justify-center gap-4 min-h-[200px]">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-300 scale-75 group-hover:scale-100" />
            <div className="relative bg-secondary/50 p-6 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
              {iconImage ? (
                <img src={iconImage} alt={`${name} icon`} className="w-12 h-12 object-contain" />
              ) : Icon ? (
                <Icon className="w-12 h-12 text-foreground group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              ) : null}
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
            {name}
          </h3>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Card>
    </a>
  );
};

export default ModelCard;
