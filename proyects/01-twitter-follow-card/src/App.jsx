import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
  {name: 'Miguel Ángel Durán', userName: 'midudev', isFollowing: true},
  {name: 'Mauricio Di Monte', userName: 'dimontemx', isFollowing: false},
  {name: 'Isabel Duque', userName: 'isabelduque02', isFollowing: false},
  {name: 'Angie Bernal', userName: 'angiebernal4', isFollowing: true}
]

export function App() {

  return (
    <section className='App'>
      {
        users.map(({ name, userName, isFollowing }) => (
          
            <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>

        ))
      }
    </section>
  )

}

