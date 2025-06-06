export default function FormWrapper({ title, children }) {
    return (
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        {title && <h1 className="text-xl font-semibold mb-6 text-gray-900">{title}</h1>}
        {children}
      </div>
    );
  }
  