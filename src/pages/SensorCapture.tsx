export default function SearchSection() {
  return (
    <div className="w-full h-full">
      <div className="px-6 py-8 bg-white rounded-2xl font-semibold text-black shadow">
        <h3 className="text-2xl md:text-4xl leading-snug">
          Sensor
          <br />
          Capture
        </h3>
        <div className="flex items-end gap-1 mt-10">
          <span className="text-4xl md:text-6xl">1246</span>
          <span className="text-sm md:text-xl">records/s</span>
        </div>
      </div>
    </div>
  );
}
