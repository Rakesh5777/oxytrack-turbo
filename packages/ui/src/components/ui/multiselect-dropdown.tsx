import { cn } from "@ui/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  Button,
  Separator,
  Badge,
} from "../index";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";

type MultiSelectDropdownProps<T = string> = {
  title: string;
  options: { label: string; value: T; icon?: any }[];
  selectedLength?: number;
  selectedValues: T[];
  setSelectedValues: (selectedValues: T[]) => void;
};

export const MultiSelectDropdown = <T extends string>({
  title,
  options,
  selectedLength = 2,
  selectedValues,
  setSelectedValues,
}: MultiSelectDropdownProps<T>) => {
  const selectedValuesSet = new Set(selectedValues);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValuesSet?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <div className="space-x-1 lg:flex">
                {selectedValuesSet.size > selectedLength ? (
                  <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                    {selectedValuesSet.size}
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValuesSet.has(option.value))
                    .map((option) => (
                      <Badge variant="secondary" key={option.value} className="rounded-sm px-1 font-normal">
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValuesSet.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValuesSet.delete(option.value);
                      } else {
                        selectedValuesSet.add(option.value);
                      }
                      const filterValues = Array.from(selectedValuesSet);
                      setSelectedValues(filterValues);
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    {option.icon && <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValuesSet.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem onSelect={() => setSelectedValues([])} className="justify-center text-center">
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
