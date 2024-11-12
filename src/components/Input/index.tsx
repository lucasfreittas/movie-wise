import { InputContainer } from "./styles";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

type InputProps = {
    placeholder: string
}

export function Input ({placeholder} : InputProps){
    return(
        <InputContainer>
            <input type="text" placeholder={placeholder} />
            <MagnifyingGlass size={20}/>
        </InputContainer>
    )
};