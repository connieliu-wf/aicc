"use client";

import React, { useState, useCallback } from 'react';
import EditableText from './EditableText';
import SelectableElement from './SelectableElement';

interface ComponentPreviewProps {
  componentId: string;
}

function SignupFormPreview() {
  const [heading, setHeading] = useState('Create your account');
  const [step1, setStep1] = useState('Account');
  const [step2, setStep2] = useState('Details');
  const [step3, setStep3] = useState('Confirm');
  const [firstNameLabel, setFirstNameLabel] = useState('First Name');
  const [lastNameLabel, setLastNameLabel] = useState('Last Name');
  const [emailLabel, setEmailLabel] = useState('Email Address');
  const [passwordLabel, setPasswordLabel] = useState('Password');
  const [buttonText, setButtonText] = useState('Continue');

  return (
    <SelectableElement codeMarker="signup-form" displayName="Form Container" className="w-full max-w-[600px] mx-auto bg-white rounded-lg p-10 shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
      <EditableText
        text={heading}
        onTextChange={setHeading}
        as="h2"
        className="text-[22px] font-semibold text-gray-900 mb-1"
      />
      <p className="text-[13px] text-gray-400 mb-6">
        N 1 of 3 &rarr; {step1}
      </p>

      <SelectableElement codeMarker="h-px bg-gray" displayName="Divider" className="w-full h-px bg-gray-200 mb-8" />

      {/* Step indicator */}
      <SelectableElement codeMarker="step-indicator" displayName="Step Indicator" className="flex items-center justify-between mb-10 px-4">
        <div className="flex flex-col items-center gap-2">
          <SelectableElement codeMarker='label="Account"' displayName="Step 1 Dot" className="w-8 h-8 rounded-full bg-[#e85533] text-white flex items-center justify-center text-[13px] font-medium">
            1
          </SelectableElement>
          <EditableText
            text={step1}
            onTextChange={setStep1}
            as="span"
            className="text-[12px] font-medium text-[#e85533]"
          />
        </div>

        <div className="flex-1 h-px bg-gray-200 mx-4" />

        <div className="flex flex-col items-center gap-2">
          <SelectableElement codeMarker='label="Details"' displayName="Step 2 Dot" className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-[13px] font-medium">
            2
          </SelectableElement>
          <EditableText
            text={step2}
            onTextChange={setStep2}
            as="span"
            className="text-[12px] text-gray-400"
          />
        </div>

        <div className="flex-1 h-px bg-gray-200 mx-4" />

        <div className="flex flex-col items-center gap-2">
          <SelectableElement codeMarker='label="Confirm"' displayName="Step 3 Dot" className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-[13px] font-medium">
            3
          </SelectableElement>
          <EditableText
            text={step3}
            onTextChange={setStep3}
            as="span"
            className="text-[12px] text-gray-400"
          />
        </div>
      </SelectableElement>

      {/* Form fields */}
      <SelectableElement codeMarker="fields-grid" displayName="Form Fields" className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-medium text-gray-700 mb-1 uppercase tracking-wide">
              <EditableText text={firstNameLabel} onTextChange={setFirstNameLabel} />
              {' '}<span className="text-[#e85533]">*</span>
            </label>
            <SelectableElement codeMarker="update('firstName'" displayName="First Name Input">
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-200 rounded-md text-[14px] bg-white text-gray-900 outline-none focus:border-gray-400"
                readOnly
              />
            </SelectableElement>
          </div>
          <div>
            <label className="block text-[11px] font-medium text-gray-700 mb-1 uppercase tracking-wide">
              <EditableText text={lastNameLabel} onTextChange={setLastNameLabel} />
            </label>
            <SelectableElement codeMarker="update('lastName'" displayName="Last Name Input">
              <input
                type="text"
                className="w-full h-10 px-3 border border-gray-200 rounded-md text-[14px] bg-white text-gray-900 outline-none"
                readOnly
              />
            </SelectableElement>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-gray-700 mb-1 uppercase tracking-wide">
            <EditableText text={emailLabel} onTextChange={setEmailLabel} />
            {' '}<span className="text-[#e85533]">*</span>
          </label>
          <SelectableElement codeMarker='type="email"' displayName="Email Input">
            <input
              type="email"
              className="w-full h-10 px-3 border border-gray-200 rounded-md text-[14px] bg-white text-gray-900 outline-none"
              readOnly
            />
          </SelectableElement>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-gray-700 mb-1 uppercase tracking-wide">
            <EditableText text={passwordLabel} onTextChange={setPasswordLabel} />
            {' '}<span className="text-gray-400">(min 8 chars)</span>
          </label>
          <SelectableElement codeMarker='type="password"' displayName="Password Input">
            <input
              type="password"
              className="w-full h-10 px-3 border border-gray-200 rounded-md text-[14px] bg-white text-gray-900 outline-none"
              readOnly
            />
          </SelectableElement>
        </div>
      </SelectableElement>

      {/* Continue button */}
      <SelectableElement codeMarker='className="primary"' displayName="Submit Button">
        <button className="w-full h-11 mt-8 rounded-md bg-[#e85533] text-white text-[14px] font-medium cursor-default hover:bg-[#d44a2a] transition-colors">
          <EditableText text={buttonText} onTextChange={setButtonText} />
        </button>
      </SelectableElement>
    </SelectableElement>
  );
}

