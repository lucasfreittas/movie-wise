import { useState } from "react";
import { TagContainer } from "./styles";

type TagProps = {
    tagName: string;
    clicked: boolean;
    onClick: () => void;
};

export function Tag({ tagName, clicked, onClick }: TagProps) {

    return(
        <TagContainer onClick={onClick} className={clicked ? 'clicked' : ''}>
            <p>{tagName}</p>
        </TagContainer>
    )
};