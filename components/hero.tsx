import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div 
      className="relative w-full h-screen flex flex-col justify-center bg-[url('https://zqxjnmmnnoowuipnewcz.supabase.co/storage/v1/object/sign/images/hero%20bg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvaGVybyBiZy5wbmciLCJpYXQiOjE3Mzk3MDAxNDQsImV4cCI6MTgwMjc3MjE0NH0.LkpYI5D2v-3wNi5W5fVqD9Pt9E89LuSkverpVpHtyoU')] 
      bg-cover bg-center bg-no-repeat">
  
      {/* Dark Overlay for better contrast (Optional) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content inside Hero Section */}
      <div className="relative z-10 text-white flex flex-col items-start pl-16">
        <h1 className="text-[5rem] font-space">WELCOME TO</h1>
        <h1 className="text-[5rem] font-space">BYTEMORPHIT</h1>

      </div>

      {/* Gradient Overlay (Optional) */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
