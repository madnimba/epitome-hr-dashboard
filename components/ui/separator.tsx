import * as React from "react"

function Separator({ className = "h-px w-full bg-border" }: { className?: string }) {
  return <div role="separator" aria-orientation="horizontal" className={className} />
}

export { Separator }


