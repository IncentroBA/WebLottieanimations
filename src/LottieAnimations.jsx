// Manually modify node_modules/lottie-web/build/player/lottie.js
// from
// var expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0]; // eslint-disable-line no-eval
// to
// var expression_function = new Function('scoped_bm_rt', val + '; return $bm_rt;'); // eslint-disable-line no-eval
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
