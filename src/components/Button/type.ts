import { MouseEvent } from "react";

export type Props = {
    className?: string | undefined;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    title: string;
};
