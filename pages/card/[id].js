import React, { useEffect, useState } from 'react'
import Search from '../Search'
import { useRouter } from 'next/router'
import Image from 'next/image'
import star from "../../public/icons/star.png"
import heart from "../../public/icons/heart.png"
import play from "../../public/icons/play-5-32.png"

export default function Card1() {
  const router = useRouter();
  const { id } = router.query
  const [post, setPost] = useState();
  const [items, setItems] = useState();
  useEffect(() => {
    setPost(id)
  }, [id]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setItems(items)
    }
  }, [post]);

  console.log(items);
  if (items === undefined) {
    return <h1>Loading</h1>
  }
  return (
    items.items.map((val) => {

      if (val.id == post) {
        return (

          <div>
            <div style={{ width: "100vw", height: "19vh", backgroundColor: 'aqua' }}><Search />

            </div>
            <div style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/w400${val.backdrop_path}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              color: 'white'

            }}>

              <div style={{ width: "30vw", height: "90vh", backgroundColor: 'white', marginTop: "10px" }}>
                <img className='id'
                  src={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
                  alt="Picture of the author"
                /></div>

              <div style={{ width: "40vw", height: "90vh", backgroundColor: 'black', marginTop: "10px" }}>
                <h2 style={{ color: "white", marginLeft: "50px" }}>{val.title}</h2>
                <div style={{ marginLeft: "60px", marginTop: "20px", height: "50px" }}>

                  <span style={{
                    position: "relative",
                    left: "60px", top: "18px"
                  }} >
                    <Image style={{
                      position: "relative",
                      left: "0px", bottom: "0px"
                    }}
                      src={star}
                      alt="Picture of the author"
                      width="15"
                      height="18"
                    /> <span style={{
                      position: "relative",
                      left: "0px", bottom: "1px"
                    }}>{val.vote_average}</span>
                  </span>


                  <span style={{
                    position: "relative",
                    left: "100px", top: "20px"
                  }}> <Image
                      src={heart}
                      alt="Picture of the author"
                      width="19"
                      height="19"
                    />
                    <span style={{
                      position: "relative",
                      left: "2px", bottom: "5px"
                    }}>{val.vote_count
                      }</span >
                  </span>


                  <span style={{
                    position: "relative",
                    left: "150px", top: "20px"
                  }}><Image
                      src={play}
                      alt="Picture of the author"
                      width="19"
                      height="19"
                    />
                    <span style={{ position: "relative", left: "10px", bottom: "4px" }}>Play Trailer</span></span>

                </div>
                <div style={{ color: "white", width: "100%", height: "34%", padding: "25px", marginTop: "30px",marginBottom:"40px", fontSize: "20px" }}><p>{val.overview
                }</p></div>
                <div style={{ color: "white", width: "100%", height: "20%", padding: "25px" }}>

                  <div style={{ display: "flex",marginTop:"10px"}}>

                    <div><span>Realease Date:<p style={{ color: "#90EE90" }}>{val.release_date
                    }</p></span></div>
                    <div style={{ marginLeft: "200px" }}><span>Running Time:<p style={{ color: "#90EE90" }}>107 mins</p></span></div>


                  </div>
                </div>

              </div>


            </div>
          </div>

        )
      }
    })
  )
}