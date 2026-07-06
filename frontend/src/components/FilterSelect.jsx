import { memo } from 'react'
import { ChevronDown } from 'lucide-react'

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="relative flex min-w-[160px] flex-1 items-center">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-2xl border border-border bg-white px-4 py-3 pr-10 text-sm font-medium text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-muted-foreground" />
    </label>
  )
}

export default memo(FilterSelect)
