'use client';

import { useState } from 'react';

export default function CopyButton({ text, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button className="btn" style={{ padding: '0.4rem 0.7rem', fontSize: '0.85rem' }} onClick={onCopy}>
      {copied ? 'Copied!' : label}
    </button>
  );
}
