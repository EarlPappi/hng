import React from 'react'
import { Link } from 'react-router-dom';
import Linky from './Linky';

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
            <div>

                {links.map((link) => {
                    return (
                        <Linky key={link.id} link={link} />
                    )
                })}
            </div>

            <Link to='contact' id='contact' className='block bg-[#EAECF0] font-medium my-4 py-5 text-center w-11/12 mx-auto rounded-md hover:bg-slate-500'>Contact</Link>


        </div>
    )
}

export default LinkList