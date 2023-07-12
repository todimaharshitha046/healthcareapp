import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/FirebaseImp';
import ReactPlayer from 'react-player'
import TextToSpeechButton from './TextToSpeech';
import "../CSS/AllSchemes.css"
import { async } from '@firebase/util';
function AllSchemes() {
  const [allschemes, setallschemes] = useState([]);
  const postCollectionRef = collection(db, "schemes");
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      setallschemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPost();
  })


  return (
    <div>
      {
        allschemes != null ?

          <div className='displayCards'>
            {
              allschemes.map((scheme) => {
                return (
                  <div className='card'>
                    <TextToSpeechButton convert={"Scheme name,," + scheme['schemename'] + ",,Scheme description,," + scheme['schemedes'] + ",,Eligibility,," + scheme['eligibility'] + ",,Benifits,," + scheme['benifits']} />
                    <div style={{ color: "lightcoral", textAlign: "center", fontSize: "20px" }}>{scheme['schemename']}</div>

                    <div className='cardTop'><span className='cardHeader'>Description:</span>{scheme['schemedes']}</div>
                    <div className='cardTop'><span className='cardHeader'>Applicable to:</span>{scheme['eligibility']}</div>
                    <div className='cardTop'><span className='cardHeader'>Type:</span>{scheme['type']}</div>
                    <div className='cardTop'><span className='cardHeader'>Benifits:</span>{scheme['benifits']}</div>
                    <div className='cardTop'> <ReactPlayer url={scheme['video']} height={400} width={400}></ReactPlayer></div>
                  </div>
                )
              }



              )
            }
          </div>

          : <div></div>

      }

    </div>
  )
}

export default AllSchemes