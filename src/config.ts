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
    priceLabel: '10 € / Monat',
    description: 'Voller Funktionsumfang für kleine Schulen',
    features: ['Bis zu 3 Benutzer', 'Unbegrenzte Pläne', 'Basisplan (Fix + Flexibel)', 'Plan-Audit (Regelprüfung)', 'Plan-Editor (Drag & Drop)', 'Eigene Regelprofile'],
    cta: 'Jetzt starten',
    highlight: true,
  },
  {
    tier: 'professional',
    name: 'Professional',
    price: -1,
    priceLabel: 'Auf Anfrage',
    description: 'Für große Schulen mit erweiterten Anforderungen',
    features: ['Unbegrenzte Benutzer', 'Mehrere Planungsperioden', 'PDF-Export & Druck', 'Seed-Datensets (Import/Export)', 'Prioritäts-Support'],
    cta: 'Kontakt aufnehmen',
    highlight: false,
  },
] as const;
