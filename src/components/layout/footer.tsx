import { Icons } from '../icons';
import { ThemeToggle } from '../theme-toggle';

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-transparent py-6 text-primary-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Icons.Logo className="h-7 w-7 text-accent" />
          <span className="font-headline text-lg font-bold">DFlowAutomation</span>
        </div>
        <p className="text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} DFlowAutomation — Built by Epifanio Sufrir with AI precision.
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
