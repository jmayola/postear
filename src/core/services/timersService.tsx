import { storage } from "./storage";
import type { Timer } from "../models/timer";


const KEY = "timers.v1";


export const timersService = {
getAll(): Timer[] { return storage.get<Timer[]>(KEY, []); },
saveAll(list: Timer[]): void { storage.set<Timer[]>(KEY, list); },
};