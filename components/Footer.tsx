"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-charcoal-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ethio-green text-[10px] font-bold text-white">
              AC
            </span>
            <div>
              <p className="text-sm font-semibold text-white">AddisCharge</p>
              <p className="text-xs text-muted">{t.footer.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-muted sm:text-right">
            {t.footer.note}
          </p>
        </div>
        <p className="border-t border-charcoal-border pt-4 text-[11px] leading-relaxed text-muted/80">
          {t.footer.photoCredit}
        </p>
      </div>
    </footer>
  );
}
