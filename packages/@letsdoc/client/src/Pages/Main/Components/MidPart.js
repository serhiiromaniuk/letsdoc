import { Image, Paragraph} from '../../../Components'

const style = [
    { // 1
        paragraph: {
            left: '48%',
            top: '112%',
            width: '869px'
        },
        text: `
            Log in or sign up your personal account to
            freely manage your pages and documentation
            content.
        `,
        image: {
            left: '6%',
            top: '98%'
        }
    },
    { // 2
        paragraph: {
            left: '8%',
            top: '175%',
            width: '869px'
        },
        text: `
            Enter your Pages in the navigation bar and
            create a new page.
        `,
        image: {
            left: '65%',
            top: '158%'
        }
    },
    { // 3
        paragraph: {
            left: '48%',
            top: '230%',
            width: '869px'
        },
        text: `
            Create and fill your first document.
            Use Markdown syntax to easily operate on
            text schema or you could check preprovided
            guidlines for you!
        `,
        image: {
            left: '6%',
            top: '218%'
        }
    },
    { // 4
        paragraph: {
            left: '8%',
            top: '292%',
            width: '869px'
        },
        text: `
            Publish your changes and share your page.
            From that point you could freely share your 
            documented text with anybody!
        `,
        image: {
            left: '65%',
            top: '278%'
        }
    },
    { // 5
        paragraph: {
            left: '48%',
            top: '355%',
            width: '869px'
        },
        text: `
            Simple documents creation process has
            beecome simpler as it ever been!
        `,
        image: {
            left: '6%',
            top: '338%'
        }
    }
]

const Render = style.map((el, i) => {
        return (
            <div key={i}>
                <Paragraph style={style[i].paragraph} text={style[i].text}/>
                <Image url={`/images/person_${i+1}.png`} style={style[i].image} />
            </div>
        )
})


export function MidPart() {
    return (
        <div>
            {Render}
        </div>
    )
}
