'use client';
import { motion } from 'framer-motion';

const Animation = ({ children, className }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 32 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         className={className}>
         {children}
      </motion.div>
   );
};

export default Animation;
