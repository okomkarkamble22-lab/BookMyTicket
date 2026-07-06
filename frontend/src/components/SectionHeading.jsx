import { memo } from 'react'

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#E50914] sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-2 text-sm text-gray-600 sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

export default memo(SectionHeading)
