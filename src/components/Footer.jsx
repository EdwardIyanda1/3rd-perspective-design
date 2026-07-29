export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">
            Third Perspective Media
          </h3>
          <p className="text-sm text-gray-400">
            Video, photography, and design that tells your story from every angle.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-400">hello@thirdperspectivemedia.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Third Perspective Media. All rights reserved.
      </div>
    </footer>
  )
}