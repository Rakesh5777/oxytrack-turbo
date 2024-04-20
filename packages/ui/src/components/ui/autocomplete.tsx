import { cn } from "@ui/lib/utils";
import { Check } from "lucide-react";
import { Key, useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type AutoCompleteProps<T = any> = {
  searchPlaceholder?: string;
  placeholder?: string;
  emptyMessage?: string;
  options: T[];
  valueKey: keyof T;
  labelKey: keyof T;
  selectedValue: T;
  searchTerm?: string;
  setSearchTerm: (searchTerm: string) => void;
  setSelectedValue: (selectedValue: T) => void;
};

const getWidthOfComponent = (element: HTMLElement | null) => {
  if (!element) return "";
  const style = window.getComputedStyle(element);
  const width = element.offsetWidth;
  const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  return `${width + margin}px`;
};

const AutoComplete = <T extends any>({
  searchPlaceholder = "Search...",
  placeholder = "Select",
  emptyMessage = "No results found.",
  options,
  valueKey,
  labelKey,
  selectedValue,
  setSearchTerm,
  setSelectedValue,
}: AutoCompleteProps<T>) => {
  const [open, setOpen] = useState(false);
  const value = (option: T): string => option?.[valueKey] as string;
  const ref = useRef<HTMLButtonElement>(null);
  const [popOverWidth, setPopOverWidth] = useState<string>();

  useEffect(() => {
    if (!open) {
      setSearchTerm("");
    }
  }, [open]);

  return (
    <Popover
      open={open}
      onOpenChange={(open) => {
        setPopOverWidth(getWidthOfComponent(ref.current));
        setOpen(open);
      }}
    >
      <PopoverTrigger asChild>
        <Button ref={ref} variant="outline" role="combobox" aria-expanded={open} className="flex w-full justify-between">
          {selectedValue ? (options.find((option) => value(option) === value(selectedValue))?.[labelKey] as string) : placeholder}
        </Button>
      </PopoverTrigger>
      {!!popOverWidth && (
        <PopoverContent style={{ width: popOverWidth }} className={"p-0"}>
          <Command shouldFilter={false}>
            <CommandInput placeholder={searchPlaceholder} onInput={(event) => setSearchTerm(event?.currentTarget?.value || "")} />
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={value(option) as Key}
                  value={value(option) as string}
                  onSelect={(value: any) => {
                    setSelectedValue(value);
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
      )}
    </Popover>
  );
};

export { AutoComplete };
