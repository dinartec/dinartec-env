import {expect} from 'chai';
import { JSDOM } from 'jsdom';
import fs from 'fs';

let window;
beforeEach(() => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    window = (new JSDOM(index, {runScripts: "dangerously"})).window;
});

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});


describe('index.html', () => {
    it('should say "Users"', (done) => {
        const h1 = window.document.querySelector("h1");
        expect(h1.innerHTML).to.equal("Users");
        done();
    });
});

afterEach(() => window.close());

