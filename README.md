# 💖 Moonly: Your Digital Love Letter

This is a modern, romantic, and visually stunning web app designed to express your feelings and make her smile.

## ✨ Features
- **Hero Reveal**: Animated typing effects and a playful invitation.
- **Heartfelt Apology**: Word-by-word animated reveal of your personal message.
- **Reasons I Love You**: Interactive cards with romantic icons.
- **Cute Pickup Lines**: A rotating carousel of sweet (and cheesy) lines.
- **Memories Gallery**: A premium grid with a lightbox preview for your favorite photos.
- **Forgive Me Interaction**: Playful "Yes/No" buttons where the "No" button tries to escape!
- **Secret Message**: A password-protected section for your most personal promise.
- **Reply Form**: A dedicated space for her to message you back (stored in Supabase).
- **Background Music**: Romantic instrumental piano track (toggleable).
- **Aesthetics**: Floating hearts, sparkles, cursor trails, and heart confetti.

## 🚀 Tech Stack
- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Framer Motion (Animations)
- **Backend/DB**: Supabase (for replies and memories)
- **Icons**: Lucide React
- **Confetti**: Canvas-Confetti

## 🛠️ Setup Instructions

### 1. Supabase Integration
Create a new project on [Supabase](https://supabase.com/) and run the following SQL in the SQL Editor:

```sql
-- Table for replies from her
CREATE TABLE replies (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for memories (if you want to automate the gallery later)
CREATE TABLE memories (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  image_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 2. Environment Variables
Rename `.env.example` to `.env.local` and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Personalization
- **Love Letter**: Edit `src/components/LoveLetter.tsx` with your sincere feelings.
- **Secret Message**: The password is set to `"nick"` by default in `src/components/SecretMessage.tsx`. You can change it to her actual nickname there.
- **Photos**: Update the image URLs in `src/components/Gallery.tsx`.

## 🚢 Deployment (Vercel)
1. Push your code to a GitHub repository.
2. Link the repository to [Vercel](https://vercel.com/).
3. Add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as environment variables in the Vercel dashboard.
4. Deploy!

---
Made with ❤️ by Moonly
