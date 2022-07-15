import { useEffect } from 'react';

export const useClickOutSide = (ref, onSave) => {
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!ref?.current.contains(e.target)) {
        onSave();
      }
    });
    return () => {
      window.removeEventListener('click', (e) => {});
    };
  }, [ref, onSave]);
};
