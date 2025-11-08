import { Button } from '../ui/button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-4rem)] min-h-[500px] w-full items-center justify-center text-center"
    >
      <div className="container relative z-10 flex flex-col items-center">
        <h1 className="font-headline text-5xl font-black tracking-tighter text-white drop-shadow-lg dark:text-white dark:drop-shadow-[0_2px_10px_rgba(119,188,255,0.5)] sm:text-7xl md:text-8xl">
          Automate. Integrate. Elevate.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl dark:text-slate-300 dark:drop-shadow-[0_2px_5px_rgba(119,188,255,0.3)]">
          Smart AI workflows that scale your business — powered by{' '}
          <span className="font-headline font-bold">
            <span className="text-red-500 drop-shadow-[0_0_8px_rgba(255,50,50,0.8)]">
              D
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              FlowAutomation
            </span>
          </span>
          .
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild className="group relative overflow-hidden">
            <a href="#projects">
            <span className="absolute w-0 h-0 rounded-full bg-white/20 group-hover:w-56 group-hover:h-56 transition-all ease-out duration-300"></span>
            <span className="relative">View Projects</span>
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
