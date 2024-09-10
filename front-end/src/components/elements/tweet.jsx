const Tweet = (props) => {
  const generateTweet = () => {
    var twitterBaseUrl = 'https://twitter.com/intent/tweet?'
    // let tweetText = document.getElementById("tweetText").value
    let tweetText = "powered by AI and friendship"
    let hashtags = "Heartwifdog, HOG, pulse, richardheart, hex"
    let viaAccount = "@HeartWifDog"
    // let hashtags = document.getElementById("hashtag").value
    // let viaAccount = document.getElementById("viaAccount").value

    let twitterUrl = twitterBaseUrl + 'text=' + encodeURIComponent(tweetText) + "&hashtags=" + encodeURIComponent(hashtags) + '&via=' + encodeURIComponent(viaAccount)

    window.open(twitterUrl, '_blank')
  }
  
  return (
    <div className="generate-tweet fixed z-10 top-0 w-full flex h-[100vh] justify-center items-center flex-col">
      <div className="bg-slate-700 p-5 relative h-auto w-[35%] max-[900px]:w-[50%] max-[700px]:w-[60%] max-[550px]:w-[80%] max-[350px]:w-[100%]">
        <img src="assets/cancel.jpeg" onClick={props.func} className="cursor-pointer w-[30px] absolute top-[-5px] right-[-5px] hover:w-[35px]" alt="" />
        <div className="w-full h-[60vh] mt-[1vh] tweet-image">
          <img src={props.src} alt="tweet" className="object-cover w-[inherit] h-[inherit]" />
        </div>
        <div className="flex w-full justify-between my-[4vh] px-6">
          <div onClick={generateTweet} className="cursor-pointer w-[60%] border-2 border-teal-400 text-center text-white py-[1px]">Share</div><img onClick={generateTweet} className="w-[30px] h-[30px] cursor-pointer" src="assets/twitter-icon.png" alt="" />
        </div>
        {/* <div className="w-full text-gray-300">
          <div className="text flex w-full justify-around mb-2 px-6">
            <div className="w-[35%]">
              text:
            </div>
            <div className="w-[65%]">
              <input className="bg-[#222] outline-none w-full border-[1px] border-[#ccc] text-[0.9em] border-none px-2 py-1" id="tweetText" readOnly type="text" defaultValue={"powered by AI and friendship"} />
            </div>
          </div>
          <div className="text flex w-full justify-around mb-2 px-6">
            <div className="w-[35%]">
              hashtags:
            </div>
            <div className="w-[65%]">
              <input className="bg-[#222] outline-none w-full border-[1px] border-[#ccc] text-[0.9em] border-none px-2 py-1" id="hashtag" type="text" readOnly defaultValue={"Heartwifdog, HOG, pulse, richardheart, hex"} />
            </div>
          </div>
          <div className="text flex w-full justify-around mb-2 px-6">
            <div className="w-[35%]">
              via:
            </div>
            <div className="w-[65%]">
              <input className="bg-[#222] outline-none w-full border-[1px] border-[#ccc] text-[0.9em] border-none px-2 py-1" id="viaAccount" type="text" readOnly defaultValue="@HeartWifDog" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Tweet