import { createClient } from '@supabase/supabase-js'

const URL = 'https://jonedodvrbbqktkltyix.supabase.co'
const API_KEY = 'sb_publishable_R5bFMapbr65mMTr854uJIQ_c9Zn5ezC'

export const supabase = createClient(URL, API_KEY)