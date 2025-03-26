import "./ui/LottieAnimations.css";
import { createElement, useEffect, useState } from "react";
import Lottie from "react-lottie";

export function LottieAnimations({ fileVisibility, lottieFile, imageFullPage, imageHeight, imageWidth }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (fileVisibility && fileVisibility.status === "available" && fileVisibility.value === false) {
            setVisible(false);
        } else if (fileVisibility && fileVisibility.status === "available" && fileVisibility.value === true) {
            setVisible(true);
        } else {
            setVisible(true);
        }
    }, [fileVisibility, visible]);

    if (lottieFile) {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: JSON.parse(lottieFile),
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };

        return (
            <div className={"lottie-animations-widget" && visible ? "full-container" : "hidden"}>
                <Lottie options={defaultOptions} height={imageHeight} width={imageWidth} />
            </div>
        );
    } else return null;
}
