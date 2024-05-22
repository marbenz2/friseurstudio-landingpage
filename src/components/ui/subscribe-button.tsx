type SubscribeButtonProps = {
  variant?: "default" | "inverse" | "destructive" | "mini";
  title: string;
  link?: string;
};

const variants = {
  inverse:
    "bg-background text-primary border border-primary hover:bg-primary hover:text-secondary transition-colors duration-300 py-4 px-12",
  default:
    "bg-primary text-secondary border border-primary hover:bg-background hover:text-primary transition-colors duration-300 py-4 px-12",
  destructive:
    "bg-background text-primary border border-red-400 hover:bg-red-400 transition-colors duration-300 py-4 px-12",
  mini: "bg-foreground text-muted text-sm border border-foreground hover:bg-background hover:border-muted-foreground hover:text-muted-foreground transition-colors duration-300 py-2 px-4",
};

const handleClick = (link: string) => {
  console.log(link + " Button clicked");
};

const SubscribeButton = ({
  variant = "default",
  title,
  link = "/",
}: SubscribeButtonProps) => {
  return (
    <button
      onClick={() => handleClick(link)}
      className={`relative rounded-full inline-flex ${variants[variant]}`}
    >
      {title}
    </button>
  );
};

export default SubscribeButton;
