export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-500 text-sm py-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        © {new Date().getFullYear()} Alberto Hermosillo. All rights reserved.
      </div>
    </footer>
  );
}
