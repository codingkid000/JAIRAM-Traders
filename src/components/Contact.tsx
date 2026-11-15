import { useState, type FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { business, products } from '@/data/products';

const mapSrc =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('NGO Colony, Kottar, Nagercoil, Kanyakumari, Tamil Nadu 629002') +
  '&output=embed';

const contactCards = [
  {
    icon: MapPin,
    label: 'Address',
    value: business.address,
    href: `https://www.google.com/maps?q=${encodeURIComponent(business.address)}`,
  },
  {
    icon: Building2,
    label: 'Office',
    value: business.office,
    href: `tel:${business.office.replace(/\s/g, '')}`,
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: business.mobile,
    href: `tel:${business.mobile.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: business.email,
    href: `mailto:${business.email}`,
  },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  product: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+\d\s()-]{7,}$/.test(form.phone.trim()))
      e.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Please enter a valid email address';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Enquiry: ${form.product || 'General'} — from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Product: ${form.product || 'General enquiry'}`,
      '',
      'Message:',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 6000);
  }

  const whatsappText = `Hello Jairam Traders, I'd like to enquire about your edible seeds.`;
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section id="contact" className="bg-gradient-to-b from-cream-50 to-cream-100 py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal section-eyebrow justify-center">
            <MessageCircle className="h-4 w-4" />
            Get in Touch
          </span>
          <h2 className="reveal mt-4 section-title">Contact Jairam Traders</h2>
          <p className="reveal mt-4 text-base leading-relaxed text-brand-800/75">
            We'd love to hear from you. Reach out for product enquiries, bulk
            orders or any questions — we respond promptly.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="reveal group flex flex-col items-start rounded-2xl bg-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-cream-50">
                <c.icon className="h-6 w-6" strokeWidth={1.9} />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">
                {c.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-800/85">
                {c.value}
              </p>
            </a>
          ))}
        </div>

        {/* Form + Map */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="reveal rounded-2xl bg-white p-7 shadow-card sm:p-9">
            <h3 className="font-display text-xl font-semibold text-brand-950">
              Send us an enquiry
            </h3>
            <p className="mt-1.5 text-sm text-brand-800/70">
              Fill in the form and we'll get back to you shortly.
            </p>

            {sent && (
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-brand-100 px-4 py-3.5 text-sm font-medium text-brand-800">
                <CheckCircle2 className="h-5 w-5 text-brand-600" />
                Your email is ready to send. Thank you for reaching out!
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your full name"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+91 ..."
                />
              </div>
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="you@example.com"
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-brand-800">
                  Product
                </label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-brand-200 bg-cream-50/50 px-4 py-3 text-sm text-brand-900 outline-none transition-colors focus:border-brand-600 focus:bg-white"
                >
                  <option value="">Select a product (optional)</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Other">Other / General enquiry</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-brand-800">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you need..."
                  className={`w-full resize-none rounded-xl border bg-cream-50/50 px-4 py-3 text-sm text-brand-900 outline-none transition-colors focus:bg-white ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-brand-200 focus:border-brand-600'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" />
                Send Enquiry
              </button>
            </form>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 w-full"
            >
              <MessageCircle className="h-5 w-5" />
              Enquire on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="reveal flex flex-col overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Jairam Traders location map"
              src={mapSrc}
              className="h-full min-h-[24rem] w-full flex-1 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}

function Field({ label, name, value, onChange, error, type = 'text', placeholder }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-brand-800">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-cream-50/50 px-4 py-3 text-sm text-brand-900 outline-none transition-colors focus:bg-white ${
          error ? 'border-red-400 focus:border-red-500' : 'border-brand-200 focus:border-brand-600'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
