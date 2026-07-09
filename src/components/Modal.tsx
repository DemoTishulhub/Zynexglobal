"use client";

import { X } from "lucide-react";

interface ProductSpec {
  label: string;
  value: string;
}

interface Product {
  name: string;
  slug: string;
  varieties: string;
  dryingMethods: string;
  moisture: string;
  purity: string;
  color: string;
  shelfLife: string;
  packaging: string;
  uses: string[];
}

interface ModalProps {
  product: Product | null;
  onClose: () => void;
  onInquiry: (productName: string) => void;
}

export default function ProductModal({
  product,
  onClose,
  onInquiry,
}: ModalProps) {
  if (!product) return null;

  const specs: ProductSpec[] = [
    { label: "Varieties", value: product.varieties },
    { label: "Drying Methods", value: product.dryingMethods },
    { label: "Moisture", value: product.moisture },
    ...(product.purity ? [{ label: "Purity", value: product.purity }] : []),
    { label: "Color", value: product.color },
    { label: "Shelf Life", value: product.shelfLife },
    { label: "Packaging", value: product.packaging },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-bold text-brand">{product.name}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 transition-colors hover:bg-surface"
            aria-label="Close"
          >
            <X size={20} className="text-textMuted" />
          </button>
        </div>

        <div className="space-y-3">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between border-b border-border pb-2 text-sm"
            >
              <span className="text-textMuted">{spec.label}</span>
              <span className="font-semibold text-brand">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-brand">Applications</h4>
          <div className="flex flex-wrap gap-2">
            {product.uses.map((use) => (
              <span
                key={use}
                className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-medium text-textMuted"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onInquiry(product.name)}
          className="mt-6 w-full rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.98]"
        >
          Send Inquiry
        </button>
      </div>
    </div>
  );
}
