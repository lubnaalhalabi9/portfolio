interface Stat {
  value: string;
  label: string;
  color?: string;
}

interface StatsGridProps {
  stats: Stat[];
}

const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="group bg-black/50 border border-neon/15 rounded-xl p-6 text-center hover:border-neon/40 hover:bg-neon/5 transition-all duration-300"
        >
          <div
            className="text-3xl font-mono font-bold mb-1"
          >
            {stat.value}
          </div>
          <div className="text-xs font-primary text-secondry tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
