import React, { useEffect, useState } from 'react'

/*
  Single-page React site (dark minimalist) for GitHub Pages.
  Configuration:
    github_owner: MarsRover27
    github_repo: Tsurkov_GeneticAnalyzer
    asset_name: TsurkovGeneticAnalyzer_Installer.exe
    YOUTUBE_ID: pDZemBxV1cI
    Contacts: email and telegram below
*/

const OWNER = 'MarsRover27'
const REPO = 'Tsurkov_GeneticAnalyzer'
const ASSET = 'TsurkovGeneticAnalyzer_Installer.exe'
const YOUTUBE_ID = 'pDZemBxV1cI'

export default function App() {
  const [count, setCount] = useState('…')

  // fetch download count from GitHub Releases API
  useEffect(() => {
    async function fetchDownloads() {
      try {
        const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`)
        if (!res.ok) return
        const data = await res.json()
        if (data.assets && data.assets.length > 0) {
          const asset = data.assets.find(a => a.name === ASSET)
          if (asset) setCount(asset.download_count)
        }
      } catch (e) {
        console.error(e)
      }
    }
    fetchDownloads()
  }, [])

  const handleDownload = () => {
    window.open(`https://github.com/${OWNER}/${REPO}/releases/latest/download/${ASSET}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-sky-300">Tsurkov Genetic Analyzer</h1>
            <p className="mt-3 text-gray-300 max-w-lg">
              Інтерактивна програма для моделювання менделівської генетики, зчепленого успадкування і кросинговеру.
              Створено для конкурсу «Крок до знань 2024».
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownload}
                className="px-5 py-2 bg-sky-500 hover:bg-sky-600 text-black font-medium rounded-lg"
              >
                Завантажити інсталятор
              </button>
              <span className="text-sm text-gray-400">
                Підтримується: <span className="text-gray-100 font-medium">Windows</span>
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-400">
              Завантажень: <span className="text-sky-300">{count}</span>
            </div>
          </div>
          <div className="w-36 h-36 bg-slate-800 rounded-2xl flex items-center justify-center text-5xl">
            <img src="/icon.ico" alt="icon" className="w-20 h-20" />
          </div>
        </header>

        {/* ABOUT */}
        <section className="mt-12">
          <h2 className="text-xl text-sky-200 font-semibold">Про програму</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Програма моделює моногібридні та полігібридні схрещування, показує закономірності успадкування, кросинговер та зчепленість. 
            Візуалізує генотипи й фенотипи, дозволяє тренуватись на прикладах і експортувати результати.
          </p>
        </section>

        {/* SCREENSHOTS */}
        <section className="mt-10">
          <h2 className="text-xl text-sky-200 font-semibold">Скріншоти</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <img src={`/screenshots/${i}.png`} alt={`screenshot ${i}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section className="mt-10">
          <h2 className="text-xl text-sky-200 font-semibold">Демонстрація (захист)</h2>
          <div className="mt-4 aspect-video bg-black rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="Demo video"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* DIPLOM */}
        <section className="mt-10">
          <h2 className="text-xl text-sky-200 font-semibold">Диплом</h2>
          <div className="mt-4 bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center gap-4">
            <img src="/diplom.png" alt="diplom" className="w-48 rounded" />
            <div className="text-gray-300">Диплом І ступеня конкурсу «Крок до знань 2024»</div>
          </div>
        </section>

        {/* WEB VERSION */}
        <section className="mt-10">
          <h2 className="text-xl text-sky-200 font-semibold">Онлайн версія</h2>
          <p className="mt-3 text-gray-300">Планується Web-демо з базовим функціоналом PyQt6-програми.</p>
          <div className="mt-3">
            <a href="#" className="inline-block px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700">
              Відкрити онлайн-версію (заглушка)
            </a>
          </div>
        </section>

        {/* AUTHOR */}
        <section className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center gap-6">
          <img src="/photo.png" alt="author" className="w-28 h-28 rounded-full object-cover bg-slate-800" />
          <div>
            <div className="text-sky-200 font-semibold">Андрій Цурков</div>
            <p className="text-gray-300 mt-1 max-w-md">
              Школяр старших класів, автор програми. Переможець конкурсу «Крок до знань 2024». 
              Поєднує інтереси у біології та програмуванні.
            </p>
            <div className="mt-2 text-sm text-gray-400 space-y-1">
              <div>Email: <a href="mailto:andrey.tsurkov33@gmail.com" className="text-sky-400">andrey.tsurkov33@gmail.com</a></div>
              <div>Telegram: <a href="https://t.me/TsurkovAndrii" className="text-sky-400">@TsurkovAndrii</a></div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-gray-500 text-sm border-t border-slate-800 pt-4">
          © {new Date().getFullYear()} Андрій Цурков — Генетичний тренажер. Розміщено на GitHub Pages.
        </footer>
      </div>
    </div>
  )
}
