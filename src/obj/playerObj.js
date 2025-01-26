import { Player } from "./classes";

// Player Cards Types
export const fighterPlayer = new Player (
    "Maria",
    "Fighter",
    10,
    ["Attack", "Run"],
    "Healing Potion",
);

export const roguePlayer = new Player (
    "Frodo",
    "Rogue",
    7,
    ["Attack", "Sneak", "Run"],
    "Healing Potion",
);