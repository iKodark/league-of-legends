const DifficultyBars = ({ difficulty } : { difficulty: number }) => {
  return (
    <div className="flex  w-full h-3">
      <span className="inline-block w-1/3 h-full bg-secondary bg-clip-content -skew-x-[40deg]" />
      <span className={`inline-block w-1/3 h-full bg-secondary bg-clip-content -skew-x-[40deg] ${difficulty < 4 && 'opacity-50'}`} />
      <span className={`inline-block w-1/3 h-full bg-secondary bg-clip-content -skew-x-[40deg] ${difficulty < 8 && 'opacity-50'}`} />
    </div>
  )
}

export default DifficultyBars