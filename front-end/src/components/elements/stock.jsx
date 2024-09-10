const Stock = (props) => {
  return (
    <div onClick={props.func} className={props.className}>
      <img src={props.src} alt="stock" className="object-cover w-[inherit] h-[inherit] rounded-xl" />
    </div>
  )
}

export default Stock