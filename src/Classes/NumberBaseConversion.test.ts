import { describe, it, expect } from 'vitest'

import { NumberBaseConversion } from './NumberBaseConversion.js';

describe("NumberBaseConversion", () => {
    describe("decimalToHex()", () => {
        it("should convert a positive decimal to hex", () => {
            const result = NumberBaseConversion.decimalToHex(255);
            expect(result).toBe("FF");
        });

        it("should convert zero to hex", () => {
            const result = NumberBaseConversion.decimalToHex(0);
            expect(result).toBe("0");
        });

        it("should convert one to hex", () => {
            const result = NumberBaseConversion.decimalToHex(1);
            expect(result).toBe("1");
        });

        it("should convert a large number to hex", () => {
            const result = NumberBaseConversion.decimalToHex(16777215);
            expect(result).toBe("FFFFFF");
        });

        it("should convert negative decimal to hex", () => {
            const result = NumberBaseConversion.decimalToHex(-42);
            expect(result).toBe("-2A");
        });

        it("should convert 10 to hex A", () => {
            const result = NumberBaseConversion.decimalToHex(10);
            expect(result).toBe("A");
        });

        it("should convert 255 to hex FF", () => {
            const result = NumberBaseConversion.decimalToHex(255);
            expect(result).toBe("FF");
        });
    });

    describe("hexToDecimal()", () => {
        it("should convert hex FF to decimal 255", () => {
            const result = NumberBaseConversion.hexToDecimal("FF");
            expect(result).toBe(255);
        });

        it("should convert hex 0 to decimal 0", () => {
            const result = NumberBaseConversion.hexToDecimal("0");
            expect(result).toBe(0);
        });

        it("should convert hex A to decimal 10", () => {
            const result = NumberBaseConversion.hexToDecimal("A");
            expect(result).toBe(10);
        });

        it("should convert lowercase hex to decimal", () => {
            const result = NumberBaseConversion.hexToDecimal("ff");
            expect(result).toBe(255);
        });

        it("should convert hex with 0x prefix to decimal", () => {
            const result = NumberBaseConversion.hexToDecimal("0xFF");
            expect(result).toBe(255);
        });

        it("should convert hex with 0X prefix to decimal", () => {
            const result = NumberBaseConversion.hexToDecimal("0XFF");
            expect(result).toBe(255);
        });

        it("should convert large hex to decimal", () => {
            const result = NumberBaseConversion.hexToDecimal("FFFFFF");
            expect(result).toBe(16777215);
        });
    });

    describe("decimalToBinary()", () => {
        it("should convert decimal 10 to binary 1010", () => {
            const result = NumberBaseConversion.decimalToBinary(10);
            expect(result).toBe("1010");
        });

        it("should convert decimal 0 to binary 0", () => {
            const result = NumberBaseConversion.decimalToBinary(0);
            expect(result).toBe("0");
        });

        it("should convert decimal 1 to binary 1", () => {
            const result = NumberBaseConversion.decimalToBinary(1);
            expect(result).toBe("1");
        });

        it("should convert decimal 255 to binary 11111111", () => {
            const result = NumberBaseConversion.decimalToBinary(255);
            expect(result).toBe("11111111");
        });

        it("should convert decimal 42 to binary 101010", () => {
            const result = NumberBaseConversion.decimalToBinary(42);
            expect(result).toBe("101010");
        });

        it("should convert negative decimal to binary", () => {
            const result = NumberBaseConversion.decimalToBinary(-5);
            expect(result).toBe("-101");
        });
    });

    describe("binaryToDecimal()", () => {
        it("should convert binary 1010 to decimal 10", () => {
            const result = NumberBaseConversion.binaryToDecimal("1010");
            expect(result).toBe(10);
        });

        it("should convert binary 0 to decimal 0", () => {
            const result = NumberBaseConversion.binaryToDecimal("0");
            expect(result).toBe(0);
        });

        it("should convert binary 11111111 to decimal 255", () => {
            const result = NumberBaseConversion.binaryToDecimal("11111111");
            expect(result).toBe(255);
        });

        it("should convert binary with 0b prefix to decimal", () => {
            const result = NumberBaseConversion.binaryToDecimal("0b1010");
            expect(result).toBe(10);
        });

        it("should convert binary with 0B prefix to decimal", () => {
            const result = NumberBaseConversion.binaryToDecimal("0B1010");
            expect(result).toBe(10);
        });

        it("should convert binary 101010 to decimal 42", () => {
            const result = NumberBaseConversion.binaryToDecimal("101010");
            expect(result).toBe(42);
        });
    });

    describe("hexToBinary()", () => {
        it("should convert hex FF to binary 11111111", () => {
            const result = NumberBaseConversion.hexToBinary("FF");
            expect(result).toBe("11111111");
        });

        it("should convert hex 0 to binary 0", () => {
            const result = NumberBaseConversion.hexToBinary("0");
            expect(result).toBe("0");
        });

        it("should convert hex A to binary 1010", () => {
            const result = NumberBaseConversion.hexToBinary("A");
            expect(result).toBe("1010");
        });

        it("should convert lowercase hex to binary", () => {
            const result = NumberBaseConversion.hexToBinary("ff");
            expect(result).toBe("11111111");
        });

        it("should convert hex with 0x prefix to binary", () => {
            const result = NumberBaseConversion.hexToBinary("0xFF");
            expect(result).toBe("11111111");
        });

        it("should convert hex 1A3 to binary 110100011", () => {
            const result = NumberBaseConversion.hexToBinary("1A3");
            expect(result).toBe("110100011");
        });
    });

    describe("binaryToHex()", () => {
        it("should convert binary 11111111 to hex FF", () => {
            const result = NumberBaseConversion.binaryToHex("11111111");
            expect(result).toBe("FF");
        });

        it("should convert binary 0 to hex 0", () => {
            const result = NumberBaseConversion.binaryToHex("0");
            expect(result).toBe("0");
        });

        it("should convert binary 1010 to hex A", () => {
            const result = NumberBaseConversion.binaryToHex("1010");
            expect(result).toBe("A");
        });

        it("should convert binary with 0b prefix to hex", () => {
            const result = NumberBaseConversion.binaryToHex("0b1111");
            expect(result).toBe("F");
        });

        it("should convert binary 101010 to hex 2A", () => {
            const result = NumberBaseConversion.binaryToHex("101010");
            expect(result).toBe("2A");
        });

        it("should convert binary 110100011 to hex 1A3", () => {
            const result = NumberBaseConversion.binaryToHex("110100011");
            expect(result).toBe("1A3");
        });
    });
});
