import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Режим работы</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Время работы
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Ждём вас в удобное для вас время.
            </p>
          </div>
          <div className="flex gap-6 pt-8 flex-col">
            <div className="flex flex-col gap-1">
              <p className="text-2xl md:text-3xl font-semibold text-white font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">Пн — Пт</p>
              <p className="text-xl text-gray-300 font-open-sans-custom [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">10:00–19:00</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-2xl md:text-3xl font-semibold text-white font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">Сб — Вс</p>
              <p className="text-xl text-gray-300 font-open-sans-custom [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">Выходной</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }
