/** Central config — keep in sync with backend/app/core/features.py */

export const APP_URL = 'https://backend-production-9405.up.railway.app';

export const tiers = [
  {
    tier: 'free',
    name: 'Free',
    price: 0,
    priceLabel: 'Kostenlos',
    description: 'Einstieg in die Stundenplanung',
    features: ['1 Benutzer', 'Stammdaten verwalten', '1 Plan generieren', 'Standard-Regelprofile'],
    cta: 'Kostenlos starten',
    highlight: false,
  },
  {
    tier: 'starter',
    name: 'Starter',
    price: 10,
    priceLabel: '10 \u20ac / Monat',
    description: 'Voller Funktionsumfang f\u00fcr kleine Schulen',
    features: ['Bis zu 3 Benutzer', 'Unbegrenzte Pl\u00e4ne', 'Basisplan (Fix + Flexibel)', 'Plan-Audit (Regelpr\u00fcfung)', 'Plan-Editor (Drag & Drop)', 'Eigene Regelprofile'],
    cta: 'Jetzt starten',
    highlight: true,
  },
  {
    tier: 'professional',
    name: 'Professional',
    price: -1,
    priceLabel: 'Auf Anfrage',
    description: 'F\u00fcr gro\u00dfe Schulen mit erweiterten Anforderungen',
    features: ['Unbegrenzte Benutzer', 'Mehrere Planungsperioden', 'PDF-Export & Druck', 'Seed-Datensets (Import/Export)', 'Priorit\u00e4ts-Support'],
    cta: 'Kontakt aufnehmen',
    highlight: false,
  },
] as const;
