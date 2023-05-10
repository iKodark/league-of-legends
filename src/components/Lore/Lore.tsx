"use client"

import React from "react"

const Lore = ({ resume, complete }: { resume: String, complete: String }) => {
  const [fullLore, setFullLore] = React.useState(false)

  const toggleLore = () => {
    setFullLore(!fullLore)
  }

  return (
    <>
      <span>
        {fullLore ? complete : resume}
      </span>
      {
        !!!fullLore && (
          <button className="text-sm text-primary uppercase ml-2" onClick={toggleLore}>Ver mais</button>
        )
      }
    </>
  )
}

export default Lore