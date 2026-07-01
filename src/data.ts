import { Project, Certificate, ExperienceItem, SkillItem } from './types';

export const personalInfo = {
  name: 'Nisrina Atalie Wijaya',
  title: 'Mahasiswi | Graphic Designer | Video Editor',
  tagline: 'Menggabungkan kreativitas desain grafis dan seni editing video untuk menciptakan karya visual yang berdampak, estetik, dan profesional.',
  bio: 'Saya adalah seorang mahasiswi yang berdedikasi tinggi dengan hasrat mendalam di dunia kreatif, khususnya Desain Grafis dan Editing Video. Berbekal pengalaman kepemimpinan sebagai Advisory Council Staff di Pondok Modern Darussalam Gontor Putri, saya terlatih untuk bekerja secara disiplin, terorganisir, dan mampu beradaptasi dalam lingkungan yang dinamis. Saya selalu bersemangat untuk mengubah ide abstrak menjadi karya visual yang luar biasa.',
  avatar: '/src/assets/images/profil.41.53.jpeg',
  cvUrl: '#', // We will make a custom modal or print trigger to download as elegant PDF or direct simulated file!
  socials: {
    instagram: 'https://instagram.com/nsnatalie_',
    email: 'mailto:nsrnthalia@gmail.com',
    whatsapp: 'https://wa.me/6282228523498'
  },
  stats: [
    { label: 'Tahun Pengalaman', value: '2025 - 2026' },
    { label: 'Proyek Selesai', value: '50+' },
    { label: 'Jam Editing', value: '300+' },
    { label: 'Tingkat Kepuasan', value: '100%' }
  ]
};

