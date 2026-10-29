window.VNA = {
  version: "1.3.9",
  trialDays: 7,
  links: {
    download: "https://github.com/nabilvai665-sys/vna-website/releases/download/v1.3.8/VnADownloadManager_Setup_v1.3.9_64bit.exe",
    telegram: "https://t.me/vnadownloadmanager",
    facebook: "https://www.facebook.com/profile.php?id=61594359344153",
    youtube: "https://www.youtube.com/@vnadownloadmanager",
    chrome: "https://chromewebstore.google.com/detail/vna-download-manager/cagpaeglpolpaaldpgmfplimncfhjddi",
    edge: "https://microsoftedge.microsoft.com/addons/detail/vna-download-manager/hgklihmfldpcnaeagfkafigndlgbldpd",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/vna-download-manager/"
  },
  changelog: `NEW
1. 7-day free trial
2. Language switcher in the activation window
3. Official Links in the Help menu
4. Site Test editor for stuck or slow sites
5. Optional diagnostic logging in Settings
6. Right-click download for images and audio

FASTER
7. YouTube quality list loads faster
8. Facebook and Instagram video detection is faster

IMPROVED
9. MediaFire and more file-sharing sites now work better
10. Better Facebook, Instagram, TikTok and X downloads
11. Better video file names
12. Download button now stays on the video player
13. No download button on protected videos
14. Clearer messages when antivirus blocks an update or a quality is unavailable
15. License messages now in Bengali and Hindi

PRIVACY
16. Error reports hide passwords and cookies
17. Logs are deleted automatically after sending`,
  videos: [
    { t: "Windows 10 ও Windows 11-এ VnA ইনস্টল করার সম্পূর্ণ গাইড", c: "ইনস্টলেশন", yt: "CV7h-UPExnY" },
    { t: "লিংক পেস্ট করে ডাউনলোড শুরু", c: "শুরু করুন", f: "videos/01-paste-link.mp4" },
    { t: "ভিডিওর কোয়ালিটি বেছে নেওয়া", c: "শুরু করুন", f: "videos/02-video-quality.mp4" },
    { t: "ব্রাউজার এক্সটেনশন ইনস্টল", c: "এক্সটেনশন", f: "videos/03-install-extension.mp4" },
    { t: "Hidden/Streaming ভিডিও নামানো", c: "এক্সটেনশন", f: "videos/04-hidden-video.mp4" },
    { t: "ব্যাচ ডাউনলোড", c: "ডাউনলোড", f: "videos/05-batch.mp4" },
    { t: "প্লেলিস্ট ডাউনলোড", c: "ডাউনলোড", f: "videos/06-playlist.mp4" },
    { t: "Site Grabber ব্যবহার", c: "ডাউনলোড", f: "videos/07-site-grabber.mp4" },
    { t: "টরেন্ট সার্চ ও ডাউনলোড", c: "ডাউনলোড", f: "videos/08-torrent.mp4" },
    { t: "MP3 কনভার্ট", c: "টুলস", f: "videos/09-mp3.mp4" },
    { t: "নষ্ট অংশ Repair", c: "টুলস", f: "videos/10-repair.mp4" },
    { t: "Proxy সেটআপ", c: "সেটিংস", f: "videos/11-proxy.mp4" },
    { t: "Scheduler চালু করা", c: "সেটিংস", f: "videos/12-scheduler.mp4" }
  ],
  features: [
    { n: "ডাউনলোড", e: "⚡", t: "আরও দ্রুত, আরও নিয়ন্ত্রণে", i: [
      ["মাল্টি-কানেকশন", "একটা ফাইল একসাথে অনেক অংশে নামে। ২ থেকে ৩২ কানেকশন বেছে নেওয়া যায়, অটো মোডও আছে।"],
      ["Pause, Resume ও Stop", "যখন খুশি থামান, আবার চালান।"],
      ["স্পিড লিমিট", "ইন্টারনেটের বাকি কাজের জন্য স্পিড সীমা দিন।"],
      ["লাইভ চাংক ম্যাপ", "ফাইলের কোন অংশ কতটা নামল ছবির মতো দেখুন।"],
      ["ভিডিও কোয়ালিটি", "পছন্দমতো কোয়ালিটি বেছে নিন, ভিডিও ও অডিও আলাদাও নামানো যায়।"],
      ["Streaming ভিডিও", "HLS ও DASH স্ট্রিমও সাপোর্ট করে।"]
    ] },
    { n: "লিংক যোগ", e: "🔗", t: "লিংক দেওয়ার সহজ উপায়", i: [
      ["ক্লিপবোর্ড মনিটর", "লিংক কপি করলেই অ্যাপ ধরে ফেলে।"],
      ["Batch Download", "অনেক লিংক একসাথে যোগ করুন।"],
      ["Playlist Download", "পুরো প্লেলিস্ট থেকে পছন্দের আইটেম বেছে নামান।"],
      ["Site Grabber", "একটা পেজের সব ডাউনলোডযোগ্য ফাইল খুঁজে ক্যাটাগরি অনুযায়ী দেখায়।"],
      ["Torrent", "নাম লিখে সার্চ করুন, magnet লিংকেও কাজ করে।"],
      ["Silent Mode", "পপআপ ছাড়া শুধু নোটিফিকেশন।"]
    ] },
    { n: "এক্সটেনশন", e: "🧩", t: "ব্রাউজারেই ডাউনলোড", i: [
      ["৬টি ব্রাউজার", "Chrome, Edge, Firefox, Brave, Opera, Vivaldi। অন্য ব্রাউজারও যোগ করা যায়।"],
      ["অটো ক্যাচ", "ব্রাউজারের ডাউনলোড নিজে অ্যাপে চলে আসে।"],
      ["ভিডিওর উপর বাটন", "ভিডিওর কোণায় ছোট ডাউনলোড বাটন আসে।"],
      ["ডান-ক্লিক মেনু", "Hidden/Streaming ভিডিও ও সব লিংক ডাউনলোডের অপশন।"],
      ["লগইন সাইট", "লগইন লাগে এমন সাইটের ফাইলও নামে।"],
      ["ON/OFF", "এক ক্লিকে এক্সটেনশন চালু বা বন্ধ।"]
    ] },
    { n: "টুলস", e: "🛠️", t: "ডাউনলোডের পরেও কাজে লাগে", i: [
      ["ক্যাটাগরি সাজানো", "Video, Music, Pictures, Programs, Compressed ফোল্ডারে ফাইল নিজে সাজায়।"],
      ["Refresh Download Address", "লিংকের মেয়াদ শেষ হলে নতুন লিংকে চালিয়ে নেয়।"],
      ["Repair ও Re-check", "নষ্ট অংশ ঠিক করে ডাউনলোড সম্পূর্ণ করে।"],
      ["MP3 কনভার্ট", "ভিডিও বা অডিও ফাইল MP3 বানান।"],
      ["Checksum ও স্ক্যান", "SHA-256 যাচাই ও Windows Defender স্ক্যান।"],
      ["Analytics", "কত GB নামালেন, কোন ধরনের ফাইল বেশি, চার্টে দেখুন।"]
    ] },
    { n: "সেটিংস", e: "⚙️", t: "নিজের মতো করে সাজান", i: [
      ["Scheduler", "নির্দিষ্ট সময়ে কিউ শুরু, একসাথে কয়টা চলবে তাও ঠিক করুন।"],
      ["Global Proxy", "SOCKS5 সহ প্রক্সি ও Test Proxy বাটন।"],
      ["থিম", "Dark, Light ও Glass।"],
      ["তিন ভাষা", "বাংলা, English ও हिंदी, এরর মেসেজও সহজ ভাষায়।"],
      ["অটো আপডেট", "নতুন Version এলে চেঞ্জলগসহ জানায়।"],
      ["নোটিফিকেশন", "ডাউনলোড শেষে ডায়ালগ ও সাউন্ড।"]
    ] }
  ]
};
