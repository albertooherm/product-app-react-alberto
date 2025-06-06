export default function ProductImage({ src, alt }) {
    return (
      <div className="w-full flex justify-center mb-6">
        <img
          src={src}
          alt={alt}
          className="w-48 h-48 object-contain rounded border border-gray-200 shadow-sm"
        />
      </div>
    );
  }
  