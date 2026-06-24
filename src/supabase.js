import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oejjobjcuexufuwefqx.supabase.co'
const supabaseKey = 'sb_publishable_XVirnUDo9pTYZTIX7q_CnA_vcekCQsg'

export const supabase = createClient(supabaseUrl, supabaseKey)
