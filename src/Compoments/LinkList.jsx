import React from 'react'
import Link from './Link'

const links = [
    {
        linkName: "Twitter",
        url: "http://twitter.com/earlpappi",
        id: 'twitter',
        subtext: null
    },
    {
        linkName: "Zuri Team",
        url: "https://training.zuri.team/",
        id: 'btn__zuri',
        subtext: null
    },

    {
        linkName: "Zuri Books",
        url: "http://books.zuri.team",
        id: 'books',
        subtext: 'Explore catalog of Design and coding books'
    },
    {
        linkName: "Python Books",
        url: "https://books.zuri.team/python-for-beginners?ref_id=earl",
        id: 'book__python',
        subtext: 'Get this high value book, discounted!'
    },
    {
        linkName: "Background Check for Coders",
        url: "https://background.zuri.team",
        id: 'pitch',
        subtext: 'Run a quick background check on developers'
    },
    {
        linkName: "Design Books",
        url: "https://books.zuri.team/design-rules",
        id: 'book__design',
        subtext: 'Get a free design ebook from Zuri '
    }

]

function LinkList() {
    return (
        <div>
            { links.map((link)=>{
                return(
                    <Link key={link.id} link={link}/>
                )
            }) }
        </div>
    )
}

export default LinkList