import React, { useEffect } from 'react';

export function Modal({ is_open, on_close, title, children }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') on_close();
    };
    if (is_open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [is_open, on_close]);

  if (!is_open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={on_close} />
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden" dir="rtl">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button onClick={on_close} className="text-gray-500 hover:text-gray-700" aria-label="סגירה">✕</button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;


