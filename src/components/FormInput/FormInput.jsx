export default function FormInput({
    label,
    type = 'text',
    step,
    register,
    name,
    validation,
    error,
  }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          type={type}
          step={step}
          className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register(name, validation)}
        />
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    );
  }
  