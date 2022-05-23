import React from 'react'

export const Info = ({ data }) => {
    console.log(data)
    return (
        <div className="">
            {
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                       
                    </>
                )
            }

        </div>
    )
}

export default Info;