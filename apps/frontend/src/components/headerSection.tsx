import { cn } from "@ui/lib/utils";

type titleDescriptionProps = {
  title: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
};

export const TitleDescription: React.FC<titleDescriptionProps> = ({ title, description, titleClassName, descriptionClassName }) => {
  return (
    <header>
      <h2 className={cn("text-2xl font-bold tracking-tight", titleClassName)}>{title}</h2>
      {description && <p className={cn("text-muted-foreground", descriptionClassName)}>{description}</p>}
    </header>
  );
};
