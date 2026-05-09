export default function Home() {
  return (
    <div className="flex flex-col flex-1 wedding-bg">
      <header className="sticky top-0 z-20 border-b border-black/[.06] bg-white/70 backdrop-blur dark:border-white/[.10] dark:bg-black/50">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-50"
          >
            Tuấn Ngọc • Phương Anh
          </a>
          <nav className="hidden items-center gap-5 text-sm text-zinc-700 dark:text-zinc-300 sm:flex">
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#story">
              Love story
            </a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#album">
              Album
            </a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#events">
              Sự kiện
            </a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#rsvp">
              RSVP
            </a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#gift">
              Mừng cưới
            </a>
          </nav>
          <a
            href="#rsvp"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Bạn sẽ đến chứ?
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        {/* Hero */}
        <section className="wedding-card overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
                SAVE THE DATE
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                <span className="block">Nguyễn Hữu Tuấn Ngọc</span>
                <span className="mt-1 block wedding-accent">&</span>
                <span className="block">Nguyễn Phương Anh</span>
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="wedding-ring inline-flex items-center rounded-full px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200">
                  Chủ nhật, 26.09.2026
                </span>
                <span className="wedding-ring inline-flex items-center rounded-full px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200">
                  10:45 • Nhà Hàng 
                </span>
              </div>
              <p className="mt-6 max-w-prose text-base leading-7 text-zinc-600 dark:text-zinc-300">
                Một chiếc thiệp online gọn gàng, hiện đại, dễ đọc trên điện thoại.
                Bạn có thể thay toàn bộ nội dung (tên, ngày, địa điểm, ảnh, tài khoản
                mừng cưới) theo thông tin của bạn.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#events"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Xem sự kiện
                </a>
                <a
                  href="#gift"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/[.12] bg-white px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-white/[.14] dark:bg-transparent dark:text-white dark:hover:bg-white/[.06]"
                >
                  Hộp mừng cưới
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-black/[.06] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:border-white/[.10] dark:from-white/[.06] dark:to-white/[.02]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(180,138,90,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(231,212,192,0.35),transparent_55%)]" />
              <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center p-8 text-center">
                <div className="wedding-ring rounded-2xl px-5 py-4">
                  <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
                    ẢNH BÌA
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    Thêm ảnh của bạn vào đây (tỉ lệ vuông 1:1 hoặc ảnh bìa tuỳ chọn).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bride / Groom */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="wedding-card p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
              CHÚ RỂ
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Nguyễn Hữu Tuấn Ngọc
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Tình yêu bắt đầu từ những điều nhỏ bé… Cùng nhau đi qua từng ngày, bình
              yên và thấu hiểu.
            </p>
            <div className="mt-6 rounded-2xl border border-black/[.06] bg-zinc-50 p-5 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Gợi ý: đặt ảnh chân dung vuông 1:1 tại đây.
            </div>
          </div>

          <div className="wedding-card p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
              CÔ DÂU
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Nguyễn Phương Anh
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Đôi khi tình yêu cũng gặp thử thách… Nhưng kiên nhẫn, tin tưởng và yêu
              thương sẽ đưa ta đến gần nhau hơn.
            </p>
            <div className="mt-6 rounded-2xl border border-black/[.06] bg-zinc-50 p-5 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Gợi ý: đặt ảnh chân dung vuông 1:1 tại đây.
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="mt-10 wedding-card p-6 sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
                OUR LOVE STORY
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                Chúng mình đã từng…
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Timeline để kể lại các cột mốc quan trọng trong hành trình yêu thương.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { time: "THÁNG 8-2017", title: "Lần đầu gặp nhau" },
              { time: "THÁNG 10-2017", title: "Tỏ tình & Hẹn hò" },
              { time: "THÁNG 8-2025", title: "Lời cầu hôn" },
              { time: "THÁNG 10-2025", title: "Lễ thành hôn" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/[.06] bg-white p-5 dark:border-white/[.10] dark:bg-white/[.03]"
              >
                <p className="text-xs font-semibold tracking-[0.24em] wedding-accent">
                  ✕ {item.time}
                </p>
                <p className="mt-3 text-sm font-medium text-zinc-950 dark:text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2 rounded-2xl border border-black/[.06] bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Ảnh minh hoạ (tỉ lệ 1:1) — bạn có thể thay bằng ảnh thật.
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Sau tất cả, khi cùng nhìn lại chặng đường dài luôn có người ấy bên
                cạnh, chính là lúc bày tỏ yêu thương trọn vẹn. Một chiếc nhẫn lấp
                lánh cùng lời ngỏ ý ngọt ngào đi hết một đời “Cùng anh, nhé?”
              </p>
            </div>
          </div>
        </section>

        {/* Album */}
        <section id="album" className="mt-10 wedding-card p-6 sm:p-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
                ALBUM ẢNH CƯỚI
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                Một vài khoảnh khắc
              </h2>
            </div>
            <p className="hidden text-sm text-zinc-600 dark:text-zinc-300 sm:block">
              Grid ảnh responsive, tối ưu mobile.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4 rounded-2xl border border-black/[.06] bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Ảnh 4:5
            </div>
            <div className="lg:col-span-4 rounded-2xl border border-black/[.06] bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Ảnh 4:3
            </div>
            <div className="lg:col-span-4 rounded-2xl border border-black/[.06] bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Ảnh 4:3
            </div>
            <div className="lg:col-span-6 rounded-2xl border border-black/[.06] bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Ảnh 16:9
            </div>
            <div className="lg:col-span-6 rounded-2xl border border-black/[.06] bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Ảnh 16:9
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="mt-10 wedding-card p-6 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
            SỰ KIỆN CƯỚI
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Lịch trình
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Tiệc cưới nhà trai",
                when: "10:45 • Chủ nhật, 26/10/2025",
                where: "Khách sạn Bằng Giang",
                addr: "1 Đ. Lê Lợi, P. Bắc Sơn, Sầm Sơn, Thanh Hóa",
              },
              {
                title: "Tiệc cưới nhà gái",
                when: "16:30 • Thứ 7, 25/10/2025",
                where: "Tư gia nhà gái",
                addr: "Hội trường thôn Làng Gió, xã Hóa Quỳ, Thanh Hóa",
              },
            ].map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-black/[.06] bg-white p-6 dark:border-white/[.10] dark:bg-white/[.03]"
              >
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    Được tổ chức vào
                  </span>{" "}
                  {e.when}
                </p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    Địa điểm
                  </span>{" "}
                  {e.where}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {e.addr}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    href="#rsvp"
                  >
                    Xác nhận tham dự
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-full border border-black/[.12] px-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-white/[.14] dark:text-white dark:hover:bg-white/[.06]"
                    href="https://www.google.com/maps/place/Trung+t%C3%A2m+H%E1%BB%99i+ngh%E1%BB%8B%26Ti%E1%BB%87c+c%C6%B0%E1%BB%9Bi+Minh+Ch%C3%A2u+Vi%E1%BB%87t/@16.0510026,108.2093229,17z/data=!3m1!4b1!4m6!3m5!1s0x314219b85cefa3f5:0xf3ebcf4b0fde40a8!8m2!3d16.0509975!4d108.2118978!16s%2Fg%2F1jkvzy82b?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Xem bản đồ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Invitation */}
        <section className="mt-10 wedding-card p-6 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
            THIỆP MỜI
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Trân trọng kính mời
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/[.06] bg-white p-6 dark:border-white/[.10] dark:bg-white/[.03]">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                NHÀ TRAI
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Ông: Lê Văn Bình • Bà: Phạm Thị Ngâm
              </p>
              <div className="mt-6 border-t border-black/[.06] pt-6 text-sm text-zinc-600 dark:border-white/[.10] dark:text-zinc-300">
                <p>
                  Trân trọng báo tin lễ thành hôn{" "}
                  <span className="font-medium text-zinc-950 dark:text-white">
                    Nguyễn Hữu Tuấn Ngọc & Nguyễn Phương Anh
                  </span>
                  .
                </p>
                <p className="mt-3">
                  Kính mời bạn đến dự buổi tiệc chung vui tại{" "}
                  <span className="font-medium text-zinc-950 dark:text-white">
                    Nhà Hàng
                  </span>
                  .
                </p>
                <p className="mt-3">
                  Vào lúc{" "}
                  <span className="font-medium text-zinc-950 dark:text-white">
                    10:45 • Chủ nhật, 26/09/2026
                  </span>
                  .
                </p>
                <p className="mt-3 italic">
                  (Sự hiện diện của bạn là niềm vinh hạnh của gia đình chúng tôi)
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-black/[.06] bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Ảnh thiệp ngang (tỉ lệ 16:9) — thay bằng ảnh thật / QR / bản đồ.
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="mt-10 wedding-card p-6 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
            RSVP
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Bạn sẽ đến chứ?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Mẫu UI RSVP (chỉ giao diện). Nếu bạn muốn lưu dữ liệu thật (Google Sheet,
            email, database), mình sẽ nối thêm API sau.
          </p>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/[.06] bg-white p-6 dark:border-white/[.10] dark:bg-white/[.03]">
              <label className="text-sm font-medium text-zinc-950 dark:text-white">
                Bạn là
              </label>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="h-11 rounded-xl border border-black/[.12] bg-white text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-white/[.14] dark:bg-transparent dark:text-white dark:hover:bg-white/[.06]"
                >
                  Bạn cô dâu
                </button>
                <button
                  type="button"
                  className="h-11 rounded-xl border border-black/[.12] bg-white text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-white/[.14] dark:bg-transparent dark:text-white dark:hover:bg-white/[.06]"
                >
                  Bạn chú rể
                </button>
              </div>

              <label className="mt-6 block text-sm font-medium text-zinc-950 dark:text-white">
                Xác nhận
              </label>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="h-11 rounded-xl bg-zinc-900 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Tôi sẽ tham dự
                </button>
                <button
                  type="button"
                  className="h-11 rounded-xl border border-black/[.12] bg-white text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-white/[.14] dark:bg-transparent dark:text-white dark:hover:bg-white/[.06]"
                >
                  Tôi không thể
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-black/[.06] bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
              Nâng cấp gợi ý:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Thêm form tên + số người tham dự</li>
                <li>Gửi lời nhắn chúc mừng</li>
                <li>Lưu vào Google Sheets hoặc database</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gift */}
        <section id="gift" className="mt-10 wedding-card p-6 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
            HỘP MỪNG CƯỚI
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Gửi lời chúc & mừng cưới
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Bạn có thể đổi số tài khoản/ngân hàng, thêm QR code, hoặc ẩn phần này nếu
            không dùng.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Mừng cưới chú rể",
                name: "Nguyễn Hữu Tuấn Ngọc",
                bank: "MB Bank",
                acc: "300140102001",
              },
              {
                title: "Mừng cưới cô dâu",
                name: "Nguyễn Phương Anh",
                bank: "TP Bank",
                acc: "3955736901",
              },
            ].map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-black/[.06] bg-white p-6 dark:border-white/[.10] dark:bg-white/[.03]"
              >
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  {g.title}
                </p>
                <div className="mt-4 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <div className="flex items-center justify-between gap-4">
                    <span>Tên</span>
                    <span className="font-medium text-zinc-950 dark:text-white">
                      {g.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Ngân hàng</span>
                    <span className="font-medium text-zinc-950 dark:text-white">
                      {g.bank}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Số TK</span>
                    <span className="font-mono text-[13px] font-semibold text-zinc-950 dark:text-white">
                      {g.acc}
                    </span>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-black/[.06] bg-zinc-50 p-5 text-sm text-zinc-600 dark:border-white/[.10] dark:bg-white/[.04] dark:text-zinc-300">
                  Chỗ đặt QR code (tuỳ chọn).
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-300">
            Chân thành cảm ơn sự quan tâm và lời chúc phúc của bạn!
          </p>
        </section>
      </main>

      <footer className="border-t border-black/[.06] bg-white/60 py-10 text-sm text-zinc-600 backdrop-blur dark:border-white/[.10] dark:bg-black/40 dark:text-zinc-300">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-medium text-zinc-900 dark:text-zinc-50">
              Tuấn Ngọc — Wedding landing
            </p>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#top">
              Trở về đầu trang
            </a>
          </div>
          <p>
            Nếu bạn gửi cho mình thông tin thật (tên, ngày, địa điểm, album ảnh, tài
            khoản/QR), mình sẽ thay toàn bộ placeholder này trong 5–10 phút.
          </p>
        </div>
      </footer>
    </div>
  );
}
