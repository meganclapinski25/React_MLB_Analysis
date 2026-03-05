export default function StatCard({ label, value }){
    return (
        <div className="bg-gray-700 rounded-lg p-4">
            <p className="text-gray-400 text-xs mb-1">{label}</p>
            <p className="text-white text-2xl font-bold">{value ?? '--'}</p>
        </div>
    );
}