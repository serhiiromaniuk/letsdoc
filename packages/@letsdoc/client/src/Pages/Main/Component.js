import { TopPart, MidPart, BotPart } from './Components'
import { Header } from '../../Header'
import { domain, api, opt } from '../../Components/Func'
import axios from 'axios'
import showdown from 'showdown'
import { decode } from 'js-base64'
import '../Document/Components/style.css'
import React from 'react'

export function MainPage() {
    const current = window.location.hostname
    const [ data, setData ] = React.useState({ content: ''});
    const converter = new showdown.Converter({
        'omitExtraWLInCodeBlocks': true,
        'parseImgDimensions': true,
        'simplifiedAutoLink': true,
        'literalMidWordUnderscores': true,
        'strikethrough': true,
        'tables': true,
        'tasklists': true,
        'smoothLivePreview': true,
        'ghCompatibleHeaderId': true,
        'smartIndentationFix': true,
        'emoji': true,
        'simpleLineBreaks': true,
        'ghMentions': true
    })
          
    showdown.setFlavor('github')

    const getData = () => {
        if (current !== domain) {
            const uuid = current.split('.' + domain)[0]
            const urlUser = api.get.auth.user.uuid
            axios.get(urlUser + uuid, opt).then(
                function(r) {
                    const urlGet  = api.post.doc.page.get
                    const dataDoc = {
                    owner:   uuid
                    }
    
                    axios.post(urlGet, dataDoc, opt)
                        .then((res) => setData({content: res.data.content})).catch(e => console.log(e.response))
                }
            ).catch(e => console.log(e))
        } else {
            setData({content: ''})
        }
    }

    React.useEffect(() => { getData() },[]);

    console.log(current !== domain)
    return (
        <div>
            <Header/>
            {
                current !== domain ? (
                    <>
                        <div style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 24,
                            outline: 1,
                            marginTop: '7%'
                        }} className="editor" dangerouslySetInnerHTML={{__html: converter.makeHtml(decode(data.content))}}/>
                    </>
                ) : (
                    <>
                        <TopPart/>
                        <MidPart/>
                        <BotPart/>
                    </>
                )
            }
        </div>
    )
}
