import { cn } from "@/lib/utils";

export default function Loading({
  variant = "default",
  size = "sm",
}: {
  variant?: "default" | "secondary";
  size?: "sm" | "lg" | "md";
}) {
  return (
    <div
      className={cn(
        "animate-[loading_0.5s_linear_infinite] rounded-full bg-transparent border-text",
        variant === "default" ? "border-t-primary" : "border-t-text",
        size === "sm"
          ? "border-t-[2px]"
          : size === "md"
          ? "border-t-[3px]"
          : "border-t-[4px]"
      )}
      style={{
        height: size === "sm" ? 16 : size === "md" ? 32 : 48,
        width: size === "sm" ? 16 : size === "md" ? 32 : 48,
      }}
    />
  );
}
