import * as http from 'http'
import * as https from 'https'

const api_key = "e7dc7fa122b345bfb36086ff6be159bc"

//NEED TO CHANGE PATH FOR CORRECT ML MODEL
const ml_options = {
    hostname: "api.clarifai.com",
    path: '/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Key " + api_key
    }
}

  function runHttpsRequest(postData: string): string {
    let output = ''
    const req = https.request(ml_options, res => {
        //callback for nonerror results
        console.log(`statusCode: ${res.statusCode}`)

        //result is a stream and hence requires another callback to read data
        let responseBody = '';

        res.on('data', (chunk) => {
            responseBody += chunk;
        });

        res.on('end', () => {
            console.log(responseBody);
            output = responseBody.slice()
        });
    })

    //set up callback for error
    req.on('error', error => {
        console.error(error)
    })
    req.write(postData)

    //finishes sending the request
    req.end()
    return output
}

export{ runHttpsRequest }