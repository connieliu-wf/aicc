"use client";

import React, { useRef, useCallback, useEffect } from 'react';
import { useComponentEditor } from '@/context/ComponentEditorContext';

interface EditableTextProps {
  /** The current text value displayed and used for code search */
  text: string;
  /** Called when the user finishes editing so the preview can update its own state */
  onTextChange: (newText: string) => void;
  /** HTML tag to render */
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function EditableText({
  text,
  onTextChange,
  as: Tag = 'span',
  className,
  style,
}: EditableTextProps) {
  const { updateTextInCode, focusTextInCode } = useComponentEditor();
  const elRef = useRef<HTMLElement | null>(null);
  const prevTextRef = useRef(text);

  useEffect(() => {
    prevTextRef.current = text;
  }, [text]);

  const handleInput = useCallback(() => {
    const newText = elRef.current?.textContent ?? '';
    const oldText = prevTextRef.current;
    if (newText !== oldText) {
      updateTextInCode(oldText, newText);
      onTextChange(newText);
      prevTextRef.current = newText;
    }
  }, [updateTextInCode, onTextChange]);

  const handleClick = useCallback(() => {
    focusTextInCode(prevTextRef.current);
  }, [focusTextInCode]);

  return (
    // @ts-expect-error - dynamic tag with ref
    <Tag
      ref={elRef}
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      onClick={handleClick}
      className={className}
      style={{
        ...style,
        outline: 'none',
        cursor: 'text',
      }}
      spellCheck={false}
    >
      {text}
    </Tag>
  );
}
