import { API_ENDPOINT } from "../utils/consts"

const Animation = () => {
  return (
    <div className="animation">
      <img src={`${API_ENDPOINT}/store/images/gif/animation.gif`} alt="" />
      {/* <source src="" type="" /> */}
    </div>
  )
}

export default Animation