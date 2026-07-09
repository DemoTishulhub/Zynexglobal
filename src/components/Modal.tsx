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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-border bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-brand">{product.name}</h3>
          <button
            onClick={onClose}
            className="rounded-md p-1 transition-colors hover:bg-surface"
            aria-label="Close"
          >
            <X size={18} className="text-textMuted" />
          </button>
        </div>

        <div className="divide-y divide-border">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between py-2.5 text-sm"
            >
              <span className="text-textMuted">{spec.label}</span>
              <span className="font-medium text-brand">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h4 className="mb-2 text-sm font-medium text-brand">Applications</h4>
          <div className="flex flex-wrap gap-1.5">
            {product.uses.map((use) => (
              <span
                key={use}
                className="border border-border px-2.5 py-0.5 text-sm text-textMuted"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onInquiry(product.name)}
          className="mt-6 w-full rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
        >
          Send Inquiry
        </button>
      </div>
    </div>
  );
}
