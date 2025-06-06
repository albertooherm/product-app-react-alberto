export default function DetailField({ label, value }) {
    return (
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-500 mb-1 uppercase">{label}</h4>
        <p className="text-base text-gray-800">{value}</p>
      </div>
    );
  }
  