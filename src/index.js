import "core-js/stable";
import "regenerator-runtime/runtime";
import fetch from 'node-fetch';

import { helper } from './helpers';

const main = async () => {
  console.log(123);
  const resp = await fetch('http://www.hinet.net');
  const data = await resp.text();
  console.log(data);
};

main();
