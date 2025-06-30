import React, { useState, useEffect, useRef } from "react";
import styles from "./Timeline.module.css";
import { stages } from "./timelineData";
import Modal from "../Modal";

const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [expandedItems] = useState<Set<number>>(new Set());
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<Record<number, HTMLSpanElement | null>>({});

  // Для модалки
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ title: string; content: React.ReactNode } | null>(null);

  useEffect(() => {
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, stage.id]);
      }, index * 700);
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const visibleNumbers = visibleItems
      .map((id) => numberRefs.current[id])
      .filter(Boolean) as HTMLSpanElement[];

    if (visibleNumbers.length < 2) {
      setLineHeight(0);
      return;
    }

    const first = visibleNumbers[0];
    const last = visibleNumbers[visibleNumbers.length - 1];

    const containerTop = containerRef.current.getBoundingClientRect().top;

    const topPos = first.getBoundingClientRect().top - containerTop + first.offsetHeight / 2;
    const bottomPos = last.getBoundingClientRect().top - containerTop + last.offsetHeight / 2;

    setLineTop(topPos);
    setLineHeight(bottomPos - topPos);
  }, [visibleItems]);

  useEffect(() => {
    if (!containerRef.current) return;

    const visibleNumbers = visibleItems
      .map((id) => numberRefs.current[id])
      .filter(Boolean) as HTMLSpanElement[];

    if (visibleNumbers.length < 2) return;

    const first = visibleNumbers[0];
    const last = visibleNumbers[visibleNumbers.length - 1];

    const containerTop = containerRef.current.getBoundingClientRect().top;

    const topPos = first.getBoundingClientRect().top - containerTop + first.offsetHeight / 2;
    const bottomPos = last.getBoundingClientRect().top - containerTop + last.offsetHeight / 2;

    // Увеличивать линию в реальном времени по 1 шагу
    setLineTop(topPos);
    setLineHeight(bottomPos - topPos);
  }, [visibleItems]); // Триггер при каждом новом блоке

  const openModal = (stage: typeof stages[number]) => {
    setModalData({
      title: stage.title,
      content: stage?.modalDescription || (
        <p>Подробная информация отсутствует.</p>
      ),
    });
    setModalOpen(true);
  };

  return (
    <section className={styles.timelineSection}>
      <h1 className={styles.title}>Етапи вступної кампанії у 2025 р.</h1>
      <div className={styles.timeline} ref={containerRef}>
        <div
          className={styles.line}
          style={{
            top: lineTop,
            height: lineHeight,
            opacity: lineHeight > 0 ? 1 : 0,
            transition: "height 0.6s ease, top 0.6s ease, opacity 0.6s ease",
          }}
        ></div>

        {stages.map((stage, index) => {
          const isVisible = visibleItems.includes(stage.id);
          const isExpanded = expandedItems.has(stage.id);
          return (
            <div
              key={stage.id}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              } ${isVisible ? styles.visible : styles.hidden} ${
                isExpanded ? styles.expanded : ""
              }`}
              onClick={() => openModal(stage)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openModal(stage);
                }
              }}
              aria-expanded={isExpanded}
              aria-controls={`stage-desc-${stage.id}`}
            >
              <div className={styles.content}>
                <span
                  className={styles.number}
                  ref={(el) => (numberRefs.current[stage.id] = el)}
                >
                  {stage.id}
                </span>
                <div className={styles.text}>
                  <time className={styles.date}>{stage.date}</time>
                  <h2 className={styles.stageTitle}>{stage.title}</h2>
                  {isExpanded && stage.description && (
                    <p
                      id={`stage-desc-${stage.id}`}
                      className={styles.description}
                    >
                      {stage.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData?.title || ""}
        content={modalData?.content || null}
      />
    </section>
  );
};

export default Timeline;
