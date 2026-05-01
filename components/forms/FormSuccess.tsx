"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormSuccessProps {
  title?: string;
  message?: string;
  onReset: () => void;
}

export default function FormSuccess({
  title = "Thank you!",
  message = "We've received your enquiry. Check your email for confirmation.",
  onReset,
}: FormSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12 px-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.1 }}
        className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-8 h-8 text-success" />
      </motion.div>
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted mb-8 max-w-sm mx-auto">{message}</p>
      <Button variant="ghost" onClick={onReset}>
        Send another enquiry
      </Button>
    </motion.div>
  );
}
