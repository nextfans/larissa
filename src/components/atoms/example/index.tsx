import React from 'react'

type ExampleProps = {
  label: string
}

export const Example: React.FC<ExampleProps> = ({ label }) => {
  return <h1 className="h1">{label}</h1>
}
