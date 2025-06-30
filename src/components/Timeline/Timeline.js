import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import styles from "./Timeline.module.css";
import { stages } from "./timelineData";
import Modal from "../Modal";
const Timeline = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [expandedItems] = useState(new Set());
    const [lineTop, setLineTop] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);
    const containerRef = useRef(null);
    const numberRefs = useRef({});
    // Для модалки
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    useEffect(() => {
        stages.forEach((stage, index) => {
            setTimeout(() => {
                setVisibleItems((prev) => [...prev, stage.id]);
            }, index * 700);
        });
    }, []);
    // useEffect(() => {
    //   if (!containerRef.current) return;
    //
    //   const visibleNumbers = visibleItems
    //     .map((id) => numberRefs.current[id])
    //     .filter(Boolean) as HTMLSpanElement[];
    //
    //   if (visibleNumbers.length < 2) {
    //     setLineHeight(0);
    //     return;
    //   }
    //
    //   const first = visibleNumbers[0];
    //   const last = visibleNumbers[visibleNumbers.length - 1];
    //
    //   const containerTop = containerRef.current.getBoundingClientRect().top;
    //
    //   const topPos = first.getBoundingClientRect().top - containerTop + first.offsetHeight / 2;
    //   const bottomPos = last.getBoundingClientRect().top - containerTop + last.offsetHeight / 2;
    //
    //   setLineTop(topPos);
    //   setLineHeight(bottomPos - topPos);
    // }, [visibleItems]);
    useEffect(() => {
        if (!containerRef.current)
            return;
        const visibleNumbers = visibleItems
            .map((id) => numberRefs.current[id])
            .filter(Boolean);
        if (visibleNumbers.length < 2)
            return;
        const first = visibleNumbers[0];
        const last = visibleNumbers[visibleNumbers.length - 1];
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const topPos = first.getBoundingClientRect().top - containerTop + first.offsetHeight / 2;
        const bottomPos = last.getBoundingClientRect().top - containerTop + last.offsetHeight / 2;
        // Увеличивать линию в реальном времени по 1 шагу
        setLineTop(topPos);
        setLineHeight(bottomPos - topPos);
    }, [visibleItems]); // Триггер при каждом новом блоке
    const openModal = (stage) => {
        setModalData({
            title: stage.title,
            content: (_jsx("p", { children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442." })),
        });
        setModalOpen(true);
    };
    return (_jsxs("section", { className: styles.timelineSection, children: [_jsx("h1", { className: styles.title, children: "\u0415\u0442\u0430\u043F\u0438 \u0432\u0441\u0442\u0443\u043F\u043D\u043E\u0457 \u043A\u0430\u043C\u043F\u0430\u043D\u0456\u0457 \u0443 2025 \u0440." }), _jsxs("div", { className: styles.timeline, ref: containerRef, children: [_jsx("div", { className: styles.line, style: {
                            top: lineTop,
                            height: lineHeight,
                            opacity: lineHeight > 0 ? 1 : 0,
                            transition: "height 0.6s ease, top 0.6s ease, opacity 0.6s ease",
                        } }), stages.map((stage, index) => {
                        const isVisible = visibleItems.includes(stage.id);
                        const isExpanded = expandedItems.has(stage.id);
                        return (_jsx("div", { className: `${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right} ${isVisible ? styles.visible : styles.hidden} ${isExpanded ? styles.expanded : ""}`, onClick: () => openModal(stage), role: "button", tabIndex: 0, onKeyDown: (e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    openModal(stage);
                                }
                            }, "aria-expanded": isExpanded, "aria-controls": `stage-desc-${stage.id}`, children: _jsxs("div", { className: styles.content, children: [_jsx("span", { className: styles.number, ref: (el) => { numberRefs.current[stage.id] = el; }, children: stage.id }), _jsxs("div", { className: styles.text, children: [_jsx("time", { className: styles.date, children: stage.date }), _jsx("h2", { className: styles.stageTitle, children: stage.title }), isExpanded && stage.description && (_jsx("p", { id: `stage-desc-${stage.id}`, className: styles.description, children: stage.description }))] })] }) }, stage.id));
                    })] }), _jsx(Modal, { isOpen: modalOpen, onClose: () => setModalOpen(false), title: modalData?.title || "", content: modalData?.content || null })] }));
};
export default Timeline;
