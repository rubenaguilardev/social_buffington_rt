export default function EmailSide() {

  const email = 'Jazmin.a.buffington@gmail.com';

  return (
    <div className="fixed bottom-0 right-8 z-50 hidden lg:flex flex-col items-center text-gray-950">
      <a
        href={`mailto:${email}`}
        className="mb-4 text-sm tracking-widest hover:text-[#AD6DF4] transition"
        style={{
          writingMode: 'vertical-rl',
        }}
      >
        {email}
      </a>
      <div className="w-px h-24 bg-gray-500"></div>
    </div>
  )
}