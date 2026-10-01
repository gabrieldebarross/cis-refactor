"use client";

import { useEffect } from "react";

const titles = [
    "Cis-Comcam",
    "Consórcio de Saúde Intermunicipal de Saúde - Cis-Comcam",
    "Saúde para todos <3",
];

export default function DynamicTitle() {
    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % titles.length;
            document.title = titles[index];
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return null;
}
