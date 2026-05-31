import { describe, it, expect } from 'vitest';
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
    describe("hexToFloat()", () => {
        it("should convert hex 40D00000 to float 6.5 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("40D00000", "32");
            expect(result).toBeCloseTo(6.5, 5);
        });
        it("should convert hex 0x40D00000 to float 6.5 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("0x40D00000", "32");
            expect(result).toBeCloseTo(6.5, 5);
        });
        it("should convert hex 3F800000 to float 1.0 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("3F800000", "32");
            expect(result).toBeCloseTo(1.0, 5);
        });
        it("should convert hex 00000000 to float 0.0 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("00000000", "32");
            expect(result).toBeCloseTo(0.0, 5);
        });
        it("should convert hex C0000000 to float -2.0 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("C0000000", "32");
            expect(result).toBeCloseTo(-2.0, 5);
        });
        it("should convert hex 7F7FFFFF to max float32 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("7F7FFFFF", "32");
            expect(result).toBeGreaterThan(3.4e38);
            expect(result).toBeLessThan(3.5e38);
        });
        it("should convert hex 7FEFFFFFFFFFFFFF to max float64 (float64)", () => {
            const result = NumberBaseConversion.hexToFloat("7FEFFFFFFFFFFFFF", "64");
            expect(result).toBeGreaterThan(1.7e308);
            expect(result).toBeLessThan(1.8e308);
        });
        it("should convert hex 00800000 to smallest normalized positive float32", () => {
            const result = NumberBaseConversion.hexToFloat("00800000", "32");
            expect(result).toBeCloseTo(1.17549435e-38, 10);
        });
        it("should convert hex 00000001 to smallest positive denormalized float32", () => {
            const result = NumberBaseConversion.hexToFloat("00000001", "32");
            expect(result).toBeCloseTo(1.40129846e-45, 10);
        });
        it("should convert hex 80000001 to smallest negative denormalized float32", () => {
            const result = NumberBaseConversion.hexToFloat("80000001", "32");
            expect(result).toBeCloseTo(-1.40129846e-45, 10);
        });
        it("should convert hex 3F800001 to 1 + machine epsilon float32", () => {
            const result = NumberBaseConversion.hexToFloat("3F800001", "32");
            expect(result).toBeCloseTo(1.0 + 1.1920929e-7, 10);
        });
        it("should convert hex 0000000000000001 to smallest positive denormalized float64", () => {
            const result = NumberBaseConversion.hexToFloat("0000000000000001", "64");
            expect(result).toBeCloseTo(4.9406564584124654e-324, 20);
        });
        it("should convert hex 8000000000000001 to smallest negative denormalized float64", () => {
            const result = NumberBaseConversion.hexToFloat("8000000000000001", "64");
            expect(result).toBeCloseTo(-4.9406564584124654e-324, 20);
        });
        it("should convert hex BF800000 to -1.0 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("BF800000", "32");
            expect(result).toBeCloseTo(-1.0, 5);
        });
        it("should convert hex 400921FB54442D18 to float 3.14 (float64)", () => {
            const result = NumberBaseConversion.hexToFloat("400921FB54442D18", "64");
            expect(result).toBeCloseTo(3.141592653589793, 12);
        });
        it("should convert hex 4000000000000000 to float 2.0 (float64)", () => {
            const result = NumberBaseConversion.hexToFloat("4000000000000000", "64");
            expect(result).toBeCloseTo(2.0, 12);
        });
        it("should convert hex 0x400921FB54442D18 to float 3.14 (float64)", () => {
            const result = NumberBaseConversion.hexToFloat("0x400921FB54442D18", "64");
            expect(result).toBeCloseTo(3.141592653589793, 12);
        });
        it("should convert hex 0000000000000000 to +0.0 (float64)", () => {
            const result = NumberBaseConversion.hexToFloat("0000000000000000", "64");
            expect(result).toBeCloseTo(0.0, 12);
            expect(Object.is(result, +0.0)).toBeTruthy();
        });
        it("should convert hex 00000000 to +0.0 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("00000000", "32");
            expect(result).toBeCloseTo(0.0, 5);
            expect(Object.is(result, +0.0)).toBeTruthy();
        });
        it("should convert hex 80000000 to -0.0 (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("80000000", "32");
            expect(result).toBeCloseTo(0.0, 5);
            expect(Object.is(result, -0.0)).toBeTruthy();
        });
        it("should convert hex 7F800000 to Infinity (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("7F800000", "32");
            expect(result).toBe(Infinity);
        });
        it("should convert hex FF800000 to -Infinity (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("FF800000", "32");
            expect(result).toBe(-Infinity);
        });
        it("should convert hex 7FC00000 to NaN (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("7FC00000", "32");
            expect(isNaN(result)).toBeTruthy();
        });
        it("should convert hex 7FF8000000000000 to NaN (float64)", () => {
            const result = NumberBaseConversion.hexToFloat("7FF8000000000000", "64");
            expect(isNaN(result)).toBeTruthy();
        });
        it("should convert lowercase hex to float (float32)", () => {
            const result = NumberBaseConversion.hexToFloat("3f800000", "32");
            expect(result).toBeCloseTo(1.0, 5);
        });
    });
    describe("binaryToFloat()", () => {
        it("should convert 32-bit binary to float 6.5 (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("01000000110100000000000000000000", "32");
            expect(result).toBeCloseTo(6.5, 5);
        });
        it("should convert 32-bit binary 00111111100000000000000000000000 to float 1.0 (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("00111111100000000000000000000000", "32");
            expect(result).toBeCloseTo(1.0, 5);
        });
        it("should convert 32-bit binary to +0.0 (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("00000000000000000000000000000000", "32");
            expect(result).toBeCloseTo(0.0, 5);
            expect(Object.is(result, +0.0)).toBeTruthy();
        });
        it("should convert 32-bit binary to float -2.0 (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("11000000000000000000000000000000", "32");
            expect(result).toBeCloseTo(-2.0, 5);
        });
        it("should convert 32-bit binary with 0b prefix to float 1.0 (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("0b00111111100000000000000000000000", "32");
            expect(result).toBeCloseTo(1.0, 5);
        });
        it("should convert 64-bit binary to float 3.14 (float64)", () => {
            const result = NumberBaseConversion.binaryToFloat("0100000000001001001000011111101101010100010001000010100100011000", "64");
            expect(result).toBeCloseTo(3.141592653589793, 12);
        });
        it("should convert 64-bit binary to float 2.0 (float64)", () => {
            const result = NumberBaseConversion.binaryToFloat("0100000000000000000000000000000000000000000000000000000000000000", "64");
            expect(result).toBeCloseTo(2.0, 12);
        });
        it("should convert 64-bit binary to +0.0 (float64)", () => {
            const result = NumberBaseConversion.binaryToFloat("0000000000000000000000000000000000000000000000000000000000000000", "64");
            expect(result).toBeCloseTo(0.0, 12);
            expect(Object.is(result, +0.0)).toBeTruthy();
        });
        it("should convert 32-bit binary to -0.0 (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("10000000000000000000000000000000", "32");
            expect(result).toBeCloseTo(0.0, 5);
            expect(Object.is(result, -0.0)).toBeTruthy();
        });
        it("should convert 32-bit binary to Infinity (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("01111111100000000000000000000000", "32");
            expect(result).toBe(Infinity);
        });
        it("should convert 32-bit binary to -Infinity (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("11111111100000000000000000000000", "32");
            expect(result).toBe(-Infinity);
        });
        it("should convert 32-bit binary to NaN (float32)", () => {
            const result = NumberBaseConversion.binaryToFloat("01111111110000000000000000000000", "32");
            expect(isNaN(result)).toBeTruthy();
        });
        it("should convert 64-bit binary to NaN (float64)", () => {
            const result = NumberBaseConversion.binaryToFloat("0111111111111111110000000000000000000000000000000000000000000000", "64");
            expect(isNaN(result)).toBeTruthy();
        });
        it("should convert 32-bit binary to smallest positive denormalized float32", () => {
            const result = NumberBaseConversion.binaryToFloat("00000000000000000000000000000001", "32");
            expect(result).toBeCloseTo(1.40129846e-45, 10);
        });
        it("should convert 32-bit binary to smallest negative denormalized float32", () => {
            const result = NumberBaseConversion.binaryToFloat("10000000000000000000000000000001", "32");
            expect(result).toBeCloseTo(-1.40129846e-45, 10);
        });
        it("should convert 32-bit binary to smallest normalized positive float32", () => {
            const result = NumberBaseConversion.binaryToFloat("00000000100000000000000000000000", "32");
            expect(result).toBeCloseTo(1.17549435e-38, 10);
        });
        it("should convert 64-bit binary to smallest positive denormalized float64", () => {
            const result = NumberBaseConversion.binaryToFloat("0000000000000000000000000000000000000000000000000000000000000001", "64");
            expect(result).toBeCloseTo(4.9406564584124654e-324, 20);
        });
        it("should convert 64-bit binary to smallest negative denormalized float64", () => {
            const result = NumberBaseConversion.binaryToFloat("1000000000000000000000000000000000000000000000000000000000000001", "64");
            expect(result).toBeCloseTo(-4.9406564584124654e-324, 20);
        });
        it("should convert 32-bit binary to 1 + machine epsilon float32", () => {
            const result = NumberBaseConversion.binaryToFloat("00111111100000000000000000000001", "32");
            expect(result).toBeCloseTo(1.0 + 1.1920929e-7, 10);
        });
        it("should default to float32 when precision not specified", () => {
            const result = NumberBaseConversion.binaryToFloat("00111111100000000000000000000000");
            expect(result).toBeCloseTo(1.0, 5);
        });
    });
});
