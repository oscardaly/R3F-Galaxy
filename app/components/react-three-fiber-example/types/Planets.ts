import {Planet} from "@/app/components/react-three-fiber-example/components/planet/types/Planet";

export interface Planets {
    mercury: Planet;
    venus: Planet;
    earth: Planet;
    mars: Planet;
    jupiter: Planet;
    saturn: Planet;
    uranus: Planet;
    neptune: Planet;
}

export const planets: Planets = {
    mercury: {
        name: "Mercury",
        planetPosition: 2,
        colour: "grey",
        orbitalSpeed: 0.5,
        offset: 40,
        rotationalSpeed: 1,
        extraInfoUrl: "https://science.nasa.gov/mercury/facts/"
    },
   venus: {
       name: "Venus",
       planetPosition: 3,
       colour: "orange",
       orbitalSpeed: 0.75,
       offset: 80,
       rotationalSpeed: 1,
       extraInfoUrl: "https://science.nasa.gov/venus/venus-facts/"
   },
   earth: {
       name: "Earth",
       planetPosition: 4,
       colour: "green",
       orbitalSpeed: 0.5,
       offset: 120,
       rotationalSpeed: 1,
       extraInfoUrl: "https://science.nasa.gov/earth/facts/"
   },
    mars: {
        name: "Mars",
        planetPosition: 5,
        colour: "orange",
        orbitalSpeed: 1,
        offset: 160,
        rotationalSpeed: 1,
        extraInfoUrl: "https://science.nasa.gov/mars/facts/"
    },
    jupiter: {
        name: "Jupiter",
        planetPosition: 6,
        colour: "yellow",
        orbitalSpeed: 0.75,
        offset: 200,
        rotationalSpeed: 1,
        extraInfoUrl: "https://science.nasa.gov/jupiter/facts/"
    },
    saturn: {
        name: "Saturn",
        planetPosition: 7,
        colour: "grey",
        orbitalSpeed: 0.5,
        offset: 220,
        rotationalSpeed: 1,
        extraInfoUrl: "https://science.nasa.gov/saturn/facts/"
    },
    uranus: {
        name: "Uranus",
        planetPosition: 8,
        colour: "turquoise",
        orbitalSpeed: 1,
        offset: 260,
        rotationalSpeed: 1,
        extraInfoUrl: "https://science.nasa.gov/uranus/facts/"
    },
    neptune: {
        name: "Neptune",
        planetPosition: 9,
        colour: "blue",
        orbitalSpeed: 0.75,
        offset: 300,
        rotationalSpeed: 1,
        extraInfoUrl: "https://science.nasa.gov/neptune/facts/"
    }
};