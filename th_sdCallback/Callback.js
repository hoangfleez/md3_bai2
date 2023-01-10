function download(url,callback) {
    setTimeout(()=>{
        console.log(`Downloading ${url}...`);
        callback(url);
    },1000)
}

function process(url){
    console.log(`Processing ${url}...`);
}

let url ='https://www.javascripttutorial.net/pic.jpg';
download(url,process);
