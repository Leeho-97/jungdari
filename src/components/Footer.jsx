

function Footer() {
  return (
    <footer className="w-full bg-red-800 h-20vh text-white p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center bg-gray-500">
        <div className="text-xl font-bold">MEO</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:underline">
            홈
          </a>
          <a href="#" className="hover:underline">
            소개
          </a>
          <a href="#" className="hover:underline">
            서비스
          </a>
          <a href="#" className="hover:underline">
            문의
          </a>
        </nav>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400">
        as
          </a>
          <a href="#" className="hover:text-gray-400">
       as
          </a>
          <a href="#" className="hover:text-gray-400">
        as
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer