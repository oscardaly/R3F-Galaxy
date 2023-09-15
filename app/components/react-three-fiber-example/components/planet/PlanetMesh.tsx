import React, {FC, useCallback, useState} from "react";
import {Planet} from "@/app/components/react-three-fiber-example/components/planet/types/Planet";
import {OnClick} from "@/app/components/react-three-fiber-example/components/planet/types/Callbacks";

interface PlanetProps extends Planet {
    onClick?: OnClick;
}

export const PlanetMesh: FC = () => {
    return (
        <></>
    );
}