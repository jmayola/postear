const safeJSON = {
parse<T>(v: string | null, fallback: T): T {
if (v == null) return fallback;
try { return JSON.parse(v) as T; } catch { return fallback; }
},
stringify<T>(v: T): string {
try { return JSON.stringify(v); } catch { return "null"; }
}
};


export const storage = {
get<T>(key: string, fallback: T): T {
if (typeof window === "undefined") return fallback;
const raw = window.localStorage.getItem(key);
return safeJSON.parse<T>(raw, fallback);
},
set<T>(key: string, value: T): void {
if (typeof window === "undefined") return;
window.localStorage.setItem(key, safeJSON.stringify(value));
},
};