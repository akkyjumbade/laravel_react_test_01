import { motion } from "framer-motion"

export default function Page({ children, ...props }) {
   return (
      <motion.div
         animate={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 20 }}
         exit={{ opacity: 0, x: -20 }}
         transition={{ duration: 0.15 }}
      >
         {children}
      </motion.div>
   )
}
