import PropTypes from "prop-types";
import React from "react";


const shapes = {
    circle: "rounded-[50%]",
    round: "rounded-[12px]",
};
const variants = {
    fill: {
        cyan_900_01: "bg-cyan-900_01",
        red_100: "bg-red-100 shadow-4xl text-gray-900_01",
        teal_700: "bg-teal_700 shadow-lg text-teal_50",
        pink_500: "bg-pink_500 shadow-sm text-teal_50",
        teal_A100: "bg-teal_a100 shadow-xl text-gray_900",
    },
    outline: {
        teal_A100: "border-teal_a100 border-2 border-solid shadow-xl text-teal_900",
    }
}
const sizes = {
    sm: "h-[44px] px-3",
    xs: "h-[44px] px-5 text-[16px]",
};
const Button = ({
    children,
    className = '',
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "teal_A100",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};
Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "round"]),
    size: PropTypes.oneOf(["sm", "xs"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(["cyan_900_01", "red_100", "teal_700", "pink_500", "teal_A100"]),
};
export { Button };