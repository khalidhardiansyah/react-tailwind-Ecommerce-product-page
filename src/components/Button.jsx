
function Button({label, icon, className='',...props}) { //eslint-disable-line
  const ICON_STYLES = 'w-10 h-10 rounded-full bg-white'
  const ICON_LABEL_STYLES = 'rounded-lg gap-x-4  w-full font-bold capitalize  h-14 bg-primary hover:bg-opacity-70'
  const LABEL_STYLES = ' rounded-lg  w-full font-bold h-14 bg-primary hover:bg-opacity-70'
  const DEFAULT = `${className}  flex items-center justify-center `

  // const STYLES = `${DEFAULT}  ${icon&&label?ICON_LABEL_STYLES:icon?ICON_STYLES:null}`

  const STYLES = ()=>{
    let styles = DEFAULT
    if (icon && label) {
      return styles + ICON_LABEL_STYLES
    }else if (icon) {
      return styles + ICON_STYLES 
    }
    return styles + LABEL_STYLES
  }

  return (
    <button type="button" className={STYLES()} {...props}>
      {
        icon && <img src={icon} className="w-4 h-4 "/>
      }
        {label && <span>{label}</span>}
    </button>
  )
}

export default Button