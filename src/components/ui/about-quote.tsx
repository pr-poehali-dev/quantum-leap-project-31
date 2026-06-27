import DotPattern from "@/components/ui/dot-pattern"

export function AboutQuote() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative flex flex-col items-center border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5">
        <DotPattern width={5} height={5} />

        {/* Corner decorations */}
        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white/80" />

        <div className="relative z-20 mx-auto max-w-5xl rounded-[40px] py-6 md:p-10 xl:py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Кератиновое выпрямление",
              "Сложное окрашивание",
              "Ботокс волос",
              "Жен. стрижка от 500 ₽",
              "Муж. стрижка от 500 ₽",
            ].map((service) => (
              <div key={service} className="flex items-center gap-4">
                <div className="h-px w-8 bg-white/40 flex-shrink-0" />
                <p className="text-base md:text-xl lg:text-2xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}