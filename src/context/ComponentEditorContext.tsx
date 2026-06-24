"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export interface ComponentDefinition {
  id: string;
  name: string;
  description: string;
  code: string;
}

interface ComponentEditorContextType {
  activeComponent: ComponentDefinition | null;
  currentCode: string;
  highlightedLine: number | null;
  highlightVersion: number;
  openComponent: (id: string) => void;
  closeComponent: () => void;
  updateTextInCode: (oldText: string, newText: string) => void;
  focusTextInCode: (text: string) => void;
}

const ComponentEditorContext = createContext<ComponentEditorContextType | undefined>(undefined);

const COMPONENTS: ComponentDefinition[] = [
  {
    id: 'signup-form',
    name: 'Signup Form',
    description: 'Multi-step account creation form',
    code: `import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { useState, useCallback } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: string;
  role: string;
  agreeTerms: boolean;
};

const STEPS = ['Account', 'Details', 'Confirm'];

function SignupForm({ endpoint, accentColor }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '',
    password: '', company: '', role: '', agreeTerms: false,
  });

  const update = useCallback(
    (field: keyof FormData, value: string | boolean) =>
      setForm((prev) => ({ ...prev, [field]: value })),
    [],
  );

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
  };

  return (
    <div className="signup-form">
      <h2>Create your account</h2>
      <p className="step-label">
        Step {step + 1} of {STEPS.length} — {STEPS[step]}
      </p>

      <div className="step-indicator">
        <StepDot label="Account" number={1} active={step >= 0} color={accentColor} />
        <StepDot label="Details" number={2} active={step >= 1} color={accentColor} />
        <StepDot label="Confirm" number={3} active={step >= 2} color={accentColor} />
      </div>

      {step === 0 && (
        <div className="fields-grid">
          <label>First Name *
            <input value={form.firstName}
              onChange={(e) => update('firstName', e.target.value)} />
          </label>
          <label>Last Name
            <input value={form.lastName}
              onChange={(e) => update('lastName', e.target.value)} />
          </label>
          <label className="full-width">Email Address *
            <input type="email" value={form.email}
              onChange={(e) => update('email', e.target.value)} />
          </label>
          <label className="full-width">Password
            <input type="password" value={form.password}
              onChange={(e) => update('password', e.target.value)} />
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="fields-grid">
          <label>Company
            <input value={form.company}
              onChange={(e) => update('company', e.target.value)} />
          </label>
          <label>Role
            <input value={form.role}
              onChange={(e) => update('role', e.target.value)} />
          </label>
        </div>
      )}

      {step === 2 && <ConfirmStep form={form} />}

      <div className="form-actions">
        {step > 0 && <button onClick={back}>Back</button>}
        {step < STEPS.length - 1 ? (
          <button className="primary" onClick={next}>Continue</button>
        ) : (
          <button className="primary" onClick={submit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default declareComponent(SignupForm, {
  type: 'code-component',
  label: 'Signup Form',
  props: {
    endpoint: props.string({ default: '/api/signup' }),
    accentColor: props.string({ default: '#e85533' }),
  },
});`,
  },
  {
    id: 'pricing-calculator',
    name: 'Pricing Calculator',
    description: 'Interactive pricing tier selector',
    code: `import React, { useState } from 'react';

const plans = [
  { id: 'basic', label: 'Basic', monthly: 29, yearly: 290 },
  { id: 'pro', label: 'Pro', monthly: 59, yearly: 590 },
  { id: 'enterprise', label: 'Enterprise', monthly: 99, yearly: 990 },
];

const PricingCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const active = plans.find((p) => p.id === selectedPlan);
  const total = active ? active[billingCycle] : 0;

  return (
    <div className="pricing-calculator">
      <h2>Choose Your Plan</h2>

      <div className="plan-list">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={selectedPlan === plan.id ? 'plan active' : 'plan'}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <span className="plan-name">{plan.label}</span>
            <span className="plan-price">
              \${plan[billingCycle]}/{billingCycle === 'monthly' ? 'mo' : 'yr'}
            </span>
          </div>
        ))}
      </div>

      <div className="total-price">
        Total: \${total}/{billingCycle === 'monthly' ? 'month' : 'year'}
      </div>
    </div>
  );
};

export default PricingCalculator;`,
  },
  {
    id: 'contact-form',
    name: 'Contact Form',
    description: 'Email contact form with validation',
    code: `import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setStatus('sent');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Get in Touch</h2>

      <input
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <button type="submit" disabled={status === 'sending'}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;`,
  },
  {
    id: 'image-gallery',
    name: 'Image Gallery',
    description: 'Responsive masonry image grid with lightbox',
    code: `import React, { useState } from 'react';

const ImageGallery = ({ images = [], columns = 3 }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gap: '16px',
      }}>
        {images.map((img, i) => (
          <div key={i} className="gallery-item"
            onClick={() => setSelectedImage(img)}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </>
  );
};

export default ImageGallery;`,
  },
  {
    id: 'testimonials-slider',
    name: 'Testimonials Slider',
    description: 'Auto-rotating testimonial carousel',
    code: `import React, { useState, useEffect } from 'react';

const TestimonialsSlider = ({ testimonials = [], interval = 5000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  if (!testimonials.length) return null;
  const t = testimonials[current];

  return (
    <div className="testimonial-slider">
      <blockquote>"{t.quote}"</blockquote>
      <div className="author">
        <img src={t.avatar} alt={t.name} />
        <div>
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </div>
      </div>
      <div className="dots">
        {testimonials.map((_, i) => (
          <button key={i}
            className={i === current ? 'active' : ''}
            onClick={() => setCurrent(i)} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;`,
  },
  {
    id: 'data-table',
    name: 'Data Table',
    description: 'Sortable, filterable data table',
    code: `import React, { useState, useMemo } from 'react';

const DataTable = ({ columns = [], data = [], pageSize = 10 }) => {
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState('');

  const filtered = useMemo(() =>
    data.filter((row) =>
      columns.some((col) =>
        String(row[col.key]).toLowerCase().includes(filter.toLowerCase())
      )
    ), [data, columns, filter]);

  const sorted = useMemo(() => {
    if (!sortCol) return filtered;
    return [...filtered].sort((a, b) => {
      const v = a[sortCol] > b[sortCol] ? 1 : -1;
      return sortDir === 'asc' ? v : -v;
    });
  }, [filtered, sortCol, sortDir]);

  const paged = sorted.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className="data-table">
      <input placeholder="Filter..." value={filter}
        onChange={(e) => setFilter(e.target.value)} />
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} onClick={() => {
                setSortCol(col.key);
                setSortDir((d) => d === 'asc' ? 'desc' : 'asc');
              }}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paged.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;`,
  },
];

