import { useState } from "react";
import { useEffect } from "react";

import { RoommateType, fetchRoommate } from "./roommates";
import { RoommateInfo } from "./RoommateInfo";
import { Loading } from "./Loading";



function App() {
  const [roomate, setRoommate] = useState<RoommateType | null>(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    fetchRoommate().then(r => {setRoommate(r); setLoading(false)})
    }, 1000)
  }, [])

  return (
    <main>
      {loading && <Loading/>}
      {roomate && <RoommateInfo roommate={roomate}/>}
    </main>
  )

}

export default App;