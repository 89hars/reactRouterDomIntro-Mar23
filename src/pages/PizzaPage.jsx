import { useEffect } from 'react'
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'

const Pizza = () => {
  const { pizzaId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    console.log(pizzaId)
    console.log(searchParams.get('good'))
    setSearchParams({ good: 'No', reallyGood: 'yes' })
  }, [pizzaId])

  useEffect(() => {
    console.log(searchParams.get('good'))
    setSearchParams({ good: 'No', reallyGood: 'yes' })
  }, [searchParams])

  return (
    <>
      <h1>The pizza</h1>
      <Link to='/'>Home</Link>
      <Link to='/pizzas/queen'>Queen</Link>
      <Link to='/pizzas/chorizo?good=yes'>Chorizo</Link>
      <NavLink
        to='/pizzas/margherita'
        className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
      >
        Margherita
      </NavLink>
      <NavLink
        to='/pizzas/queen'
        className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
      >
        Queen
      </NavLink>
    </>
  )
}

export default Pizza
