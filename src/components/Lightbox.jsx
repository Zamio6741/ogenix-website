import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Lightbox({
  images,
  current,
  setCurrent,
  close,
}) {
  useEffect(() => {
    if (current === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();

      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % images.length);
      }

      if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current, images.length, close, setCurrent]);

  if (current === null) return null;

  const previous = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] flex items-center justify-center"
      >

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-6 right-6 text-white hover:text-red-400 transition"
        >
          <X size={36} />
        </button>

        {/* Previous */}
        <button
          onClick={previous}
          className="absolute left-6 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full p-3 text-white transition"
        >
          <ChevronLeft size={34} />
        </button>

        {/* Image */}
        <motion.img
          key={images[current].image}
          src={images[current].image}
          alt={images[current].title}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
          transition={{
            duration: 0.35,
          }}
          className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,.6)]"
        />

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-6 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full p-3 text-white transition"
        >
          <ChevronRight size={34} />
        </button>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-10 text-center"
        >
          <p className="text-cyan-300 uppercase tracking-[3px] text-sm">
            {images[current].category}
          </p>

          <h3 className="text-white text-3xl font-bold mt-2">
            {images[current].title}
          </h3>

          <p className="text-gray-300 mt-3">
            {current + 1} / {images.length}
          </p>
        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}