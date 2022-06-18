const axios = require('axios')

const baseUrl = 'http://localhost:8000/api/v1'
const domain  = 'letsdoc.serhiiromaniuk.com'
const owner = "0b518d5b-006b-49b6-a609-a6f09bfcdc74"

const user_domains_upsert = async () => {
    const url = baseUrl + '/user/domains/upsert'

    var data = {
        name:      "adadaw." + domain,
        owner,
        value:     "google.com"
    }
    console.log('domains upsert')
    axios.post(url, data).then(res => console.log(res.data)).catch(e => console.log(e.response.data))
    console.log('===')
}

const user_domains_get = async () => {
    const url = baseUrl + '/user/domains/get'

    var data = {
        owner,
    }
    console.log('get')

    const res = await axios.post(url, data)
        
    console.log(res.data)
    console.log('===')
    
}

const user_domains_delete = () => {
    const url = baseUrl + '/user/domains/delete'

    var data = {
        name:      "rewq." + domain,
        owner,
    }
    console.log('delete')

    axios.post(url, data).then(
            function(res) {
                console.log(res.data)
            }
        ).catch(
            function(error) {
                console.log(error.response.data)
            }
        )
        console.log('===')
}

const doc_page_create = async () => {
    const url = baseUrl + '/doc/page/create'

    var data = {
        content: `YXNkbGtqYXNkbGFtc2xka21hcyA7bG1hc2Q7bCBtYXM7a2RtYXNrIG1kYWxrcyBqa2Fuc2Rqa25h
c2prZG5hc2tqZG5qazAK`,
        owner,
    }
    console.log('create')
    axios.post(url, data).then(res => console.log(res.data)).catch(err => console.log(err.response.data))


    console.log('===')
}

const doc_page_get = async () => {
    const url = baseUrl + '/doc/page/get'

    var data = {
        owner,
    }
    console.log('get')
    const res = await axios.post(url, data)

    console.log(res.data)
    console.log('===')
}

const doc_page_update= async () => {
    const url = baseUrl + '/doc/page/update'

    var data = {
        content: '+',
        owner,
    }
    console.log('update')
    axios.post(url, data).then(res => console.log(res.data)).catch(err => console.log(err.response.data))


    console.log('===')
}

user_domains_upsert()
user_domains_get()
user_domains_delete()
doc_page_create()
doc_page_get()
doc_page_update()
