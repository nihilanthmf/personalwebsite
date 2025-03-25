import { cn } from "@/lib/utils";

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      type="text"
      {...props}
      className={cn(
        "rounded-lg border-[1px] border-solid border-text/10 bg-background py-2 px-3 outline-none placeholder:text-text/50",
        props.className
      )}
    />
  );
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        "rounded-lg border-[1px] border-solid border-text/10 bg-background py-2 px-3 resize-none outline-none placeholder:text-text/50",
        props.className
      )}
    />
  );
}
