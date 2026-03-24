"use client";

import { useState } from "react";

const TOKENS = ["USDC", "USDT"] as const;
type Token = (typeof TOKENS)[number];

export default function DexWidget() {
  const [sellToken, setSellToken] = useState<Token>("USDC");
  const [buyToken, setBuyToken] = useState<Token>("USDT");
  const [sellAmount, setSellAmount] = useState("");

  return (
    <div className="w-full max-w-sm rounded-2xl bg-surface border border-border p-4 flex flex-col gap-3">
      {/* Sell box */}
      <div className="relative rounded-xl bg-background border border-border p-4 flex flex-col gap-2">
        <span className="text-xs font-medium text-muted uppercase tracking-wide">
          Sell
        </span>
        <div className="pr-24">
          <input
            type="number"
            min="0"
            placeholder="0.00"
            value={sellAmount}
            onChange={(e) => setSellAmount(e.target.value)}
            className="h-11 min-w-0 flex-1 bg-transparent text-2xl font-semibold text-foreground placeholder-muted outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <TokenSelect value={sellToken} onChange={setSellToken} />
        </div>
      </div>

      {/* Buy box */}
      <div className="relative rounded-xl bg-background border border-border p-4 flex flex-col gap-2">
        <span className="text-xs font-medium text-muted uppercase tracking-wide">
          Buy
        </span>
        <div className="pr-24">
          <span className="flex h-11 flex-1 items-center text-2xl font-semibold text-foreground">
            {sellAmount || <span className="text-muted">0.00</span>}
          </span>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <TokenSelect value={buyToken} onChange={setBuyToken} />
        </div>
      </div>

      {/* Swap button */}
      <button
        type="button"
        onClick={() => alert("Swap!")}
        className="w-full rounded-xl bg-accent hover:bg-accent-hover transition-colors py-3 text-base font-semibold text-white"
      >
        Swap
      </button>
    </div>
  );
}

function TokenSelect({
  value,
  onChange,
}: {
  value: Token;
  onChange: (t: Token) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Token)}
      className="h-14 shrink-0 self-center rounded-lg bg-surface border border-border px-3.5 text-sm font-medium leading-[3.5rem] text-foreground outline-none cursor-pointer hover:border-accent transition-colors"
    >
      {TOKENS.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}
