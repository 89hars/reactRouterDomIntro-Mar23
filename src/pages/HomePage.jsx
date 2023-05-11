import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Hello there</h1>
      <div>
        <a href='/about'>Not good</a>
      </div>
      <div>
        <Link to='/about'>Good</Link>
      </div>
      <Link to='/pizzas/margherita'>Margherita</Link>
    </>
  )
}

export default HomePage
