import { useState } from "react"

export const useCustomState = () => {
    const [value, setValue] = useState('');
    return {
        setValue,
        value,
    }
}