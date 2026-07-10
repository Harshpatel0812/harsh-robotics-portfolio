"use client";
export default function PrintButton() { return <button className="button button-primary no-print" onClick={() => window.print()}>Print / Save PDF <span>↓</span></button>; }
