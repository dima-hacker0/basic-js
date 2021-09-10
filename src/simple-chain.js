import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    mas: [],

    getLength() {
        return this.mas.length;
    },
    addLink(value) {
        if (value === undefined) {
            this.mas.push(`( )`);
        } 
        else {
            this.mas.push(`( ${value} )`);
        }
        return this;
    },
    removeLink(position) {
        if (this.mas[position - 1] == undefined) {
            this.mas = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.mas.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.mas.reverse();
        return this;
    },
    finishChain() {
        let result = this.mas.join('~~');
        this.mas = [];
        return result;
    }
};
