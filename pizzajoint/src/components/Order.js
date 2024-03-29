import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
}
const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  }
}
const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 exit={{ y: -1000 }}>Thank you for your order :)</h2>
      <motion.p
        variants={childVariants}
      >
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div
        variants={childVariants}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;