import React from "react";

export const CardInfo = ({data}) => {
    console.log(data)
  return (
    <div className="">
        {
            (!data) ? "" :(
                <>
                    <div className="abilities">
                        {
                            data.abilities.map(poke => {
                                return (
                                    <>
                                    <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-state">
                        {
                            data.stats.map(poke => {
                                return(
                                    <>
                                    <h3>
                                        {poke.stat.name}:{poke.base_stat}
                                    </h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )
        }
    </div>
  )
}

export default CardInfo
