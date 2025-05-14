import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://athiimxuuqbupviugmwj.supabase.co'; // replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0aGlpbXh1dXFidXB2aXVnbXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NzQxOTAsImV4cCI6MjA2MjU1MDE5MH0.Eo5Af9yBwuPxrMNBAh1kmR4akwkyEBljj09-xVlEuQA'; // replace with your public anon key

export const supabase = createClient(supabaseUrl, supabaseKey);

