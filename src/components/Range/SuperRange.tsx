import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min?: number,
    max?: number,
    step: number | null,
}

export const SuperRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value, onChangeRange,
        min, max,
        step , ...restProps
    }
) => {
    const handleChangeSlider = (event: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value as [number, number])
    }

    return <Slider
                value={value}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                step={step}
            />
}


