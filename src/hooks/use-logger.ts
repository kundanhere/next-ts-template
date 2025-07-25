export function useLogger() {
  return {
    log: (...args: any[]) => console.log("[LOG]:", ...args),
    error: (...args: any[]) => console.error("[ERROR]:", ...args),
    warn: (...args: any[]) => console.warn("[WARN]:", ...args),
  };
}
