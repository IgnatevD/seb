import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function BackgroundVideo() {
    return (_jsxs("video", { autoPlay: true, muted: true, loop: true, playsInline: true, style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -1,
            pointerEvents: 'none',
        }, children: [_jsx("source", { src: "/test.mp4", type: "video/mp4" }), "Your browser does not support the video tag."] }));
}
