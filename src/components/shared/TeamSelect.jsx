export default function TeamSelect({ teams, onChange, placeholder}){
    return (
        <select
          defaultValue=""
          onChange={onChange}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 mb-8"
        >
          <option value="" disabled>{placeholder}</option>
          {teams.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      );
}