export const skills: SkillItem[] = [
  { name: 'Graphic Design', level: 90, category: 'Design', iconName: 'Palette' },
  { name: 'Canva Pro', level: 95, category: 'Design', iconName: 'Layers' },
  { name: 'Video Editing', level: 85, category: 'Technical', iconName: 'Video' },
  { name: 'Public Speaking', level: 88, category: 'Other', iconName: 'Mic' },
  { name: 'English', level: 85, category: 'Language', iconName: 'Languages' },
  { name: 'Arabic', level: 80, category: 'Language', iconName: 'BookOpen' }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Advisory Council Staff (Pengurus Bagian Konsulat)',
    organization: 'Pondok Modern Darussalam Gontor Putri Kampus 8',
    duration: '2025 - 2026',
    location: 'Labuhanbatu, Sumatera Utara',
    description: [
      'Bertanggung jawab penuh atas seluruh kegiatan, pembinaan karakter, keamanan, dan penyelesaian berbagai permasalahan santriwati di Pondok Modern Darussalam Gontor Putri Kampus 8.',
      'Mengoordinasikan acara-acara besar tahunan, pentas seni, dan perlombaan internal pondok.',
      'Mengelola komunikasi dan koordinasi antar bagian pengurus serta laporan berkala kepada jajaran pengasuh pondok.',
      'Memimpin lebih dari 500+ santriwati untuk memastikan kedisiplinan dan kelancaran kegiatan harian.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Harmonisasi Alam',
    description: 'Poster eksklusif dengan tema keselarasan alam, menggabungkan bentuk abstrak fluid dan warna bumi.',
    longDescription: 'Sebuah karya poster seni grafis premium yang mengeksplorasi hubungan mendalam antara manusia dan alam semesta melalui representasi bentuk fluida abstrak, garis-garis organik, dan palet warna bumi premium dengan aksen emas yang anggun.',
    category: 'Poster',
    image: '/src/assets/images/portfolio_poster_1782868747857.jpg',
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Digital Painting'],
    year: '2025',
    role: 'Lead Graphic Designer'
  },
  {
    id: 'proj2',
    title: 'Aura Corp Brand Identity',
    description: 'Identitas logo minimalis modern untuk perusahaan kreatif dengan sentuhan elegan.',
    longDescription: 'Proyek perancangan logo dan identitas visual komprehensif yang menampilkan logo geometris bersih. Didesain menggunakan prinsip rasio emas untuk memastikan keselarasan visual yang sempurna dan kesan profesional yang mendalam untuk representasi bisnis modern.',
    category: 'Logo',
    image: '/src/assets/images/portfolio_logo_1782868760698.jpg',
    technologies: ['Vector Design', 'Adobe Illustrator', 'Brand System'],
    year: '2025',
    role: 'Brand Identity Designer'
  },
  {
    id: 'proj3',
    title: 'Social Media Campaign - Gontor Putri',
    description: 'Desain feed Instagram estetik dan informatif untuk publikasi kegiatan di Pondok Gontor Putri.',
    longDescription: 'Serangkaian konten media sosial yang dikonsep secara strategis untuk meningkatkan engagement santriwati dan masyarakat. Desain ini mengedepankan keterbacaan tinggi, perpaduan warna biru tua dan putih yang konsisten, dan tata letak modern.',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    technologies: ['Canva Pro', 'Figma', 'Social Media Strategy'],
    year: '2026',
    role: 'Content Creator & Layout Designer'
  },
  {
    id: 'proj4',
    title: 'Laporan Tahunan & Presentasi Interaktif',
    description: 'Desain slide presentasi profesional untuk laporan evaluasi tahunan organisasi.',
    longDescription: 'Dek presentasi modern yang dirancang untuk menyampaikan data laporan evaluasi secara visual dan intuitif. Menggunakan infografis dinamis, hirarki tipografi yang kuat, dan transisi slide yang mulus untuk menjaga audiens tetap fokus.',
    category: 'Presentation',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    technologies: ['Microsoft PowerPoint', 'Canva', 'Data Visualization'],
    year: '2025',
    role: 'Lead Slides Designer & Editor'
  },
  {
    id: 'proj5',
    title: 'Profil Pondok Gontor Putri Kampus 8',
    description: 'Video dokumenter profil singkat kehidupan santriwati Pondok Gontor Putri.',
    longDescription: 'Video promosi dan dokumentasi berdurasi 5 menit yang menyoroti kehidupan sehari-hari, kedisiplinan, dan kegiatan ekstrakurikuler santriwati. Dilengkapi dengan transisi dinamis, color grading sinematik, dan sinkronisasi audio yang presisi.',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    technologies: ['CapCut Pro', 'Adobe Premiere Pro', 'Sound Design'],
    year: '2026',
    role: 'Video Editor & Director'
  },
  {
    id: 'proj6',
    title: 'E-Book Panduan Edukasi Santriwati',
    description: 'Desain tata letak buku panduan edukatif dengan gaya bersih, elegan, dan ilustratif.',
    longDescription: 'Layout buku panduan internal yang dirancang khusus dengan memperhatikan whitespace yang nyaman, tipografi yang ramah pembaca, dan ilustrasi penjelas. Membuat proses belajar kepemimpinan menjadi lebih menyenangkan dan informatif.',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    technologies: ['Adobe InDesign', 'Vector Illustration', 'Typography Layout'],
    year: '2025',
    role: 'Graphic Designer'
  }
];

export const certificates: Certificate[] = [
  {
    id: 'cert1',
    title: 'Sertifikat Penghargaan Advisory Council Staff',
    issuer: 'Pondok Modern Darussalam Gontor Putri Kampus 8',
    date: 'Maret 2026',
    image: '/src/assets/images/certificate_mock_1782868747857.jpg', // We can use either certificate mockup or generated poster for diversity
    description: 'Diberikan sebagai penghargaan atas dedikasi, kedisiplinan, dan kontribusi luar biasa dalam memimpin organisasi kepengurusan santriwati Gontor Putri Kampus 8 periode 2025 - 2026.'
  },
  {
    id: 'cert2',
    title: 'Sertifikat Kelulusan Pendidikan Gontor Putri Kampus 1',
    issuer: 'Pondok Modern Darussalam Gontor Putri Kampus 1',
    date: 'Mei 2025',
    image: '/src/assets/images/certificate_mock_1782868774476.jpg',
    description: 'Sertifikat resmi kelulusan pendidikan tingkat menengah atas (Kulliyatu-l-Mu\'allimat al-Islamiyyah) dengan predikat sangat baik, membuktikan penguasaan bahasa Arab dan Inggris secara aktif.'
  },
  {
    id: 'cert3',
    title: 'Creative Design & Visual Communication Masterclass',
    issuer: 'Creative Academy Indonesia',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80',
    description: 'Sertifikat kompetensi profesional dalam menguasai prinsip desain grafis, psikologi warna, penataan grid layout, serta integrasi aset visual digital untuk media sosial.'
  }
];
