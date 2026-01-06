
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, ChevronDown, Loader2 } from 'lucide-react';
import Button from './Button';

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.enum([
    "Beta Testing - Harvester",
    "Beta Testing - SafeTravel",
    "Partnership Inquiry",
    "Investment Discussion",
    "Consulting",
    "Other"
  ], {
    errorMap: () => ({ message: "Please select a valid subject." })
  }),
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message cannot exceed 1000 characters." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FormField: React.FC<{
  label: string;
  error?: string;
  children: React.ReactNode;
  id: string;
}> = ({ label, error, children, id }) => (
  <div className="relative mb-6">
    <div className="flex justify-between mb-2">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="text-[10px] font-bold text-red-400 flex items-center gap-1"
          >
            <AlertCircle size={10} />
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
    {children}
  </div>
);

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      subject: undefined as any // Force initial selection
    }
  });

  const messageValue = watch("message", "");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form Data Shipped:", data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 rounded-[2.5rem] bg-brand-blue/5 border border-brand-blue/20 backdrop-blur-xl"
      >
        <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <CheckCircle2 size={40} className="text-brand-blue" />
          </motion.div>
        </div>
        <h3 className="text-3xl font-display font-bold text-white mb-4">Transmission Successful</h3>
        <p className="text-slate-400 max-w-sm mx-auto mb-10">
          Your message has been received. Richard will review the payload and get back to you within 12 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
      className="p-1 md:p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.02] to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        <motion.div variants={itemVariants}>
          <FormField label="Full Name" id="name" error={errors.name?.message}>
            <input
              {...register("name")}
              id="name"
              placeholder="Elon Musk"
              className={`w-full bg-white/[0.03] border ${errors.name ? 'border-red-400/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300 placeholder:text-slate-600`}
            />
          </FormField>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField label="Email Address" id="email" error={errors.email?.message}>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="elon@spacex.com"
              className={`w-full bg-white/[0.03] border ${errors.email ? 'border-red-400/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300 placeholder:text-slate-600`}
            />
          </FormField>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <FormField label="Inquiry Subject" id="subject" error={errors.subject?.message}>
          <div className="relative">
            <select
              {...register("subject")}
              id="subject"
              defaultValue=""
              className={`w-full bg-white/[0.03] border ${errors.subject ? 'border-red-400/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300 appearance-none placeholder:text-slate-600`}
            >
              <option value="" disabled className="bg-brand-dark">Select a reason...</option>
              <option value="Beta Testing - Harvester" className="bg-brand-dark">Beta Testing - Harvester</option>
              <option value="Beta Testing - SafeTravel" className="bg-brand-dark">Beta Testing - SafeTravel</option>
              <option value="Partnership Inquiry" className="bg-brand-dark">Partnership Inquiry</option>
              <option value="Investment Discussion" className="bg-brand-dark">Investment Discussion</option>
              <option value="Consulting" className="bg-brand-dark">Consulting</option>
              <option value="Other" className="bg-brand-dark">Other</option>
            </select>
            <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>
        </FormField>
      </motion.div>

      <motion.div variants={itemVariants}>
        <FormField label="Project Vision / Message" id="message" error={errors.message?.message}>
          <div className="relative">
            <textarea
              {...register("message")}
              id="message"
              rows={6}
              placeholder="Tell me about your vision, the problem, or the opportunity..."
              className={`w-full bg-white/[0.03] border ${errors.message ? 'border-red-400/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all duration-300 resize-none placeholder:text-slate-600`}
            />
            <div className={`absolute bottom-4 right-4 text-[10px] font-bold transition-colors ${messageValue.length > 950 ? 'text-red-400' : 'text-slate-600'}`}>
              {messageValue.length} / 1000
            </div>
          </div>
        </FormField>
      </motion.div>

      <motion.div variants={itemVariants} className="pt-4">
        <Button
          type="submit"
          className="w-full py-5 text-base tracking-widest uppercase gap-3 relative group"
          isLoading={isSubmitting}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Encrypting Payload...
            </>
          ) : (
            <>
              Initialize Connection
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </Button>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-6 text-center text-[10px] text-slate-500 uppercase tracking-widest"
      >
        Secure • Direct • 🇱🇨
      </motion.p>
    </motion.form>
  );
};

export default ContactForm;