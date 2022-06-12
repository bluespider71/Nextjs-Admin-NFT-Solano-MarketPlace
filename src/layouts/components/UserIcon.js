const UserIcon = props => {
  // ** Props
  const { icon, iconProps } = props
  const IconTag = icon
  let styles = {
    fontSize: "20px"
  }

  /* styles = {
      color: 'red',
      fontSize: '2rem'
    } */
  // @ts-ignore
  return <IconTag {...iconProps} style={{ ...styles }} />
}

export default UserIcon
