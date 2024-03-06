import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import './Video.css'

const Video = () => {
  const {videoId, categoryId} = useParams();
console.log(categoryId);
  return (
    <div className='play-conatiner'>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video
