
interface  InputPorps {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export const Input = ({ name, type, placeholder, label }: InputPorps) => {
  return (
      <div className="grid gap-2">
        <label 
          htmlFor={name}
          className="font-bold text-sm text-gray-500"
        >
            {label}
        </label>
        <input
          className="border p-3 rounded-2xl border-gray-500 text-gray-700 hover:border-red-500 focus:border-red-500 focus:ring-red-500 outline-red-500" 
          type={type} 
          name={name}
          id={name} 
          placeholder={placeholder} 
        />
      </div>
  );
}