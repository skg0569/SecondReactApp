function Hello(){

  let myName = "Suraj";
  let fullName = () => {
    return "Suraj Gupta";
  }

  return <h3>
    Hello Guys! I am {fullName()}
  </h3>
}

export default Hello;