function PricingPreview() {
  const [title, setTitle] = useState('Choose Your Plan');
  const [basic, setBasic] = useState('Basic');
  const [pro, setPro] = useState('Pro');
  const [enterprise, setEnterprise] = useState('Enterprise');

  const plans = [
    { name: basic, price: '$29/mo', active: true, setName: setBasic, codeMarker: "id: 'basic'" },
    { name: pro, price: '$59/mo', active: false, setName: setPro, codeMarker: "id: 'pro'" },
    { name: enterprise, price: '$99/mo', active: false, setName: setEnterprise, codeMarker: "id: 'enterprise'" },
  ];

  return (
    <SelectableElement codeMarker="pricing-calculator" displayName="Pricing Container" className="w-full max-w-[500px] mx-auto bg-white rounded-lg p-8 shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
      <EditableText
        text={title}
        onTextChange={setTitle}
        as="h2"
        className="text-[22px] font-semibold text-gray-900 mb-6"
      />
      <SelectableElement codeMarker="plan-list" displayName="Plan List" className="space-y-3">
        {plans.map((plan) => (
          <SelectableElement
            key={plan.name}
            codeMarker={plan.codeMarker}
            displayName={`${plan.name} Plan`}
            className={`flex items-center justify-between p-4 rounded-lg border-2 ${plan.active ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
          >
            <EditableText
              text={plan.name}
              onTextChange={plan.setName}
              as="span"
              className="text-[14px] font-medium text-gray-900"
            />
            <span className="text-[14px] text-gray-500">{plan.price}</span>
          </SelectableElement>
        ))}
      </SelectableElement>
      <SelectableElement codeMarker="total-price" displayName="Total Price" className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
        <span className="text-[13px] text-gray-500">Total: </span>
        <span className="text-[20px] font-semibold text-gray-900">$29</span>
        <span className="text-[13px] text-gray-500">/month</span>
      </SelectableElement>
    </SelectableElement>
  );
}

function ContactFormPreview() {
  const [title, setTitle] = useState('Get in Touch');
  const [buttonText, setButtonText] = useState('Send Message');

  return (
    <SelectableElement codeMarker="contact-form" displayName="Contact Form" className="w-full max-w-[500px] mx-auto bg-white rounded-lg p-8 shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
      <EditableText
        text={title}
        onTextChange={setTitle}
        as="h2"
        className="text-[22px] font-semibold text-gray-900 mb-6"
      />
      <div className="space-y-4">
        <SelectableElement codeMarker='placeholder="Your name"' displayName="Name Input">
          <input className="w-full h-10 px-3 border border-gray-200 rounded-md text-[14px] bg-white text-gray-400" placeholder="Your name" readOnly />
        </SelectableElement>
        <SelectableElement codeMarker='placeholder="Email"' displayName="Email Input">
          <input className="w-full h-10 px-3 border border-gray-200 rounded-md text-[14px] bg-white text-gray-400" placeholder="Email" readOnly />
        </SelectableElement>
        <SelectableElement codeMarker='placeholder="Subject"' displayName="Subject Input">
          <input className="w-full h-10 px-3 border border-gray-200 rounded-md text-[14px] bg-white text-gray-400" placeholder="Subject" readOnly />
        </SelectableElement>
        <SelectableElement codeMarker='placeholder="Message"' displayName="Message Textarea">
          <textarea className="w-full h-24 px-3 py-2 border border-gray-200 rounded-md text-[14px] bg-white text-gray-400 resize-none" placeholder="Message" readOnly />
        </SelectableElement>
      </div>
      <SelectableElement codeMarker='type="submit"' displayName="Submit Button">
        <button className="w-full h-11 mt-6 rounded-md bg-gray-900 text-white text-[14px] font-medium cursor-default">
          <EditableText text={buttonText} onTextChange={setButtonText} />
        </button>
      </SelectableElement>
    </SelectableElement>
  );
}

function GenericPreview({ name }: { name: string }) {
  return (
    <div className="w-full max-w-[400px] mx-auto bg-white rounded-lg p-8 shadow-sm text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-100 flex items-center justify-center">
        <span className="text-[24px] text-gray-400">&lt;/&gt;</span>
      </div>
      <h3 className="text-[18px] font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-[13px] text-gray-400">Component preview</p>
    </div>
  );
}

const previewMap: Record<string, React.FC> = {
  'signup-form': SignupFormPreview,
  'pricing-calculator': PricingPreview,
  'contact-form': ContactFormPreview,
};

export default function ComponentPreview({ componentId }: ComponentPreviewProps) {
  const Preview = previewMap[componentId];

  return (
    <div className="h-full flex items-center justify-center p-8 overflow-auto bg-[var(--bg-secondary)]">
      {Preview ? <Preview /> : <GenericPreview name={componentId} />}
    </div>
  );
}
