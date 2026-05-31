export class NumberBaseConversion {
    /**
     * Convert a decimal number to its hexadecimal representation
     * @param decimalNumber - The decimal number to convert
     * @returns hexadecimal string representation
     */
    static decimalToHex(decimalNumber) {
        if (!Number.isInteger(decimalNumber)) {
            throw new Error("Input must be an integer");
        }
        const hex = decimalNumber.toString(16).toUpperCase();
        return hex;
    }
    /**
     * Convert a hexadecimal string to its decimal representation
     * @param hexString - The hexadecimal string to convert
     * @returns decimal number
     */
    static hexToDecimal(hexString) {
        const cleaned = hexString.replace("0x", "").replace("0X", "").trim();
        const decimal = parseInt(cleaned, 16);
        if (isNaN(decimal)) {
            throw new Error("Invalid hexadecimal string");
        }
        return decimal;
    }
    /**
     * Convert a decimal number to its binary representation
     * @param decimalNumber - The decimal number to convert
     * @returns binary string representation
     */
    static decimalToBinary(decimalNumber) {
        if (!Number.isInteger(decimalNumber)) {
            throw new Error("Input must be an integer");
        }
        const binary = decimalNumber.toString(2);
        return binary;
    }
    /**
     * Convert a binary string to its decimal representation
     * @param binaryString - The binary string to convert
     * @returns decimal number
     */
    static binaryToDecimal(binaryString) {
        const cleaned = binaryString.replace("0b", "").replace("0B", "").trim();
        const decimal = parseInt(cleaned, 2);
        if (isNaN(decimal)) {
            throw new Error("Invalid binary string");
        }
        return decimal;
    }
    /**
     * Convert a hexadecimal string to its binary representation
     * @param hexString - The hexadecimal string to convert
     * @returns binary string representation
     */
    static hexToBinary(hexString) {
        const decimal = NumberBaseConversion.hexToDecimal(hexString);
        const binary = NumberBaseConversion.decimalToBinary(decimal);
        return binary;
    }
    /**
     * Convert a binary string to its hexadecimal representation
     * @param binaryString - The binary string to convert
     * @returns hexadecimal string representation
     */
    static binaryToHex(binaryString) {
        const decimal = NumberBaseConversion.binaryToDecimal(binaryString);
        const hex = NumberBaseConversion.decimalToHex(decimal);
        return hex;
    }
}
