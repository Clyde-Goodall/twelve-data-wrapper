import type {TwelveDataConfig} from "./types/config";

class BaseClient {
    public testThing: () => void;
    public fundamentals: Fundamentals;
    constructor(config?: TwelveDataConfig) {
        this.testThing = testThing.bind(this);
        this.fundamentals = Fundamentals.bind(this);
    }
}

class Fundamentals {
    constructor(config?: TwelveDataConfig) {

    }
}

function testThing() {

}

const base = new BaseClient();
base.testThing();