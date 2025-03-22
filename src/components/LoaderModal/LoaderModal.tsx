import { motion, AnimatePresence } from "framer-motion";

interface LoaderModalProps {
  isOpen: boolean;
}

const LoaderModal: React.FC<LoaderModalProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="loading-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="p-6 flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 shadow-lg border-t-2 border-b-2 border-white translate-y-[-20px] z-10"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

 

export default LoaderModal;
