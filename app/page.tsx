import Image from "next/image";

const productItems = [
  {
    title: "スワイプ式の直感的なUI",
    text: "お客様が迷わない、直感的な操作",
    icon: "M7 12h10M13 6l6 6-6 6M11 6l-6 6 6 6",
    previewSrc: "/chokkan.png",
    previewAlt: "スワイプ式UIの画面プレビュー",
  },
  {
    title: "チュートリアル機能",
    text: "操作方法を短時間で案内。スタッフ説明の負担を減らします。",
    icon: "M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    previewSrc: "/tutorial.png",
    previewAlt: "チュートリアル機能の画面プレビュー",
  },
  {
    title: "シンプルな管理画面",
    text: "お客様の反応結果を一目で確認できます。",
    icon: "M4 6h16M4 12h16M4 18h10",
    previewSrc: "/manage.png",
    previewAlt: "管理画面のプレビュー",
  },
  {
    title: "モダンなデザイン",
    text: "店舗の世界観を邪魔しない、落ち着いたUIデザイン。",
    icon: "M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.8 6.6 20.5l1-6.1-4.4-4.3 6.1-.9L12 3Z",
    previewSrc: "/modern.png",
    previewAlt: "モダンなデザインの画面プレビュー",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-[#161616]">
      <section className="relative flex min-h-screen items-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.06),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(186,160,92,0.10),transparent_24%),linear-gradient(180deg,#f7f6f2_0%,#eeece5_100%)]" />
        <div className="paper-grain absolute inset-0 opacity-[0.55]" />
        <div className="absolute left-0 top-0 h-1 w-full bg-[#111]" />
        <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-6 text-sm text-black/55 sm:px-10 lg:px-16">
          <div className="font-semibold tracking-[0.32em] text-black">SwipeMatch</div>
          <a
            href="mailto:swipematch.support@gmail.com"
            className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-xs transition hover:border-black/45 hover:bg-white/70"
          >
            お問い合わせ
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="pt-16">
            <div className="flex items-start gap-8">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl">
                お客様が選び、
                <span className="block text-black/62">
                  満足度が上がる。
                </span>
              </h1>
              <div className="hidden pt-2 text-2xl leading-[2.1] tracking-[0.28em] text-black/55 [writing-mode:vertical-rl] lg:block">
                好みは、接客の入口。
              </div>
            </div>
            <p className="mt-7 max-w-2xl text-base leading-8 text-black/58 sm:text-lg">
              SwipeMatchは、来店直後にお客様の好みを直感的に把握し、<br />
              ミスマッチを減らすためのマッチングアプリです。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                料金を見る
              </a>
              <a
                href="https://demo-swipematch.vercel.app/cast/ipad1?tableId=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-col items-center justify-center rounded-full border border-black/15 bg-white/40 px-6 py-2 text-sm font-semibold text-black transition hover:border-black/35 hover:bg-white/80"
              >
                <span>デモアプリを開く</span>
                <span className="text-[11px] font-medium tracking-[0.04em] text-black/48">
                  ※ipad推奨
                </span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[620px] w-full max-w-[520px]">
            <div className="demo-orbit absolute inset-0 rounded-[48px] border border-black/10 bg-white/35 shadow-[0_40px_120px_rgba(0,0,0,0.10)] backdrop-blur-xl" />
            <div className="absolute left-1/2 top-1/2 h-[560px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[42px] border border-black/12 bg-[#151515] p-3 shadow-[0_30px_110px_rgba(0,0,0,0.32)]">
              <div className="relative h-full overflow-hidden rounded-[32px] bg-white">
                <div className="absolute inset-x-0 top-0 z-20 flex justify-center pt-3">
                  <div className="h-1 w-20 rounded-full bg-black/12" />
                </div>
                <div className="animate-card-stack absolute left-5 right-5 top-5 bottom-[88px] overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.06]">
                  <Image
                    src="/demo.png"
                    alt="SwipeMatch の利用イメージ"
                    fill
                    className="object-cover object-[center_22%]"
                    sizes="(max-width: 1024px) 85vw, 306px"
                    preload
                  />
                </div>
                <div className="absolute bottom-7 left-0 right-0 z-30 flex justify-center gap-7">
                  <button
                    type="button"
                    aria-label="バッド"
                    className="grid h-[52px] w-[52px] place-items-center rounded-full border-2 border-rose-300/95 bg-white text-rose-500 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition hover:border-rose-400 hover:shadow-md"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="いいね"
                    className="grid h-[52px] w-[52px] place-items-center rounded-full border-2 border-emerald-400/90 bg-white text-emerald-600 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition hover:border-emerald-500 hover:shadow-md"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[22px] w-[22px]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 21.638h-.014C9.403 20.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 12.11-10.037 13.157H12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-sm font-semibold tracking-[0.28em] text-black/45">
              PRODUCT
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              接客前の数分で、
              <span className="block text-black/56">好みを静かに把握する。</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {productItems.map((item) => (
              <article key={item.title} className="group rounded-[28px] border border-black/10 bg-white/55 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-[#111] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <div className="font-semibold">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-black/52">{item.text}</p>
                <p className="mt-4 text-xs text-black/45">カードにカーソルを当てると画面例を表示</p>
                <div className="pointer-events-none fixed bottom-5 right-5 z-50 hidden w-[min(42vw,520px)] rounded-2xl border border-black/15 bg-white/95 p-3 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-sm md:group-hover:block">
                  <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-black/60">
                    {item.title}
                  </p>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-[#f1efea]">
                    <Image
                      src={item.previewSrc}
                      alt={item.previewAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1280px) 42vw, 520px"
                      preload
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[44px] border border-black/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(241,238,228,0.78))] p-8 text-[#161616] shadow-[0_36px_120px_rgba(55,47,32,0.16)] backdrop-blur-sm sm:p-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(186,160,92,0.24),transparent_68%)]" />
          <div className="absolute -bottom-28 left-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.82),transparent_70%)]" />
          <div className="relative">
            <div className="text-center">
              <div className="text-sm font-semibold tracking-[0.28em] text-black/45">
                PRICING
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                料金設定
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/78 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <div className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,#a8893c,#ead59a,#a8893c)]" />
                <div className="text-xs font-semibold tracking-[0.24em] text-black/45">初期導入費用</div>
                <div className="mt-5 text-[2.55rem] font-medium leading-none tracking-[-0.025em] text-black/90 sm:text-[2.9rem]">¥50,000</div>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/78 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <div className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,#a8893c,#ead59a,#a8893c)]" />
                <div className="text-xs font-semibold tracking-[0.24em] text-black/45">月額</div>
                <div className="mt-5 text-[2.55rem] font-medium leading-none tracking-[-0.025em] text-black/90 sm:text-[2.9rem]">¥15,000</div>
              </div>
            </div>
            <p className="mt-6 text-center text-xs leading-6 text-black/52">
              ※ 初期導入費用には、アプリ構築とお客様ロゴデザインの適用作業が含まれます。
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-black/10 px-6 py-10 text-center sm:px-10">
        <div className="text-lg font-semibold">お問い合わせ</div>
        <a
          href="mailto:swipematch.support@gmail.com"
          className="mt-3 inline-block text-sm text-black/60 transition hover:text-black"
        >
          swipematch.support@gmail.com
        </a>
        <p className="mt-8 text-xs text-black/35">
          © 2026 SwipeMatch. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
