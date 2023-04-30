import React, { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import './ripple.css';

const useRipple = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [ripples, setRipples] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    if (ref.current) {
      const elem = ref.current;
      const clickHandler = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const left = e.clientX - rect.left;
        const top = e.clientY - rect.top;
        const height = elem.clientHeight;
        const width = elem.clientWidth;
        const diameter = Math.max(width, height);
        setRipples([
          ...ripples,
          {
            top: top - diameter / 2,
            left: left - diameter / 2,
            height: Math.max(width, height),
            width: Math.max(width, height),
          },
        ]);
      };
      elem.addEventListener('click', clickHandler);
      return () => {
        elem.removeEventListener('click', clickHandler);
      };
    }
  }, [ref, ripples]);
  const _debounced = useDebounce(ripples, 1000);
  useEffect(() => {
    if (_debounced.length) {
      setRipples([]);
    }
  }, [_debounced.length]);

  return ripples?.map((style, i) => {
    return (
      <span
        className="ripple"
        key={i}
        style={{
          ...style,
          // position: 'absolute',
          // backgroundColor: '#FFFFFF',
          // // opacity: '10%',
          // transform: 'scale(0)',
          // animation: 'ripple 600ms ease forwards',
          // borderRadius: '50%',
        }}
      />
    );
  });
};

export default useRipple;
