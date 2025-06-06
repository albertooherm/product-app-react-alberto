export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full max-w-sm px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm 
                   text-sm text-gray-700 placeholder-gray-400 
                   focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition"
    />
  );
}
