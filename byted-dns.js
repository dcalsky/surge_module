const rootSvr = '10.8.8.8';
let svrs = [...$network.dns];
svrs.push(rootSvr);
$done({ servers: svrs });
