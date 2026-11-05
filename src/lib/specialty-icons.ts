import type { LucideIcon } from 'lucide-react'
import { Baby, HeartHandshake, Stethoscope, Syringe } from 'lucide-react'
import type { SpecialtySlug } from '@/lib/content'

/**
 * One source for the specialty icon. A wrong pairing used to show up in one
 * place only; now it would be wrong everywhere, so keep the meaning obvious:
 * stethoscope for the clinical exam, syringe for surgery, hands for obstetric
 * care, baby for paediatrics.
 */
export const specialtyIcons: Record<SpecialtySlug, LucideIcon> = {
  'internal-medicine': Stethoscope,
  'gastrointestinal-surgery': Syringe,
  'obstetrics-gynecology': HeartHandshake,
  pediatrics: Baby,
}
