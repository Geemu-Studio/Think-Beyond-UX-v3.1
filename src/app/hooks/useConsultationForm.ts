import { useState } from 'react';

export interface ConsultationFormData {
  name: string;
  university: string;
  email: string;
  role: string;
  challenge: string;
  gdpr: boolean;
}

export function useConsultationForm(initialValues: ConsultationFormData = { name: '', university: '', email: '', role: '', challenge: '', gdpr: false }) {
  const [form, setForm] = useState<ConsultationFormData>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'This field is required';
    if (!form.university.trim()) e.university = 'This field is required';
    if (!form.role.trim()) e.role = 'This field is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address';
    if (!form.gdpr) e.gdpr = 'Your consent is required to proceed';
    return e;
  };

  const isFormValid =
    form.name.trim() !== '' &&
    form.university.trim() !== '' &&
    form.role.trim() !== '' &&
    form.email.trim() !== '' &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.gdpr;

  const handleSubmit = (e: React.FormEvent, onSuccess?: () => void) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const resetForm = () => {
    setForm(initialValues);
    setSubmitted(false);
    setErrors({});
  };

  return {
    form,
    setForm,
    submitted,
    setSubmitted,
    errors,
    setErrors,
    isFormValid,
    handleSubmit,
    resetForm
  };
}
