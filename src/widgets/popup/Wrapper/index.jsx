'use client';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './styles.module.scss';

const PopupWrapper = ({ className, isOpen, children, handleOverlayClick }) => {
   return (
      <div className={`fixed flex  ${styles.wrapper} ${className && className}`}>
         <AnimatePresence>
            {isOpen && (
               <>
                  <motion.div
                     key="overlay"
                     className={`fixed ${styles.overlay}`}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.2, ease: 'easeOut' }}
                     onClick={handleOverlayClick}></motion.div>
                  <motion.div
                     key="popup"
                     className={`fixed ${styles.content}`}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.3, ease: 'easeOut' }}>
                     {children}
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </div>
   );
};

export default PopupWrapper;
