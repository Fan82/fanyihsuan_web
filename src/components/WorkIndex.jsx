import { useEffect, useRef, useState } from "react";

// After the user scrolls/taps inside the index, don't auto-scroll it for a bit.
const INTERACTION_GRACE_MS = 1500;

/**
 * WorkIndex — right-side anchor nav for the Work sections.
 *
 * `items` is the same list Work renders ([{ id, name }]), so the dot count,
 * order and targets always match the articles on the page.
 * Links are plain fragment links: the browser does the jump (click / Enter).
 */
export default function WorkIndex({ items, label }) {
  const [activeId, setActiveId] = useState(null);
  const [tip, setTip] = useState(null); // { name, top }
  const navRef = useRef(null);
  const listRef = useRef(null);
  const pointerInside = useRef(false);
  const lastInteraction = useRef(0);

  // Active section = the article that contains the viewport's vertical midline.
  useEffect(() => {
    if (!items.length) {
      setActiveId(null);
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      let next = null;
      for (const { id } of items) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        // Half-open range so a boundary belongs to exactly one section.
        if (rect && rect.top <= mid && rect.bottom > mid) {
          next = id;
          break;
        }
      }
      setActiveId(next);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    // Re-sync when layout shifts (images loading, font swap, language change).
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      ro.disconnect();
    };
  }, [items]);

  // Keep the current dot visible when the list overflows, unless the user is
  // working inside the list (hovering, scrolling it, or keyboard-focused).
  useEffect(() => {
    const list = listRef.current;
    if (!list || !activeId) return;
    if (list.scrollHeight <= list.clientHeight) return;
    if (pointerInside.current) return;
    if (list.querySelector(":focus-visible")) return;
    if (Date.now() - lastInteraction.current < INTERACTION_GRACE_MS) return;

    const link = list.querySelector(`[data-id="${CSS.escape(activeId)}"]`);
    if (!link) return;
    const top = link.offsetTop;
    const bottom = top + link.offsetHeight;
    if (top < list.scrollTop) {
      list.scrollTo({ top, behavior: "instant" });
    } else if (bottom > list.scrollTop + list.clientHeight) {
      list.scrollTo({ top: bottom - list.clientHeight, behavior: "instant" });
    }
  }, [activeId]);

  if (!items.length) return null;

  const showTip = (el, name) => {
    const navTop = navRef.current.getBoundingClientRect().top;
    const rect = el.getBoundingClientRect();
    setTip({ name, top: rect.top - navTop + rect.height / 2 });
  };
  const hideTip = () => setTip(null);
  const markInteraction = () => {
    lastInteraction.current = Date.now();
  };

  return (
    <nav
      ref={navRef}
      className="work-index"
      aria-label={label}
      data-visible={activeId ? "true" : "false"}
    >
      <ol
        ref={listRef}
        className="work-index__list"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") pointerInside.current = true;
        }}
        onPointerLeave={() => {
          pointerInside.current = false;
        }}
        onPointerDown={markInteraction}
        onWheel={markInteraction}
        onTouchStart={markInteraction}
        onScroll={hideTip}
      >
        {items.map(({ id, name }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              data-id={id}
              className="work-index__link"
              aria-current={id === activeId ? "location" : undefined}
              onPointerEnter={(e) => {
                // Mouse only: a hover reveal on touch would eat the first tap.
                if (e.pointerType === "mouse") showTip(e.currentTarget, name);
              }}
              onPointerLeave={hideTip}
              onFocus={(e) => {
                if (e.currentTarget.matches(":focus-visible")) {
                  showTip(e.currentTarget, name);
                }
              }}
              onBlur={hideTip}
            >
              <span className="sr-only">{name}</span>
              <span className="work-index__mark" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>

      {tip && (
        <span
          className="work-index__tooltip"
          style={{ top: tip.top }}
          aria-hidden="true"
        >
          {tip.name}
        </span>
      )}
    </nav>
  );
}
