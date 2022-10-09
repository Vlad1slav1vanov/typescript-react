import React, {FC, PropsWithChildren} from "react";

export const enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps extends PropsWithChildren {
    width?: string;
    height?: string;
    variant?: CardVariant;
}

const Card: FC<CardProps> = 
    ({width, 
      height,
      variant, 
      children}) => {
    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid black' : 'none',
            background: variant === CardVariant.primary ? 'orange' : ''
        }}
        >
            {children}
        </div>
    )
}

export default Card;