import { Input } from "@/shared/ui/input";

export function FilterInput({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (val: string) => void;
}) {
  return (
    <Input
      value={filter ?? ""}
      onChange={(e) => setFilter(e.target.value)}
    ></Input>
  );
}
