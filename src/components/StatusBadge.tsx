import { STATUS, type StatusKey } from "@/data/alice";

export const STATUS_DOT: Record<StatusKey, string> = {
  concept: "bg-muted-foreground",
  planned: "bg-accent",
  development: "bg-primary",
  alpha: "bg-status-alpha",
  beta: "bg-status-beta",
  stable: "bg-status-stable",
  maintenance: "bg-status-maintenance",
};

export function StatusBadge({ status }: { status: StatusKey }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} aria-hidden />
      {STATUS[status].label}
    </span>
  );
}
