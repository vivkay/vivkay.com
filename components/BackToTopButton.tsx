"use client";

export default function BackToTopButton() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-16 mb-8">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group flex items-center gap-2 text-[16px] font-normal text-black/80 font-sans transition hover:underline focus:outline-none"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <img src="/icon_up.svg" alt="Back to top" className="w-6 h-6" />
        <span className="transition-colors">Back to top</span>
      </button>
    </div>
  );
}


