import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Award, ChevronDown, Zap, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      role: "Full Stack Developer Intern (Program Magang Nasional)",
      company: "PT. Industri Kereta Api (Persero)",
      period: "November 2025 – Mei 2026",
      points: [
        "Mengembangkan dan memelihara aplikasi web internal perusahaan menggunakan teknologi front-end dan back-end.",
        "Mengerjakan implementasi fitur antarmuka pengguna (UI) serta logika server sesuai kebutuhan sistem.",
        "Melakukan integrasi database dan REST API untuk mendukung fungsionalitas aplikasi.",
        "Berkolaborasi dengan tim dalam proses pengembangan, pengujian, dan perbaikan bug.",
        "Menggunakan tools version control untuk pengelolaan kode dan kolaborasi tim."
      ],
      icon: "🚂",
      color: "purple"
    },
    {
      role: "Magang IT Staff",
      company: "Dinas Kesehatan Kota Semarang",
      period: "Januari 2023 – Maret 2023",
      points: [
        "Mendukung kelancaran operasional sistem informasi kesehatan daerah.",
        "Mengelola data dan membantu troubleshooting sistem dengan koordinasi tim.",
        "Menyusun laporan teknis untuk mendukung pengambilan keputusan."
      ],
      icon: "🏥",
      color: "blue"
    },
    {
      role: "Relawan Data Entry",
      company: "Program Vaksinasi COVID-19",
      period: "Juli 2021 – Agustus 2021",
      points: [
        "Memasukkan dan memverifikasi data ribuan peserta vaksinasi dengan teliti.",
        "Mendukung kelancaran administrasi program berskala besar.",
        "Berkolaborasi dengan tim medis dan administrasi untuk menjaga akurasi data."
      ],
      icon: "💉",
      color: "green"
    }
  ];

  const projects = [
    {
      title: "IoT Monitoring Kompresor",
      description: "Sistem monitoring real-time untuk kompresor berbasis IoT di PT INKA. Berkolaborasi dengan tim hardware untuk mengintegrasikan data sensor IoT ke dashboard monitoring dengan alert system untuk maintenance prediktif.",
      tech: ["Laravel", "MySQL", "Chart.js", "REST API", "IoT Integration"],
      company: "PT INKA (Persero)",
      status: "In Development",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop"
    },
    {
      title: "Central Tools",
      description: "Sistem manajemen proyek dan material terintegrasi dengan dashboard analytics di PT INKA. Menampilkan data real-time untuk SPM, Proyek, Rencana, BPM, dan BPRM.",
      tech: ["Laravel", "MySQL", "Bootstrap", "REST API", "Dashboard Analytics"],
      company: "PT INKA (Persero)",
      status: "Production",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Rimba Lestari Coffee",
      description: "Website untuk UMKM kopi lokal Desa Cemoro, Temanggung yang dikembangkan saat program KKN. Menampilkan berbagai jenis kopi dengan informasi proses pengolahan.",
      tech: ["Google Sites", "HTML", "CSS", "JavaScript", "WhatsApp Integration"],
      company: "Kuliah Kerja Nyata",
      status: "Live",
      icon: "☕",
      link: "https://sites.google.com/view/rimba-lestari-coffee/beranda",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop"
    },
    {
      title: "Chat Bot Assistant",
      description: "Membantu membalas pesan secara otomatis dengan menggunakan AI, yang hampir sama sistemnya dengan model chat gpt yang bisa menjawab apapun",
      tech: ["Python","Groq API", "WhatsApp Integration"],
      company: "Personal Project",
      status: "Production",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1718241905462-56e7b9f722f3?w=500&auto=format&fit=crop"
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const colorMap = {
    purple: {
      dot: "bg-purple-500",
      border: "border-purple-500/20 hover:border-purple-500/50",
      badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      line: "bg-purple-500/30"
    },
    blue: {
      dot: "bg-blue-500",
      border: "border-blue-500/20 hover:border-blue-500/50",
      badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      line: "bg-blue-500/30"
    },
    green: {
      dot: "bg-green-500",
      border: "border-green-500/20 hover:border-green-500/50",
      badge: "bg-green-500/10 text-green-300 border-green-500/30",
      line: "bg-green-500/30"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ASA
            </div>
            
            <div className="hidden md:flex space-x-1">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all capitalize"
                >
                  {section}
                </button>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="text-purple-400 text-lg">👋 Hello, I'm</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              ABHITAH SIGA
            </span>
            <br />
            <span className="text-4xl md:text-6xl">AL FATHIR</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6">
            <span className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30">
              <Code className="text-purple-400" size={28} />
              <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            AWS re/Start cohort | Web Developer | Cloud Computing Enthusiast | IT Support
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Hubungi Saya
              <Mail size={20} />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Lihat Proyek
              <ExternalLink size={20} />
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16">Mengenal lebih dekat</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <p className="text-gray-300 text-lg mb-6">
                  Lulusan S1 Informatika dengan pengalaman di bidang pengembangan sistem dan pengelolaan data. Analitis, adaptif, dan berorientasi pada hasil. Siap berkontribusi secara profesional di berbagai bidang pekerjaan.
                </p>
                <p className="text-gray-300 text-lg">
                  Memiliki keahlian dalam pengembangan front-end dan back-end, serta pengetahuan mendalam tentang Cloud Computing melalui program AWS re/Start Graduate.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-6 py-3 rounded-full border border-purple-500/30 hover:scale-105 transition-transform">
                  <Code size={20} />
                  <span className="font-semibold">Full-Stack</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-6 py-3 rounded-full border border-blue-500/30 hover:scale-105 transition-transform">
                  <Cloud size={20} />
                  <span className="font-semibold">Cloud Computing</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-6 py-3 rounded-full border border-green-500/30 hover:scale-105 transition-transform">
                  <Database size={20} />
                  <span className="font-semibold">Database</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6 flex items-center gap-3">
                <Zap className="text-purple-400" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Languages & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "PHP", "Laravel", "React JS", "Bootstrap"].map((skill) => (
                      <span key={skill} className="bg-slate-800/50 text-gray-300 px-4 py-2 rounded-lg text-sm border border-slate-700 hover:border-purple-500/50 hover:scale-105 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Cloud & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "MySQL", "REST API", "Git/GitHub"].map((skill) => (
                      <span key={skill} className="bg-slate-800/50 text-gray-300 px-4 py-2 rounded-lg text-sm border border-slate-700 hover:border-purple-500/50 hover:scale-105 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pengalaman
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16">Perjalanan karir saya</p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/60 via-blue-500/40 to-green-500/30" />

            <div className="space-y-10">
              {experiences.map((exp, i) => {
                const c = colorMap[exp.color];
                return (
                  <div key={i} className="relative flex gap-8">
                    {/* Dot */}
                    <div className={`flex-shrink-0 w-12 h-12 ${c.dot} rounded-full flex items-center justify-center text-xl shadow-lg z-10`}>
                      {exp.icon}
                    </div>

                    {/* Card */}
                    <div className={`flex-1 bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border ${c.border} transition-all duration-300 hover:scale-[1.01] mb-2`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                          <p className={`text-sm font-semibold mt-1 ${exp.color === 'purple' ? 'text-purple-400' : exp.color === 'blue' ? 'text-blue-400' : 'text-green-400'}`}>
                            {exp.company}
                          </p>
                        </div>
                        <span className={`text-xs px-3 py-1.5 rounded-full border font-medium whitespace-nowrap ${c.badge}`}>
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5 mt-3">
                        {exp.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.color === 'purple' ? 'bg-purple-400' : exp.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'}`} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold text-white mb-12 text-center flex items-center justify-center gap-3">
              <Award className="text-purple-400" />
              Pelatihan & Sertifikasi
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AWS re/Start Graduate", issuer: "Amazon Web Services", date: "Jan 2026" },
                { title: "AWS re/Start Cloud Computing", issuer: "Orbit Future Academy", date: "Des 2025" },
                { title: "Cloud Computing FGA", issuer: "Digital Talent Scholarship", date: "Nov 2025" }
              ].map((cert, i) => (
                <div key={i} className="bg-slate-800/30 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 hover:scale-105 transition-all">
                  <Cloud className="text-purple-400 mb-4" size={32} />
                  <h4 className="text-white font-semibold mb-2">{cert.title}</h4>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-purple-300 text-sm font-semibold">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Proyek Unggulan
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16">
            Sistem IoT monitoring hingga transformasi digital UMKM
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 hover:scale-105 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                  
                  <div className={`absolute top-4 left-4 text-white text-xs px-4 py-2 rounded-full font-semibold ${
                    project.status === 'Live' ? 'bg-green-500' : 
                    project.status === 'Production' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}>
                    {project.status}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 text-5xl group-hover:scale-125 transition-transform">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-purple-400 text-sm font-semibold mb-2">{project.company}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-slate-700/50 text-gray-400 px-3 py-1 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold">
                      Lihat Proyek <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mari Berkolaborasi
            </span>
          </h2>
          <p className="text-gray-300 text-xl mb-16">
            Tertarik untuk berdiskusi tentang proyek atau peluang kolaborasi?
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:sigahack3@gmail.com" className="bg-slate-800/50 p-6 rounded-2xl hover:bg-purple-500 transition-all border border-purple-500/20 hover:scale-110">
              <Mail className="text-white" size={32} />
            </a>
            <a href="https://github.com/abhitahsiga" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-2xl hover:bg-purple-500 transition-all border border-purple-500/20 hover:scale-110">
              <Github className="text-white" size={32} />
            </a>
            <a href="https://www.linkedin.com/in/abhitah-siga-al-fathir-25988a1ab" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-2xl hover:bg-purple-500 transition-all border border-purple-500/20 hover:scale-110">
              <Linkedin className="text-white" size={32} />
            </a>
          </div>

          <div className="bg-slate-800/30 border border-purple-500/20 rounded-2xl p-8">
            <p className="text-gray-400 mb-2">Email:</p>
            <a href="mailto:sigahack3@gmail.com" className="text-purple-400 text-xl font-semibold hover:text-purple-300">
              sigahack3@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white font-semibold mb-2">Abhitah Siga Al Fathir</p>
          <p className="text-gray-400">&copy; 2026 All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top */}
      {scrolled && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50"
        >
          <ChevronDown size={24} className="rotate-180" />
        </button>
      )}
    </div>
  );
}