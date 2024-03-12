import { TitleDescription } from "@/components/headerSection";
import { useTheme } from "@/contexts/themeProvider";

export const Settings = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div className={`mx-auto p-4 my-4 md:w-10/12`}>
        <TitleDescription title="Settings" description="Manage your account settings" />
        <div className="bg-primary/10 h-[1px] my-4"></div>
        <div className="mt-4">
          <TitleDescription title="Theme" titleClassName="text-lg" description="select the theme of choice" />
          <div id="theme-options" className="my-4 flex gap-4">
            <div onClick={() => setTheme("light")}>
              <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                  <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">Light</span>
            </div>
            <div onClick={() => setTheme("dark")}>
              <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-slate-400"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">Dark</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
