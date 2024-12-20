import PropTypes from "prop-types"
import { useState } from "react"

export function TwitterFollowCard({ userName, children, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const textFollow = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is--following'
        : 'tw-followCard-button'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Midudev" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-userName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>                    
                    <span className="tw-followCard--isFollow">{textFollow}</span>
                    <span className="tw-followCard--stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>

    )
}

TwitterFollowCard.propTypes = {
    userName: PropTypes.string,
    children: PropTypes.string,
    initialIsFollowing: PropTypes.bool
};