export function getComponentById(id: string): ComponentDefinition | undefined {
  return COMPONENTS.find((c) => c.id === id);
}

export function getAllComponents(): ComponentDefinition[] {
  return COMPONENTS;
}

export function ComponentEditorProvider({ children }: { children: React.ReactNode }) {
  const [activeComponent, setActiveComponent] = useState<ComponentDefinition | null>(null);
  const [currentCode, setCurrentCode] = useState('');
  const [highlightedLine, setHighlightedLine] = useState<number | null>(null);
  const [highlightVersion, setHighlightVersion] = useState(0);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const hasInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const componentParam = searchParams?.get('component');
    if (componentParam) {
      const found = getComponentById(componentParam);
      if (found) {
        setActiveComponent(found);
        setCurrentCode(found.code);
      }
    }
  }, [searchParams]);

  const updateUrl = useCallback((componentId: string | null) => {
    if (isUpdatingRef.current) return;

    const params = new URLSearchParams(searchParams?.toString() || '');

    if (componentId === null) {
      params.delete('component');
    } else {
      params.set('component', componentId);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname || '/';

    isUpdatingRef.current = true;
    router.replace(newUrl, { scroll: false });

    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  }, [searchParams, pathname, router]);

  const openComponent = useCallback((id: string) => {
    const found = getComponentById(id);
    if (found) {
      setActiveComponent(found);
      setCurrentCode(found.code);
      setHighlightedLine(null);
      updateUrl(id);
    }
  }, [updateUrl]);

  const closeComponent = useCallback(() => {
    setActiveComponent(null);
    setCurrentCode('');
    setHighlightedLine(null);
    updateUrl(null);
  }, [updateUrl]);

  const findTextIndex = useCallback((code: string, text: string): number => {
    const singleQuoted = `'${text}'`;
    const doubleQuoted = `"${text}"`;
    const backtickQuoted = `\`${text}\``;
    const jsxWrapped = `>${text}<`;

    if (code.includes(singleQuoted)) return code.indexOf(singleQuoted);
    if (code.includes(doubleQuoted)) return code.indexOf(doubleQuoted);
    if (code.includes(backtickQuoted)) return code.indexOf(backtickQuoted);
    if (code.includes(jsxWrapped)) return code.indexOf(jsxWrapped);
    if (code.includes(text)) return code.indexOf(text);
    return -1;
  }, []);

  const focusTextInCode = useCallback((text: string) => {
    if (!text) return;
    setCurrentCode((prev) => {
      const matchIndex = findTextIndex(prev, text);
      if (matchIndex >= 0) {
        const lineNumber = prev.substring(0, matchIndex).split('\n').length;
        setHighlightedLine(lineNumber);
        setHighlightVersion((v) => v + 1);
      }
      return prev;
    });
  }, [findTextIndex]);

  const updateTextInCode = useCallback((oldText: string, newText: string) => {
    if (!oldText || oldText === newText) return;

    setCurrentCode((prev) => {
      const singleQuoted = `'${oldText}'`;
      const doubleQuoted = `"${oldText}"`;
      const backtickQuoted = `\`${oldText}\``;

      let updated = prev;
      let matchIndex = -1;

      if (prev.includes(singleQuoted)) {
        matchIndex = prev.indexOf(singleQuoted);
        updated = prev.replace(singleQuoted, `'${newText}'`);
      } else if (prev.includes(doubleQuoted)) {
        matchIndex = prev.indexOf(doubleQuoted);
        updated = prev.replace(doubleQuoted, `"${newText}"`);
      } else if (prev.includes(backtickQuoted)) {
        matchIndex = prev.indexOf(backtickQuoted);
        updated = prev.replace(backtickQuoted, `\`${newText}\``);
      } else if (prev.includes(`>${oldText}<`)) {
        matchIndex = prev.indexOf(`>${oldText}<`);
        updated = prev.replace(`>${oldText}<`, `>${newText}<`);
      } else if (prev.includes(oldText)) {
        matchIndex = prev.indexOf(oldText);
        updated = prev.replace(oldText, newText);
      }

      if (matchIndex >= 0 && updated !== prev) {
        const lineNumber = prev.substring(0, matchIndex).split('\n').length;
        setHighlightedLine(lineNumber);
        setHighlightVersion((v) => v + 1);
      }

      return updated;
    });
  }, []);

  return (
    <ComponentEditorContext.Provider value={{
      activeComponent,
      currentCode,
      highlightedLine,
      highlightVersion,
      openComponent,
      closeComponent,
      updateTextInCode,
      focusTextInCode,
    }}>
      {children}
    </ComponentEditorContext.Provider>
  );
}

export function useComponentEditor() {
  const context = useContext(ComponentEditorContext);
  if (context === undefined) {
    throw new Error('useComponentEditor must be used within a ComponentEditorProvider');
  }
  return context;
}
