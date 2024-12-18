import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  return (
    <section className='App'>
      <TwitterFollowCard userName='midudev' initialIsFollowing={true} >Miguel Ángel Durán</TwitterFollowCard>
      <TwitterFollowCard userName='dimontemx' >Mauricio Di Monte</TwitterFollowCard>
      <TwitterFollowCard userName='isabelduque02' >Isabel Duque</TwitterFollowCard>      
      <TwitterFollowCard userName='angiebernal4' >Angie Bernal</TwitterFollowCard>
    </section>
  )

}

