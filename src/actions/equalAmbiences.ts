'use client'

import { Config } from "@/data/config";

export function equalAmbiences(config1: Config, config2: Config) {
    if (config1.length !== config2.length) return false;

    for (let i = 0; i < config1.length; i++) {
        if (config1[i].soundId !== config2[i].soundId || config1[i].volume !== config2[i].volume) {
            return false;
        }
    }

    return true;
}