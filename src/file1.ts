import { cp } from 'shelljs';

const dest = 'temp';
const src = 'temp';

cp('-Rf', src, dest);
