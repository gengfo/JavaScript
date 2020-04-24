import { getUsefulContents } from './modules/file.js';

getUsefulContents('http://www.people.com.cn',
    data => { doSomethingUseful(data); });