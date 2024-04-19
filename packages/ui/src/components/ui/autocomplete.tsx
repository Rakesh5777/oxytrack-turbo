import { Key, useState } from "react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandInput } from "./command";
import { cn } from "@ui/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

type AutoCompleteProps<T> = {
  placeholder?: string;
  emptyMessage?: string;
  options: T[];
  valueKey: keyof T;
  labelKey: keyof T;
  selectedValue: T;
  setSelectedValue: (selectedValue: T) => void;
};

const AutoComplete = <T extends any>({
  placeholder = "Search...",
  emptyMessage = "No results found.",
  options,
  valueKey,
  labelKey,
  selectedValue,
  setSelectedValue,
}: AutoCompleteProps<T>) => {
  const [open, setOpen] = useState(false);
  const value = (option: T): string => option[valueKey] as string;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {selectedValue ? String(options.find((option) => value(option) === value(selectedValue))?.[labelKey]) : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{emptyMessage}</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={value(option) as Key}
                value={value(option) as string}
                onSelect={() => {
                  setSelectedValue(option);
                  setOpen(false);
                }}
              >
                <Check className={cn("mr-2 h-4 w-4", value(selectedValue) === value(option) ? "opacity-100" : "opacity-0")} />
                {option[labelKey] as string}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { AutoComplete };
