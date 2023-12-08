import React from 'react'
import { useRef, useEffect, useState } from 'react'
const VITE_OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const model = "whisper1;"

const Dictaphone = () =>
{
    const inputRef = useRef();
    const [file, setFile] = useState()
    const [response,setResponse] = useState(null)
    const onChangeField = () => {
        setFile(inputRef.current.file[0])
        
    }
    useEffect(() => {
        const fetchAudioFile = async () => {
            if (!file) {
                return
            }
            const formData = new FormData
            formData.append("model", model);
            formData.append("file", file);

            axios.post("https://api.openai.com/v1/audio/transcriptions", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${VITE_OPENAI_API_KEY}`,

                },
                
            })
                .then((res) => {
                    console.log(res.data)
                    setResponse(res.data)
                
                })
                .catch((err) => {
                    console.log(err)
                })
        };
        fetchAudioFile()
    }, [file])
    
    
  return (
      <>
          <div
              style={{
                  backgroundColor: "#f2f2f2",
                  padding: "20px",
                  borderRadius: "8px",
          }}
          >
              
              whisper1
              <input
                  type="file"
                  ref={inputRef}
                  accept='.mp3'
                  onChange={onChangeField}
                  style={{display:"block", marginTop:"20px"}}
              />
              {response && <div>{ JSON.stringify(response,null,2)}</div>}
              
          </div>
      </>
  )
}

export default Dictaphone
