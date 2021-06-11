import {useState} from "react";
import style from "../Cards/Cards.module.css"
import {SuperRange} from "./SuperRange";

export const Range = () => {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);

    const onChangeRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        }
    }
    return (
        <div>
            <SuperRange
                value={[value1, value2]}
                onChangeRange={onChangeRange}
                step={1}/>
            <div className={style.values}>
                <span>{value1}</span>
                <span>{value2}</span>
            </div>
        </div>
    );
}