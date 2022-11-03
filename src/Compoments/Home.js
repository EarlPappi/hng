import React from 'react'
import LinkList from './LinkList'
import ProfileHeader from './ProfileHeader';
import Slack from '../Assets/slack.png';
import GitHub from '../Assets/Icon.png';

function Home() {
    return (
        <div>
            <ProfileHeader />
            <LinkList />

            <div className='flex justify-center gap-6 my-12'>
                <a href="https://slack.com/earl"><img src={Slack} alt="" /></a>
                <a href="https://github.com/EarlPappi"><img src={GitHub} alt="" /></a>

            </div>
        </div>
    )
}

export default Home