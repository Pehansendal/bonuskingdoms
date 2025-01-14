import { supabase } from './supabase'
import { AffiliateData } from '@/types/affiliate'

export async function getAffiliateData(): Promise<AffiliateData[]> {
  const { data, error } = await supabase
    .from('casinos')
    .select('*')
    .order('position')

  if (error) {
    console.error('Error fetching casinos:', error)
    return []
  }

  return data || []
}

export async function saveAffiliateData(casino: AffiliateData): Promise<void> {
  const { error } = await supabase
    .from('casinos')
    .insert([casino])

  if (error) {
    throw new Error('Failed to save casino data')
  }
} 