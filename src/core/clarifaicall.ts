import * as http from 'http'
import * as https from 'https'
import { promptSimShell } from 'readline-sync'

const api_key = "e7dc7fa122b345bfb36086ff6be159bc"

const ml_options = {
    hostname: "api.clarifai.com",
    path: '/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Key " + api_key
    }
}
const ml_request_data = `{
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://i.imgur.com/ROLJaSi.jpeg"
          }
        }
      }
    ]
  }`


const demo_options = {
    hostname: "feature.isri.cmu.edu",
    port: 3003,
    path: '/',
    method: 'GET'
}


function runHttpsRequest(options: any, postData: string) {
    const req = https.request(options, res => {
        //callback for nonerror results
        console.log(`statusCode: ${res.statusCode}`)

        //result is a stream and hence requires another callback to read data
        let responseBody = '';

        res.on('data', (chunk) => {
            responseBody += chunk;
        });

        res.on('end', () => {
            console.log(responseBody);
        });
    })

    //set up callback for error
    req.on('error', error => {
        console.error(error)
    })
    req.write(postData)

    //finishes sending the request
    req.end()
}


function promisifiedHttpRequest(options: any): Promise<string> {
    return new Promise((resolve, reject) => {
        const req = http.request(options)
        req.on('response', async (res) => {
            res.setEncoding('utf8');
            let responseBody = '';

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                resolve(responseBody);
            });
        })
        req.on('error', error => {
            reject(error)
        })
        req.end()
    });
};



// run a single request:
runHttpsRequest(ml_options, ml_request_data)

// run a request asynchronously
const promise = promisifiedHttpRequest(demo_options)
promise.then(r => console.log(r))


// TODO: run 100 demo requests, 10 in parallel
let requestsLeft = 100
let MAX_PARALLEL = 10
let parallelRunninng = 0

function startRequests() {
    while (requestsLeft > 0  && parallelRunninng < MAX_PARALLEL){
        requestsLeft--
        parallelRunninng++

        const promise: Promise<string> = promisifiedHttpRequest(demo_options)

        promise.then(r => {
            parallelRunninng--
            console.log(r)
            startRequests()
        })
    }
}

startRequests()
